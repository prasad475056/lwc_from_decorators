import { LightningElement, api } from 'lwc';
import showToastEvent from 'lightning/platformShowToastEvent';
export default class RecordFormComponent extends LightningElement
 {
    @api recordId;
    @api objectApiName;

    handleOnSuccess()
    {
        const showSuccessMessage = new showToastEvent({
                                        title : 'success',
                                        message : 'record updated successfully',
                                        variant : 'success',
                                        mode : 'dismissable'                                 
                                     });
        this.dispatchEvent(showSuccessMessage);
    }
 }