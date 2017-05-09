/*
*
*MIT License
*
*Copyright (c) 2017 Subhash Kumar Agarwal
*
*Permission is hereby granted, free of charge, to any person obtaining a copy
*of this software and associated documentation files (the "Software"), to deal
*in the Software without restriction, including without limitation the rights
*to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*copies of the Software, and to permit persons to whom the Software is
*furnished to do so, subject to the following conditions:
*
*The above copyright notice and this permission notice shall be included in all
*copies or substantial portions of the Software.
*
*THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*SOFTWARE.
*
*
*/

 const exec = require('child_process').exec;


 module.exports = function change(id, callback) {
 	var command = 'snap change '+id;
 	return exec(command, function(err, stdout, stderr){
 		var list = stdout.split('\n');
 		list.shift();
 		list.pop();
 		list.pop();
 		for (var i = list.length - 1; i >= 0; i--) {
 			list[i] = list[i].replace( /  +/g, ' ' );
 			list[i] = list[i].split(' ')
 			list[i] = {
 				status: list[i][0] || '',
 				spawn: list[i][1] || '',
				ready: list[i][2] || '',
 				summary: list[i][3] || ''
 			}
 			//console.log(list[i].split(' '))
 		}
 		callback(err, list, stderr)
 	});
 }