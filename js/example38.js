/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
//Defineanoperatefunction
    function operate(operator,operandx,operandy){
        return operator(operandx,operandy);
    }
//Defineoperatorsinanarray
    var operators_array=[];
    operators_array[0]=function add(x,y){
        return x+y;
    };
    operators_array[1]=function subtract(x,y){
        return x-y;
    };
    operators_array[2]=function multiply(x,y){
        return x*y;
    };
    operators_array[3]=function divide(x,y){
        return x/y;
    };
//Giventwooperands,runthroughtheentirearray,
//returningallthevalues
    var m=100;
    var n=10;
    var results=[];
    for(var i=0,len=operators_array.length;i<len;i++){
        results[i]=operate(operators_array[i],m,n);
    }
    console.log(results.join('\n'));
});