@RestResource(urlMapping='/whatsapp/webhooks/v1/*')
global without sharing class myWhatsappWebhooks 
{
    private static Final String SIGNATURE_VALID_MESSAGE     = 'Signature Verified';
    private static Final String SIGNATURE_NOT_VALID_MESSAGE = 'Signature could not be verified';
    
    @HttpGet // GET
    global static void doGet() {
        RestResponse response = RestContext.response;
        RestRequest request = RestContext.request;
        if(request.params.get('hub.verify_token') == 'WHATSAPPTOKEN'){
            response.responseBody = Blob.valueOf( request.params.get('hub.challenge') );
        }
    }
    
    
     @HttpPost // POST
    global static void doPost() {
        
        RestResponse response = RestContext.response;
        response.addHeader('Content-type','application/json');
        String responseString = RestContext.request.requestBody.toString();
        Map<String, String> headers = RestContext.request.headers;
        String responseValid = validateWhatsAppSignature(RestContext.request, responseString);
        
        if(responseValid == SIGNATURE_VALID_MESSAGE){
            System.debug(System.LoggingLevel.DEBUG, ' Headers Response From WhatsApp \n  '+ JSON.serialize(headers) );
            System.debug(System.LoggingLevel.DEBUG, ' Response From WhatsApp \n  '+ responseString);
            String finalResponseString = responseString.replace('type', 'typex');
            myWhatsAppMessage parentMessage = (myWhatsAppMessage)JSON.deserialize( finalResponseString, myWhatsAppMessage.class);
            List<myWhatsAppMessage.entry> messageEntries = parentMessage.entry;
            if(messageEntries != null && messageEntries.size() > 0){
                myWhatsAppMessage.entry entryMessage = messageEntries.get(0);
                List<myWhatsAppMessage.changes> changeMessages = entryMessage.changes;
                if(changeMessages != null && changeMessages.size() > 0){
                    myWhatsAppMessage.changes changeMessage = changeMessages.get(0);
                    List<myWhatsAppMessage.contacts> contactList = changeMessage.value.contacts;
                    List<myWhatsAppMessage.messages> messageList = changeMessage.value.messages;
                    myWhatsAppMessage.metadata metadata = changeMessage.value.metadata;
                    /* Create record into Salesforce */
                    WA_Message__c salesforceMessage = new WA_Message__c();
                    salesforceMessage.BusinessPhoneNumber__c = metadata != null ? metadata.display_phone_number : null;
                    
                    if(contactList != null && contactList.size() > 0){
                        myWhatsAppMessage.contacts contact = contactList.get(0);
                        salesforceMessage.CustomerPhone__c = contact.wa_id;
                        salesforceMessage.CustomerName__c = contact.profile.name;
                    }
                    
                    if(messageList != null && messageList.size() > 0){
                        /* Simple Message */
                        myWhatsAppMessage.messages message = messageList.get(0);
                        salesforceMessage.MessageID__c = message.id;
                        salesforceMessage.Message_Type__c = message.typex;
                        salesforceMessage.MessageSentTime__c = System.now();
                        salesforceMessage.Message_Content__c = message.text != null? message.text.body : null;
                        
                        /* If message is reaction */
                        salesforceMessage.Reaction__c = message.reaction != null ? message.reaction.emoji : null;
                        salesforceMessage.MessageParentId__c = message.reaction != null ? message.reaction.message_id : null;
                        
                        /* If message is Image */
                        salesforceMessage.MessageId__c = message.image != null ? message.image.id : null;
                        salesforceMessage.Message_Type__c = message.image != null ? message.image.mime_type : null;
                        salesforceMessage.Image_sha256__c = message.image != null ? message.image.sha256 : null;
                        
                        /* If message is Video 
                        salesforceMessage.VideoId__c = message.video != null ? message.video.id : null;
                        salesforceMessage.VideoType__c = message.video != null ? message.video.mime_type : null;
                        salesforceMessage.VideoSHA256__c = message.video != null ? message.video.sha256 : null;*/
                        
                        /* If the message is reply to another message */
                        salesforceMessage.MessageParentId__c = message.context != null ? message.context.id : null;
                        
                        insert salesforceMessage ;
                    }
                    
                }
            }
        }else{
            response.responseBody = Blob.valueOf('{success:false, event:"Unknown","message:"'+responseValid+'"}');
            response.statusCode = 401;
            return;
        }
        
        response.statusCode = 200;
        response.responseBody = Blob.valueOf('{success:true, event:"success"}');
    }
    
    private static String validateWhatsAppSignature(RestRequest request, String responseString) {
        // Validate Stripe signature Start 
        Map<String, String> headers = request.headers;
        
        String whatsAppSignature = headers.get('X-Hub-Signature-256');
        
        String whatsAppPayload = RestContext.request.requestBody.toString();
        
        // Verify the signature using 'hmacSHA256'. I have the Webhook key stored in a Custom Label
        String whatsAppSecret = System.Label.whatsappSecreteToken; // Facebook Application Secret Key
        Blob signedPayload = Crypto.generateMac('hmacSHA256', Blob.valueOf(whatsAppPayload), Blob.valueOf( whatsAppSecret ));
        
        String encodedPayload = 'sha256='+EncodingUtil.convertToHex(signedPayload);
        // Return status code based on whether signed payload matches or not
        
        String response = (encodedPayload == whatsAppSignature)? SIGNATURE_VALID_MESSAGE : SIGNATURE_NOT_VALID_MESSAGE;
        return response;
        // Validate Stripe signature End 
    }
}