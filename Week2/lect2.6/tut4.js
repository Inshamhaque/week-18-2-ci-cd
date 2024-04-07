//to print all vowel words in the array 
//thus, filter returns the iterative elements of the array
let arr = ["insham","hi","ok","silent","elephant","lion"];
let vowels = arr.filter((x)=>{
    x = x.toLowerCase();
    let vowels = "aeiou";
    if(vowels.indexOf(x[0])!=-1){
        return x;
    }
    return 0;
})
console.log(vowels);
