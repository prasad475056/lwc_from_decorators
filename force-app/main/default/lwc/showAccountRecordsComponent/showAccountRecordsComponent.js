import { LightningElement, api, wire } from 'lwc';
import getAllAccountRecords from '@salesforce/apex/AccountRecordControllers.getAllAccountRecords';
import showToastEvent from 'lightning/platformShowToastEvent'
const tablecolumns = [
                        {label:'Account Name', fieldName : 'Name'},
                        {label:'Rating Value', fieldName : 'Rating'},
                        {label:'Industry Name', fieldName : 'Industry'},
                        {label:'Annual Revenue', fieldName : 'AnnualRevenue'},
                        {label:'Contact Number', fieldName : 'phone'},
                        {label:'Fax Number', fieldName : 'Fax'},
                        {label:'Account Type', fieldName : 'Type'}
                    ];

export default class ShowAccountRecordsComponent extends LightningElement 
{
    @api allAccountRecords;
    @api cols = tablecolumns;
    @wire (getAllAccountRecords) 
    getAccountRecords({data,error})
    {
        if(data)
        {
            this.allAccountRecords = data;

            const showSuccessMessage = new showToastEvent({
                                         title : 'success',
                                         message : 'records loaded successfully',
                                         variant : 'success',
                                         mode : 'dismissable'

                                            });
             this.dispatchEvent(showSuccessMessage);                               
        }
        else if(error)
        {
            console.log('error has been occured'+error);
        }
    }
}