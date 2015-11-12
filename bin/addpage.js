#!/usr/bin/env node
require('shelljs/global');

var fs = require('fs');
var path = require('path');
var pageName = process.argv[2];

var files = fs.readdirSync('.');
var html = files.filter(function(item){
	return path.extname(item) === '.html';
});

if (html.length === 0){
	console.log('No html in the directory!')
} else {
	var all = fs.readFileSync(html[0],'utf-8');

	var headElement = all.match(/(<link|<title|<meta).*/g);
	var scriptElement =all.match(/.*<\/script>/g);
	//console.log(headElement);
	var page = pageName + '.html';
	console.log(pageName + '.html was added!')

	'<!DOCTYPE html>\n'.to(page);
	'<head>\n'.toEnd(page);

	for( var i=0; i< headElement.length; i++){
		'\t'.toEnd(page);
		headElement[i].toEnd(page);
		'\n'.toEnd(page)
	}
	'</head>'.toEnd(page);
	'\n<body>\n'.toEnd(page);
	'\n<body>'.toEnd(page);
	'\n</html>\n'.toEnd(page);
	for( var i=0; i< scriptElement.length; i++){
		scriptElement[i].toEnd(pageName + '.html');
		'\n'.toEnd(page)
	}
}

