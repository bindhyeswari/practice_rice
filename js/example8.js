/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var customer={
        id:32,
        email:'customer@mailinator.com'
    };
    var customerA=Object.create(customer,{
        gender:{
            value:'male',
            writable:true,
            enumerable:true,
            configurable:false
        }
    });
    console.log(customerA);
});
