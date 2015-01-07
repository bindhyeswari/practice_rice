/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    console.log(returnNothing());//whatdoesthisreturn
//returnNothing()isafunctioninvocation
    function returnNothing(){
        var x=10+20;
        this.id++;
    }
//Hencefunctionsthatdonothaveareturnstatementreturnundefined
    var customer={
        id:32,
        email:"customer@mailinator.com",
        printDetails:function(){
            return this.id+':'+this.email;
        }
    };
    console.log(customer.printDetails());//Thisisamethodinvocation
    customer.returnNothing=returnNothing;
    customer.returnNothing();
    console.log(customer.id); //refertotheinvocationcontextandthis
    customer["returnNothing"]();
    console.log(customer.id);
});