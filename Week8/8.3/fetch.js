//axios vs fetch 
//fetch 
async function main1(){
    const response = await fetch("https://sum-server.100xdevs.com/todos");
    const json = await response.json();
    console.log(json);
}
// main1();
//we have a dump http server to log out all the data that we r passing 
async function post(){
    const response = await fetch("https://httpdump.app/dumps/a628db02-4398-477b-b30b-490f271d1453",{
        method:"GET"
    });
    const json = await response.json();
    console.log(json);
}