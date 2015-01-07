/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var varTest=32;
    (function(){//declaredandinvokedatthesametime
        console.log('Immediatefunctionsaregreat!');
    }());
    var _=(function(){
        var localScope=32;
        varTest=varTest*localScope;
        this.square=function(x){return x*x};
        return this;
    }());
//Thisbasicallycompressestwosteps:declarationandinvocation
//Veryusefulforusingfunctionsasnamespaces
//console.log(localScopeVariable);/*Thisgivesanerrorforthelocalscope

    console.log(varTest);
    var squared=_.square(10);
    console.log(squared);
    console.log(_.localScope);
});
