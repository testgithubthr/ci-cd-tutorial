import { LightningElement, api } from 'lwc';
import sendTemplateMessage from '@salesforce/apex/WhatsappController.sendTemplateMessage';
export default class WhatsappIntegration extends LightningElement {

    @api recordId;

    onSendMessageTemplate() {

        sendTemplateMessage({ contactId: this.recordId })

        .then(result => {

            window.alert("Message Send Successfully");
        })

        .catch(error => {

            window.alert("Message Failed");
        })
    }

}