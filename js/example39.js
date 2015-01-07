/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    function CustomerConstructor(_id,_email){
        this.email=_email; //instancevariables
        this._id=_id;
        this.orders=[];
        this.addOrder=function(order){ //instancefunction
            this.orders.push(order);
        };
        CustomerConstructor.instances++;
    }
    CustomerConstructor.instances=0; //staticproperty
    CustomerConstructor.predictTotalOrders=function(){//staticfunction
        return CustomerConstructor.instances*10;
    };
    var customerx=new CustomerConstructor(1,'customerx@golivelabs.io');
    var customery=new CustomerConstructor(2,'customery@golivelabs.io');
    var order={
        id:132,
        item:'itemx'
    };
    console.log(CustomerConstructor.instances);//Tracknumberofcustomerscreated
    console.log(CustomerConstructor.predictTotalOrders());
    customerx.addOrder(order);
    console.log(customerx);
});
