// Object Methods Explanation
function objectMethods(obj) {
    console.log("Original Object:", obj);
    
    //gives the list of keys 
    let keys = Object.keys(obj);
    console.log("After Object.keys():", keys);
  
    //gives the list of values 
    let values = Object.values(obj);
    console.log("After Object.values():", values);
    
    //shows the entry i.e key-value pair (nested list)
    let entries = Object.entries(obj);
    console.log("After Object.entries():", entries);
  
    //check whether  prooperty is present or not
    let hasProp = obj.hasOwnProperty("key1");
    console.log("After key1 property:", hasProp);
  
    //assigns a new property and returns a new object 
    let newObj = Object.assign([], obj, { newProperty: "newValue" });
    console.log("After Object.assign():", newObj);
   
  
  }
  
  // Example Usage for Object Methods
  const sampleObject = {
    key1: "value1",
    key1: "value2",
    key3: "value3",
  };
  let entries  = Object.entries(sampleObject);
  let newObj ={};
  for(let i=0;i<entries.length;i++){
    if(entries[i][0]=="key1"){
        let newkey = entries[i][0];
        let newvalue = entries[i][1];
        newObj = Object.assign([],newObj,{newkey:newvalue});
    }
  }
  console.log("New Object after removing 'key1': ", newObj);
  
  //objectMethods(sampleObject);