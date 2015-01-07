/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var customername="JohnSmith";
    var names=customername.split('');
    console.log('FirstName:'+names[0]);
    console.log(customername.slice(0,4));
    console.log(customername.slice(-5));
    console.log(customername.indexOf('h'));
    console.log(customername.lastIndexOf('h'));
    console.log(customername.charAt(5));
    console.log(customername[5]);
    /*
     *Assignment:ReadaboutallstringmethodsatMDN
     **/
});
