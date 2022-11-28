import { LightningElement, track, wire} from 'lwc';
import getAllAccounts  from '@salesforce/apex/AccountRecordControllers.getAllAccounts';
export default class ShowAccountDetailsComponent extends LightningElement 
{
    @track accountRecords;

    @wire (getAllAccounts) accountRecords;
}