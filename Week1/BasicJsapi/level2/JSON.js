//Javascript Object Notation
function JSONmethods(obj){
    //stringify method to convert object to string
    let string = JSON.stringify(obj);
    console.log("String object is:    " + string);
    //parsing string to json object
    let parsedjson = JSON.parse(string);
    console.log("Parsed Json object is : " );
    console.log(parsedjson);
}
let obj ={
    name : "Insham haque",
    age: 19,
    country: "Insham"
};
JSONmethods(obj);


