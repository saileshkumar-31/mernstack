const {add , sub} = require("sk-backend");

const mul = require("./mul");
const div = require("./div");


add(5,10);
sub(10,5);
mul(5,10);
div(10,5);

const os = require("node:os");
console.log(os.cpus());

