import { LightningElement,api } from 'lwc';

export default class Sn_04_api_method_childComponent extends LightningElement {

    @api itemname = "Salesforce Noob";

    @api handleChangeValue(){

        this.itemname ='Salesforce LWC demo';
    }
}