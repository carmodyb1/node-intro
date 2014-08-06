#!/usr/bin/env node
// Tells operating sytsem that node is needed "she bang line";
// 
console.log("Hello Boulder!");

console.log("The arguments are: "+
	process.argv.join(", "));
var myMenu = require("./menu.js")
// must have "./" since it is a relative file path
console.log(myMenu.lunchMenu);
// analogous to script tag in browser: <script src="menu.js"></script>



var lunchItems = process.argv.slice(2);

if(lunchItems.length===0) {
	console.log("You must order at least one item!");
}

else if(lunchItems.length>3) {
	console.log("You must be hungry!  But you can\n't order more than 3 things . . . ");
}
else {
	console.log("Yumm!  That sounds good.  You have ordered: \n" + lunchItems.join("\n"))
}

