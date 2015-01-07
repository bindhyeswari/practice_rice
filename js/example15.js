/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var num1=new Number(22);
    var num2=22;
    console.log(num1*100);
    console.log(num2*100);
    console.log(num1);
    console.log(num2);
//Talkaboutwrapperobjects-transientobjectscreatedwhen
//methodsarecalledonnativetypeslikenum1.toFixed()and
//arethendicardedafterthat
    console.log('typeofnum1:'+typeof num1); //AnObject
    console.log('typeofnum2:'+typeof num2);//Anumberdatatype
    console.log(1/0); //Infinity
    console.log(1/-0); //-Infinity
    console.log(1/'32'); //Number
    console.log('hello'/2); //NaN
    console.log(0/0); //NaN
    /*
     Assignment:Showwithexamples,howtoExponential(),toPrecision()and
     toString(n)work
     */
});
