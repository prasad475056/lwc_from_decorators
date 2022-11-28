import { LightningElement, api} from 'lwc';
import {showToastEvent} from 'lightning/platformShowToastEvent';
export default class RecordEditFormComponent extends LightningElement
 {
    @api recordId;

    @api objectApiName;

    handleOnSuccess()
    {
        const successToast = new showToastEvent({
                                    title:'success',
                                    message : 'Record updated successfully.',
                                    variant : 'success',
                                    mode : 'dismissable'
                                   });
            this.dispatchEvent(successToast);
    }
 }