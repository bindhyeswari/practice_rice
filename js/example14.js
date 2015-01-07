/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var customer={
        id:32,
        email:'customer@mailinator.com'
    };
    var serialized_customer=JSON.stringify(customer);
    console.log(serialized_customer);
    var customer_deserialized=JSON.parse(serialized_customer);
    console.log(customer_deserialized);
    /*
     WhatvaluescannotberepresentedinJSON?
     WhatisthedifferencebetweentoString()andvalueOf()
     WhatisthetoJSON()method?
     */
});
