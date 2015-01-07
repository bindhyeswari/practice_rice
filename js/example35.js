/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var customer={
        id:32,
        email:"customer@mailinator.com"
    };
    var order={
        id:111,
        item:'itemx'
    };
    function addOrder(customer,order){
        if(!customer.orders){
            customer.orders=[];//createanordersarrayincustomerobject
//ifitdoesnotexist
        }
        customer.orders.push(order);
    }
    addOrder(customer,order);
    console.log(customer);
});