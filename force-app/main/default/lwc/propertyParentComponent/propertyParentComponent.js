import { LightningElement, track } from 'lwc';

export default class PropertyParentComponent extends LightningElement 
{
    @track parentComponentProperty = 'value has been assigned from javascript.';
   
    handleOnClick()
    {
        this.parentComponentProperty = 'value has been assigned from btn click';
    }

    callCustomMessage()
    {
        var invokeCustomeMessage = this.querySelector('c-Property-child-Component');
        invokeCustomeMessage.showCustomMessage();
    }
    showCustomerDetails()
    {
        var invokeCustomerDetails = this.template.querySelector('c-property-child-component');
        var param = {'firstName':'prasad', 'lastName':'perabathula'};
        invokeCustomerDetails.showCustomerDetails(param);
    }
}