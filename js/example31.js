/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    console.log(factorial(5));//returns120
    function factorial(n){
        if(n<=1){
            return 1;
        }else{
            return n*factorial(n-1);//recursivecall
        }
    }
});