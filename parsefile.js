
var text;
var wordStruct = {};

exports.init = function(filename) {
  var fs  = require("fs");
  text = fs.readFileSync(filename).toString().split(' ');
  //cleanup
  text = text.map(s => s.replace(/\n/ig, ''));
  // TODO Remove the empty array pos
  // TODO Make it case insensitive or add a new flag

  // We could create another array with the position of the words
  // eg : {'the' =  [1,4]}
  var iterator = text.keys();
  for (let count of iterator) {
    let temp = [];
    let word = text[count]
    temp = Array.isArray(wordStruct[word]) ? wordStruct[word] : [] ;
    temp.push(count);
    wordStruct[word] = temp;
  }
  return exports;
};

exports.text = function() {
    return text;
};

exports.wordStruct = function() {
    return wordStruct;
}
