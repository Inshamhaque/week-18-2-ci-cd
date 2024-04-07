//DATE in JS
const currentDate = new Date();
console.log("Month: "+currentDate.getMonth());//gives current date 
console.log("Year: "+currentDate.getFullYear());//gives current year
console.log("Date: "+currentDate.getDate());//gives current Date 
console.log("Hours: "+ currentDate.getHours());
console.log("Minutes: "+ currentDate.getMinutes());
//elapsed time in milliseconds since 1970
console.log("Total milliseconds since 1970:  "+ currentDate.getTime());
//time taken by a function to get executed:-
function calculatesum(){
    let a  =0;
    for(let i=0;i<12;i++){
        a+=i;
    }
}
const beforeDate = new Date();
const beforeTimeinMs = beforeDate.getTime();
calculatesum();
const afterDate = new Date();
const afterTimeinMs = afterDate.getTime();
console.log("Time taken is:   ");
console.log(afterTimeinMs-beforeTimeinMs);
//timer/stopwatch
function currentTimePrint(){
    let time = new Date().getSeconds();
    console.log(time);
    return time;
}
if(currentTimePrint==59){
    clearInterval()
}
else{
    setInterval(currentTimePrint,1000);
}


