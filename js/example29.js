/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var x="hello";
    function changeX(x){
        return x.slice(3,5);
    }
    function changeY(x){
        x=x.slice(3,5);
    }
    console.log(changeX(x));
    changeX(x);
    console.log(x);
});
