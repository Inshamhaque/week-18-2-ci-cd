const jwt = require("jsonwebtoken");
//since the signature key is only stored in the backend of a server and is not visible, thus the data cannot be outsourced into the thin air. 
const verified  = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSW5zaGFtdWwgaGFxdWUiLCJjb2RlIjoiMTYwOTA0IiwiaWF0IjoxNzA2NjI4NzYzfQ.Da28Jjuh_irf4ODS4q_o8GufuVZquK0j6rIlhfwSDHA","ijdoejod");
console.log(verified);