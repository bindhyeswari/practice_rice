/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var customer={
        id:32,
        email:"customer@mailinator.com"
    };
    var customerA=Object.create(customer);
    customerA.gender="male";
    customerA.phone="323456789";
    console.log(customerA);
    delete customerA.gender; //showthatownproperties
    console.log(customerA); //canbedeleted
    delete customerA.id; //inheritedproperties
    console.log(customerA); //cannotbedeleted
    var res_del_phone=deletecustomerA.phone;
    console.log(res_del_phone); //showthatreturnstrue
    var res_del_email=deletecustomerA.email;
    console.log(res_del_email); //showthatreturnstrue
});
