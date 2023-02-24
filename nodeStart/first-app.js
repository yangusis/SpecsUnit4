// JS code that will be executed by node.js
// actually I'm realizing this is how we executed JS code to begin with in foundations lol

const fs = require("fs");
console.log("Hello from node.js");

fs.writeFileSync("hello.txt", "hello from node.js");
