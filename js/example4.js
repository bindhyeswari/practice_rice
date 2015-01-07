/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    function createObject_ES4(parent){
        if(typeof parent==="object"||typeof parent==="function"){
            function Child(){}
            Child.prototype=parent;
            return new Child();
        }else{
            return null;
        }
    };
    var customer={
        phone:"",
        email:""
    };
    var customerA = createObject_ES4(customer);
    console.log(customerA);
});