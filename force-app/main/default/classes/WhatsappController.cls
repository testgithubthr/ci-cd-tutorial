global class WhatsappController 
{
    @AuraEnabled(cacheable=true)
    
    global static Boolean sendTemplateMessage(string contactId)
    {
        System.debug(contactId); 
        
        Contact contactDetail = [Select Id,Phone,Title from Contact where Id=:contactId limit 1];
   
        System.debug(contactDetail);
        
        string whatsappNumber = '91'+contactDetail.Phone;
        
        System.debug(whatsappNumber);
        
        string whatsappTitle = contactDetail.title;
        
        System.debug(whatsappTitle);
        
        Http http = new Http();
        
        HttpRequest httpReq = new HttpRequest();
        httpReq.setEndpoint('https://graph.facebook.com/v15.0/106099649070821/messages');
        httpReq.setMethod('POST');
        httpReq.setHeader('Content-Type', 'application/json');
        httpReq.setHeader('Authorization', 'Bearer '+System.Label.whatsappIntegrationAPIAccessToken);
        
       // string messageBody = '{ \"messaging_product\": \"whatsapp\", \"to\": \"919850565298\", \"type\": \"template\", \"template\": { \"name\": \"hello_world\", \"language\": { \"code\": \"en_US\" } } }';
         
       string messageBody = '{ \"messaging_product\": \"whatsapp\", \"to\": \"'+whatsappNumber+'\", \"type\": \"template\", \"template\": { \"name\": \"hello_world\", \"language\": { \"code\": \"en_US\" } } }';
       
        httpReq.setBody(messageBody);
    
    HttpResponse res = http.send(httpReq);
    
    System.debug('response.....:'+res.getBody());
    System.debug('getStatusCode.....:'+res.getStatusCode());
    
    if(res.getStatusCode() == 200)
    {
        return true;
    }else 
    {
        return false;
    }
    
}
}