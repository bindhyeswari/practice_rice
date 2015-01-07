/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var x=1;
    ++x;/*UnaryOperator:Numberofoperands:1*/
    console.log(x);
    x=1+2;/*BinaryOperator-Numberofoperands:2*/
    console.log(x);
    x=(1=="1")?'Thisissotrue!':'Thisisabsolutelyfalse';
    /*TernaryOperator:Numberofoperands:3*/
    console.log(x);
});
