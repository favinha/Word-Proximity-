var assert = require('assert');
var code = require('./myproximitycode');

// Test if it runs properly
assert.equal(code.run('man','the', '3', 'textfile.txt'), '6', 'Found 6 words!')

// Test if it fails if range is not a number
assert.throws(
  function() {
    code.run('man','the', 'a', 'textfile.txt');
  },
  /Not a Number/
);

// Test if it shows an error if word dont exist in the text
assert.throws(
  function() {
    code.run('blabla','the', '3', 'textfile.txt');
  },
  /not in the text/
);

assert.throws(
  function() {
    code.run('man','blablaAgain', '3', 'textfile.txt');
  },
  /not in the text/
);


// Test if it shows an error if the filename is not passed
assert.throws(
  function() {
    code.run('man','the', '3', '');
  },
  /Need a filename/
);
