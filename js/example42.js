/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    function parentFunction(){
        var privateVariable=1;
        function incrementPrivateVariable(){
            return privateVariable++;
        }
        return incrementPrivateVariable();
    }
    var result= parentFunction();
    console.log(result);
    function parentFunctionx(){
        var privateVariable=1;
        function incrementPrivateVariable(){
            return privateVariable++;
        }
        return incrementPrivateVariable;
    }
    result= parentFunctionx();
    console.log(result());
    console.log(result());
    console.log(result);
    console.log(parentFunctionx()());
});
