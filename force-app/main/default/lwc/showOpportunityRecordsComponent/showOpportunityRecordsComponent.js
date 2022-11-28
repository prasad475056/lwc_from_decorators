import { LightningElement, track, wire } from 'lwc';
import getAllOpportunities from '@salesforce/apex/OpportunityRecordsHelper.getAllOpportunities';
export default class ShowOpportunityRecordsComponent extends LightningElement 
{
    @track getAllOppRecords;

    @wire (getAllOpportunities) getAllOppRecords;
}