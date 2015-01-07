/**
 * Created by rice on 2015/1/6.
 */
$(document).ready(function(){
    var strx='"Hello"World!';
    var stry="'Hello'World!";
    var strz="\"Hello\"World!";
    console.log('\n'+strx+'\n'+stry+'\n'+strz);
    /*
     Assignment:
     Listalljavascriptstringescapecharacters
     Howwillyourepresentahexadecimalandunicodecharacter?
     */
//AllJavascriptcharactersarerepresentedas16-bitUnicodevalues
//UTF-16.Howevertherearesomecharactersthatdonotfitinto16
//bitsandhencerequire2consecutive16-bitvalues.
//Example: Ñ
//Whatiswrongwith
//console.log("Ñathaniel".split('').reverse().join(''));
});
