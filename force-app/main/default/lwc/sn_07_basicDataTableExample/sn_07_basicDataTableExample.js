import { LightningElement } from 'lwc';

const col = [
                {label : 'Opportunity Name', fieldName :'opportunityName', type : 'text'},

                {label : 'Confidence', fieldName : 'confidence',type : 'percentage',
                                       cellAttributes : {
                                                            iconName : {fieldName : 'trendIcon'},
                                                            iconPosition : 'right',                                                                          iconName
                                                        },
                },
                {label : 'Amount', fieldName : 'amouint',type : 'currency',
            
                                                        typeAttributes : {currencyCode : 'EUR',step : '0.001'},
                },

                {label : 'contact-email', fieldName : 'contact', type : 'email'},

                {label : 'contact phone', fieldName : 'phone', type : 'phone' },
                

            ];

const myDdata = [
                {
                    id: 'a',
                    opportunityName: 'Cloudhub',
                    confidence: 0.2,
                    amount: 25000,
                    contact: 'jrogers@cloudhub.com',
                    phone: '2352235235',
                    trendIcon: 'utility:down',
                },
                {
                    id: 'b',
                    opportunityName: 'Quip',
                    confidence: 0.78,
                    amount: 740000,
                    contact: 'quipy@quip.com',
                    phone: '2352235235',
                    trendIcon: 'utility:up',
                },
            ];


            
export default class Sn_07_basicDataTableExample extends LightningElement {

    data = myDdata;
    columns = col;

    getSelectedName(event) {
        const selectedRows = event.detail.selectedRows;

        for (let i = 0; i < selectedRows.length; i++) {
            
            alert('You selected: ' + selectedRows[i].opportunityName);
        }
    }

}