//Creating own async function 
//Approach 1 -> to wrap around another async function <:-:>
function mytimeout(fn,duration){
    setTimeout(fn,duration);
}
mytimeout(() => {
    console.log("hello world");
},1000);
