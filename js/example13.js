/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var customer={
        id:32,
        email:'customer@mailinator.com'
    };
    var customerA=Object.create(customer);
    customerA.gender="female";
    console.log(Object.isExtensible(customerA));
    Object.preventExtensions(customerA);
    customerA.orders=100; //assignmentfailssilently
    console.log(customerA);
    /*
     Assignments:DifferencebetweenObject.preventExtensions(),Object.seal()and
     Object.freeze()
     Howwillyoucheckoftheobjectissealedorfrozen?
     */
});
