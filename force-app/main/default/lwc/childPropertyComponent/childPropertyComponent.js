import { LightningElement, track, api } from 'lwc';

export default class ChildPropertyComponent extends LightningElement
 {
    @track customerName = 'prasad perabathula';
    @api productName = 'Desktop devices';
    employeName = 'lokesh bylla';

    //function 
    handleOnClick(){
        this.customerName = 'sathy reddy..';
        this.productName = 'product name has been changed';
        this.employeName = 'employe name has been changed.';
    }
 }