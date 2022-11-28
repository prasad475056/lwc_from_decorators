import { LightningElement, api} from 'lwc';

export default class RecordViewFormComponent extends LightningElement
 {
    @api recordId;

    @api objectApiName;
 }