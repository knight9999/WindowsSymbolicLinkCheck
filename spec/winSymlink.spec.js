
var path = require('path');
var fs = require('fs');
var helpers = require('./helpers');


describe('win symlink tests', function () {
  const workDir = helpers.tmpDir('winSymlinkTests');
  beforeEach(function () {
    process.chdir(workDir);
  });

  it('Test 001 : fs.stat for symlink', function () {
    var target = path.resolve(workDir, 'sample1');
    console.log('target :' + target);
    fs.mkdirSync(target);
    var link = path.resolve(workDir, 'link1');
    console.log('link :' + link);
    fs.symlinkSync(target, link);

    expect(function() {
      var stat = fs.statSync(link);
      console.log(stat);
    }).not.toThrow();

  });
})
