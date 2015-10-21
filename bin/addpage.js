#!/usr/bin/env node
require('shelljs/global');

var fs = require('fs');
var path = require('path');

cd('app'); 
var files = fs.readdirSync('.');
var html = files.filter(function(item){
	return path.extname(item) === '.html';
});

var all = fs.readFileSync(html[1],'utf-8');
console.log(all);

console.log("123r");
