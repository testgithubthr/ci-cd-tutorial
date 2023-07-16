import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/sn_07_01_contactControllerDataTable.getContactList';

const col = [
                { label: 'First Name', fieldName: 'FirstName' },
                { label: 'Last Name', fieldName: 'LastName' },
                { label: 'website', fieldName: 'website__c' },
                { label: 'Phone', fieldName: 'Phone', type: 'phone' },
                { label: 'Email', fieldName: 'Email', type: 'email' },
            ];
export default class Sn_07_01_contactDataTableExample extends LightningElement {

    error ;

    columns = col ;

    @wire(getContactList)

    contacts;

 
}