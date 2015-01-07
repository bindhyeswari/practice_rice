/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
//Variablegetshoistedtothetop--calledvariabledhoisting
    console.log(x); //returnsundefinedasithasnotbeeninitialized
//notethatitwouldhavereturnedaReferenceError
//hadthevariablenotexisted.
    console.log(CustomerFunction1); //returnsundefined
    console.log(CustomerFunction2); //returnsthefunctiondefinition
    console.log(CustomerFunction2(10));//returnsthevalue40
    var x=32;
    var CustomerFunction1=function(_id,_email){
        this.id=_id;
        this.email=_email;
    }
    function CustomerFunction2(n){
        return n*2;
    }
});
