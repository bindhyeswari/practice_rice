/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var callback=function(id,email){
        console.log('Emailofid:'+id+'is'+email);
    };
    var customer={
        id:32,
        email:'customer@golivelabs.io',
        eventHandler:function(fn){
            fn(this.id,this.email);
        }
    };
    function causeEvent(_cust){
        _cust.eventHandler(callback);
    }
    causeEvent(customer);
});
