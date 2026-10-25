var username = "Alice";
let userage = 25;
const isEmployed = true;
const userskills = ["HTML", "CSS", "JavaScript"];

console.log("Name:" + username + "(Type: "+typeof username+")");
console.log("Age:" + userage + "(Type: "+typeof userage+")");
console.log("Is Employed: " + isEmployed + "(Type: "+typeof isEmployed+")");
console.log(`Skills: ${JSON.stringify(userskills)} (Type: ${typeof userskills})`);