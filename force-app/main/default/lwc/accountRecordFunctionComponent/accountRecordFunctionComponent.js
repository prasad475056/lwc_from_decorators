import { LightningElement, track, wire} from 'lwc';
import getLimitedAccounts from '@salesforce/apex/AccountRecordControllers.getLimitedAccounts';
export default class AccountRecordFunctionComponent extends LightningElement 
{
    @track accountRecordList;

    @wire (getLimitedAccounts)
    getAccountRecords({data,error})
    {
        if(data)
        {
            this.accountRecordList = data;
        }
        else if(error)
        {
            console.log(error);
        }
    }
    
}