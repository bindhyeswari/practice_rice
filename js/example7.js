/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
//Defineanentirelynewobjectandsetattributes
    var customerA = Object.defineProperties({},{
        id:{
            value:100,
            writable:false,
            configurable:false,
            enumerable:true
        },
        email:{
            value:"customerA@mailinator.com",
            writable:true,
            enumerable:true,
            configurable:true
        }
    });
    console.log(customerA);
    console.log(Object.getOwnPropertyDescriptor(customerA,"email"));
    for(var prop in customerA){
        console.log("firstloop:"+prop);
    }
    Object.defineProperty(customerA,'email',{enumerable:false});
    for(prop in customerA){
        console.log("secondloop:"+prop);
    }
});
