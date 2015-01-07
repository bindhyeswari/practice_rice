/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var arr=[];
    arr[0]=1+2+"hello";//3hello
    arr[1]="hello"+1+2;//hello12
    arr[2]=(false)?'Firstconditional':(false)?'SecondTrue':'SecondFalse';
//additionandsubtractoroperatorshaverighttoleftassociativity
//Insertassociativitychart
//Allunaryassignmentandternaryoperatorshaverighttoleftassociativity
    console.log(arr.join('\n'));
});
