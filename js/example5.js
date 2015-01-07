/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    function Customer(){
//emptyconstructorfunction
    }
    var customerA = new Customer();
    console.log("typeof customerA:"+typeof customerA);
    console.log("IscustomerAaCustomer?:"+
        (customerA instanceof Customer)//checksifthe
    );
});
