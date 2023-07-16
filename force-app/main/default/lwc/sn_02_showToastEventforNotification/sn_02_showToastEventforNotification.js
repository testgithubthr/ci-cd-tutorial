import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Sn_02_showToastEventforNotification extends LightningElement {

    MainshowToastEvent(){
        this.showToast();

    }

    showToast(){
        const event = new ShowToastEvent({
            title   : 'Show Toast Demo',
            message : 'want to display toast example',
            variant : 'SUCCESS',
        })
        this.dispatchEvent(event);
    }
}