import { LightningElement, track } from 'lwc';
import searchAccountByName from '@salesforce/apex/AccountRecordControllers.searchAccountByName';
export default class SearchAccountRecordsComponent extends LightningElement 
{
    @track searchText;
    @track searchResultList;

    handleOnChange(event)
    {
        this.searchText = event.target.value;
    }
    searchAccountRecords()
    {
        searchAccountByName({stringchars : this.searchText}).then(result=>{
            this.searchResultList = result;
        })
        .catch(error =>{
            console.log('error has been occured....: '+error);
        })
    }
}