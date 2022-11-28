import { LightningElement, api} from 'lwc';

export default class PropertyChildComponent extends LightningElement
 {
     @api childComponentProperty = 'child component property';

     @api showCustomMessage()
     {
        alert('child componenet non parameteraised method fired');
     }
     @api showCustomerDetails(customerNameParam)
     {
        alert('customer Nmae is ...: '+customerNameParam.firstName+''+customerNameParam.lastName);
     }

 }