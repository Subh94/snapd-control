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

var child_process = require('child_process');

var snapd_control = module.exports = {
    list: require('./util/list'),
    search: require('./util/search'),
    changes: require('./util/changes'),
    change: require('./util/change'),
    //connect: require('./util/connect'),
    interfaces: require('./util/interface'),
    info: require('./util/info'),
    install: require('./util/install'),
    // require Sudo user
    aliases: require('./util/aliases'),
    download: require('./util/download'),
    disable: require('./util/disable')
};
