var fs = require("fs");

var find = process.argv[2];
var destination = process.argv[3];

var textContent = fs.readFileSync(find, "utf-8");
var createNew = fs.writeFileSync(destination, textContent)
