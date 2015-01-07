/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var customer={
        id:32,
        email:"customer@mailinator.com"
    };
    var customerA=Object.create(customer); //inheritidandemailfromcustomer
    customerA.gender="male";
    customerA.phone="323456789";
    Object.defineProperty(customerA,'phone',{enumerable:false});
    console.log(customerA);//explainthatgenderandphoneareownproperties
    console.log(customer);//explainthatpropertiesidandemailareinherited
//Theinoperatorchecksforownandinheritedproperties
//Expectsastringandobjectasarguments
    console.log('id'in customerA); //returnstrueforinherited
    console.log('gender'in customerA); //andownproperties
//.hasOwnProperty()checksforownpropertiesonly
    console.log(customerA.hasOwnProperty('id')); //returnsfalse
    console.log(customerA.hasOwnProperty('gender')); //returnstrue
//.propertyIsEnumerable()checksifthepropertycanbeenumerated
    console.log(customerA.propertyIsEnumerable('id')); //returnsfalseasitis
    console.log(customerA.propertyIsEnumerable('gender'));//returnstrue
    console.log(customerA.propertyIsEnumerable('phone')); //returnsfalse
//getallpropertiesinaloop
    console.log('\nPrintingcustomerApropertiesasname:valuepairs:\n');
    for(var prop in customerA){
        console.log(prop+':'+customerA[prop]);
    }
    /*Assignment:WhatdoestheObject.keys()methoddo?Howdoyouuseit?
     Loopthroughanobjecttogetonlyown,enumerablepropertiesandprint
     themtotheconsole.
     */
});
