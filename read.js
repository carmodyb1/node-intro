var fs = require("fs");

// Other example
// var textContent = fs.readFileSync("menu.js", "utf-8")

var textContent = fs.readFileSync(process.argv[2], "utf-8");
var newFile = fs.writeFileSync(textContent);






console.log(textContent);




