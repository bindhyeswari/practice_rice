/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var x=0/0; //NaN
    var y=0/0; //NaN
    console.log(x===y);//evaluatestofalse
    console.log("1"==true);//Evaluatestotrue
    console.log("0"==false);//Evaluatestotrue
    console.log("100"==true);//ExceptionEvaluatestofalse
    console.log(Boolean("100")==true);//Evaluatestotrue
});
