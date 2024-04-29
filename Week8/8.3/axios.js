//axios
const axios = require('axios');
async function main2(){
    const response = await axios.get("https://sum-server.100xdevs.com/todos");
    console.log(response.data);
}
//in get, body cannot be sent, only header can be sent, query parameters can though be sent 
//POST 
//body is the second arguement, header is the third arguement

async function post(){
    const response = axios.put("https://httpdump.app/dumps/a628db02-4398-477b-b30b-490f271d1453",
        {
            "name": "morpheus",
            "job": "leader"
        },
        {
            Headers : "authorization bearers"
        }
    );
    console.log(response);
}
// main2();
post();