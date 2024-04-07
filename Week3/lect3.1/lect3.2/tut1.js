//Fetch api
const ans = fetch(' https://jsonplaceholder.typicode.com/')
.then((response)=>{
    response.json()
    .then((data)=>{
        console.log(data);
    })
})