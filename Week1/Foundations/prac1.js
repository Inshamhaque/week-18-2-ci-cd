function anagram(str1, str2){
    //checking length
    
    if(str1.length==str2.length){
        return false;
    }
    const sorted1 = str1.split('').sort().join('');
    const sorted2 = str2.split('').sort().join('');
    return sorted1==sorted2;
}
const str1 = "hello world";
const str2 = "dlrow olleh";
let ans = anagram(str1,str2);
if(ans==1){
    console.log("they r anagrams");
}
else{
    console.log("they r not anagrams");
}
