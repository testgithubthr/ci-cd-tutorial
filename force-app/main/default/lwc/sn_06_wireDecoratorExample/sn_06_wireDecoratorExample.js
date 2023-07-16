import { LightningElement,track,wire } from 'lwc';
import getAccountRecordList from '@salesforce/apex/sn_06_wireDecoratorApexClass.getAccountRecordList';

const col = [
                {label : "myName", field : "Name" },
                {label : "myRecordId", field : "id"}

            ];

export default class Sn_06_wireDecoratorExample extends LightningElement {

     @track columns = col;
     @track data = [];

     @wire(getAccountRecordList)  

     wireAccount ({data,error})
     {
        if(data)
        {
            this.data = data;
        }
        else if(error)
        {
            SystemModstamp.debug('error occured');
        }
     }
     
}