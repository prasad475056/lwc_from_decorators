import { LightningElement, track} from 'lwc';

export default class TrackReactivePropertyComponent extends LightningElement 
{
    @track customMessage = 'private reactive property';

    handleOnChange(event)
    {    
       // this.customMessage = 'reactive property value has been changed';
         this.customMessage = event.target.value;

    }
}