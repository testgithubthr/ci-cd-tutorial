import { LightningElement,api } from 'lwc';

export default class Sn_04_api_method_parentComponent extends LightningElement {


    @api handleClick(){
        This.template.querySelector("c-sn_04_api_method_child-Component").handleChangeValue();
    }
}