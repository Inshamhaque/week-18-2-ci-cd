let str = 'a e i o u';
str2 = "hello";
let vowels = 0;
for(let char1 of str){
    for(let char2 of str2){
        if(char1==char2){
            vowels+=1;
        }
    }
}
console.log(vowels);

