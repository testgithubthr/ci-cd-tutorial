import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/sn_10_for_eachExample.getContactList';

export default class Sn_10_for_each_condition_example extends LightningElement {

    @wire (getContactList)

    conList;

}