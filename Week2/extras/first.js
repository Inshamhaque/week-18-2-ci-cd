// /\s+ represents all white spaces, tab having one or more than one occurrence and /g represents matching it with globally the entire 
// string pattern. and then, replacing it with " ".  
let ans = "Insham         haque          is awesome";
ans = ans.replace(/\s+/g," ");
console.log(ans);
