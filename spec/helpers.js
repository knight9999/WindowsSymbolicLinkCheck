var path = require('path');
var fs = require('fs');
var os = require('os');

module.exports.tmpDir = function (suffix = 'test') {
    const dir = path.join(os.tmpdir(), `appveyor-tests-${suffix}-`);
    return fs.mkdtempSync(dir);
};
