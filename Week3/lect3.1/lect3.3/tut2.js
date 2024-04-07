//JWT & Authorization 
const jwt = require('jsonwebtoken'); 
const value = {
    name: "Inshamul haque",
    code: "160904"
};
//generating a json token 
//this key can be verified only with the same server and cannot be verified on any other server
const key = jwt.sign(value,"secret");
console.log(key);
//verifying the token 
const verified_value = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSW5zaGFtdWwgaGFxdWUiLCJjb2RlIjoiMTYwOTA0IiwiaWF0IjoxNzA2NjI4NzYzfQ.Da28Jjuh_irf4ODS4q_o8GufuVZquK0j6rIlhfwSDHA","secret");
console.log(verified_value);
