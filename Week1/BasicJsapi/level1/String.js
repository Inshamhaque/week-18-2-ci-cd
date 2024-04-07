//length function
function length(str1){
    console.log("The length is "+str1.length);
}
//index of -> returns -1 if not available , lastIndexOf gives the last index of a particular substring
function indexof(str1, str2){
    console.log(str1.indexOf(str2))
}
//slice -> [start,end) end exclusive if start is not presnt then start =0 and end = last index
function slice(str1, start, end){
    console.log(str1.slice(start, end));
}
//substring -> (start,length) as arguement thats the difference between substring and slice
function subString(str1, start, len){
    console.log(str1.substr(start,len));
}
//replaceString -> (string, target, replacementString) to replace the target part of string with replacement
function replaceString(str1 , target, replacement){
    console.log(str1.replace(target, replacement));
}
//splitString
function split(str){
    console.log(str.split("name"));
}
str= "Insham haque haque ";
//toUpper/toLower -> 
function upper_lower(str){
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
}
length(str);
indexof(str,"haque" );
slice(str,6,12);
subString(str,7,9);
replaceString(str, "haque","");
const value = "hello, my name is Insham haque ";
split(value);
upper_lower(value);
