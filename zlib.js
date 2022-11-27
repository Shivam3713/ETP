const fs = require('fs');
const zlib = require('zlib');

// var gzip = zlib.createGzip();
// var r = fs.createReadStream('shivam.txt');
// var w = fs.createWriteStream('shivam.txt.gz');


// r.pipe(gzip).pipe(w);

var gzip = zlib.createGunzip();
var r = fs.createReadStream('shivam.txt.gz');
var w = fs.createWriteStream('shivam.txt');


r.pipe(gzip).pipe(w);

