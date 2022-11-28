import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ToastMessagesComponent extends LightningElement 
{
    showSuccessToast()
    {
        const showSuccessMessage = new ShowToastEvent({
                                        title : 'success',
                                        message : 'operation completed successfully.',
                                        variant : 'success',
                                        mode : 'dismissable'
                                    });
        this.dispatchEvent(showSuccessMessage);                            
    }
    showWarningToast()
    {
       const showWarningMessage = new ShowToastEvent({
                                        title : 'Warning',
                                        message : 'please enter the values for required feilds',
                                        variant : 'Warning',
                                        mode : 'dismissable'
                                        });
        this.dispatchEvent(showWarningMessage);                
    }
    showErrorToast()
    {
        const showErrorMessage = new ShowToastEvent({
                                        title : 'Error',
                                        message : 'operation failed, errors occured.',
                                        variant : 'Error',
                                        mode : 'dismissable'
                                     });
        this.dispatchEvent(showErrorMessage);
    }
    showInformationToast()
    {
        const showInformationMessage = new ShowToastEvent({
                                        title : 'Information',
                                        message : 'Please review the document',
                                        variant : 'Info',
                                        mode : 'dismissable'
                                        });
        this.dispatchEvent(showInformationMessage);
    }
}