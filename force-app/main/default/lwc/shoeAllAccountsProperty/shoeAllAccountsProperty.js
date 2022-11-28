import { LightningElement, track, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountRecordControllers.getAllAccounts';
export default class ShoeAllAccountsProperty extends LightningElement 
{
    @track allAccountRecordList;

    onShowAllAccountRecords()
    {
        getAllAccounts().then(result =>{

          this.allAccountRecordList = result;
       })
       .catch(error =>{

        console.log('error has been occcured..'+error);
       })
        

       
    }
}