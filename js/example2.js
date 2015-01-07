/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    console.log(typeof 32);
    console.log(typeof"Thisisastring");
    console.log(typeof function(){});
    console.log(typeof undefined);
    console.log(typeof null);
    console.log(typeof true);
//asvariables
    var a=32,b="Thisisastring",c=function(){},
        d=undefined,e=null,f=false;
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof d);
    console.log(typeof e);
    console.log(typeof f);
//QUESTION:WhatisthetypeofNaNand3.14
});