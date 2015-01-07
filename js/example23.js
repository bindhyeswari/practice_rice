/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var arr=[];
    arr[0]=1+Number("2");
    arr[1]=1+Number("hello");
    arr[2]=Number([3])+4;
    arr[3]=+"3";
    arr[4]=!!("hello");
    arr[5] =Boolean('HelloWorld');
    console.log(arr.join('\n'));
//UsingtheparseIntconversions
    console.log(parseInt('22Customershave32orders'));
    console.log(parseInt('.32'));
    console.log(parseFloat('.32'));
});
