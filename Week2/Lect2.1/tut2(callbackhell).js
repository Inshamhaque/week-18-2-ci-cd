//Callback hell refers to the difficulty in understanding, reading and writing the async functions in nested form 
//and thus to avoid this, we use promises
setTimeout(function(){
    console.log("hello world");
    setTimeout(function(){
        console.log("Nested hello world");
        setTimeout(() => {
            console.log("Super nested Hello world");
        }, 3000);
    },2000);
},1000);