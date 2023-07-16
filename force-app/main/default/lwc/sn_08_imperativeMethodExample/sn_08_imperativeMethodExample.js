import { LightningElement,track } from 'lwc';
import getContactList from '@salesforce/apex/sn_08_contactListThroughImperativeMethod.getContactList';

    const col = [
                    {label : 'first_Name',fieldName : 'firstname'},
                    {label : 'last_name', fieldName : 'lastname'},
                    {label : 'Phone', fieldName : 'Phone'},
                ];

export default class Sn_08_imperativeMethodExample extends LightningElement {

    @track Columns = col;

    @track data = [];

    connectedCallback() 
    {
        getContactList()

            .then (result =>{
                this.data = result;
            })
            .catch(error => {
                console.log('error occured');
            })
    }

}