/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var customer={
        id:32,
        email:"customer@mailinator.com"
    };
    var order1={
        id:111,
        item:'itemx'
    };
    var order2={
        id:112,
        item:'itemy'
    };
    console.log(customer);
    function addOrder(customer){ //noticethatonlyoneinputhasbeenmentioned
        if(!customer.orders){
            customer.orders=[];//createanordersarrayincustomerobject
//ifitdoesnotexist
        }
        for(var i=1,len=arguments.length;i<len;i++){
            arguments[0].orders.push(arguments[i]);
        }
        console.log(customer);
    }
    addOrder(customer,order1,order2); //Variatic,Variablearity,varargs
    console.log(customer);
//Thisinterchangeofnamedparametersandargumentsobjectwithindex
//hasbeenremovedintheES5strictmode
});
