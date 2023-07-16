import { LightningElement,track } from 'lwc';

export default class Sn_09_if_else_conditionalExample extends LightningElement {

    @track myButton = 'Show';
    @track cardVisible = false;

        myTitle = 'Salesforce Noob';

    handleClick(event){

        const label = event.target.label;

        if(label === 'Show')
        {
            this.myButton = 'Hide';
            this.cardVisible = true;
        }
        else if(label === 'Hide')
        {
            this.myButton = 'Show';
            this.cardVisible = false ;
        }
    }
}