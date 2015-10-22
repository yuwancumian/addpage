#!/usr/bin/env node
require('shelljs/global');

var fs = require('fs');
var path = require('path');
var cheerio = require('cheerio');

var files = fs.readdirSync('.');
var html = files.filter(function(item){
	return path.extname(item) === '.html';
});

var all = fs.readFileSync(html[1],'utf-8');

var  $ = cheerio.load(all);
console.log($(all).find('head').html());
console.log($('script').html());
