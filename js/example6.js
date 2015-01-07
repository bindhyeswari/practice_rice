/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var customer={
        id:272356158,
        email:"customer@mailinator.com"
    };
    customer.id=32;
    console.log(customer.id); //propertyassignmentworks
    Object.defineProperty(customer,"id",{writable:false});
    customer.id=64; //propertyassignmentfailssilently
    console.log(customer.id); //andpreviousvalueismaintained
    console.log(Object.getOwnPropertyDescriptor(customer,'id'));
    //getownpropertiesonly
    Object.defineProperty(customer,'id',{configurable:false});
//QUESTION:Whathappenswhenyoutrytosetwritabletotruehere?
//YougetaTypeError
});
