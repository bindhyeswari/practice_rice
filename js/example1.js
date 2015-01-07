/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var customer={
        id:272356158,
        phone:"(408)431-1295",
        email:"customer@mailinator.com", //stringdatatype
        address:{ //objectdatatype
            city:"Sunnyvale",
            zip:"95129" //shouldzipcodesbenumeric?
        },
        "customfield":"...notesoncustomer..." //noticethespaceintheproperty

    };
    console.log(customer.id);
    console.log(customer.address.city);
    console.log(customer["id"]);
});
