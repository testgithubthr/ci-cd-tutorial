import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import { LightningElement,track } from 'lwc';

export default class Sn_05_trackDecorator extends LightningElement {

    @track fullname = {FirstName : "", LastName : ""};

    handleChange(event){
        
        const field = event.target.name;

        window.alert(field);

        if(field === 'firstName'){
            this.fullname.FirstName = event.target.value;
        }
        else if(field === 'lastname'){
            this.fullname.LastName = event.target.value;
        }
    }

}