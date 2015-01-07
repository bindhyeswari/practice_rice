/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var arr=[];
    arr[0]=1+"2";
//Rememberthatthe+operatorforcesthe.toString()methodif
//theoperandisnotanumber
    arr[1]=2*"2"; //Mostotherarithmeticoperatorstry
//toconverttheoperandtoanumber
    arr[2]=1+"hello";
    arr[3]=[3]+4;
    arr[4]=[3]*4;
    arr[5]=1*"one";
    arr[6]=(undefined===null);
    arr[7]=(undefined==null);
    console.log(arr.join('\n'));
    for( var i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
});
