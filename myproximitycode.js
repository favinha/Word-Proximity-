#!/usr/bin/env node

// The purpose of this program is to read a text file and to count the
// number of time those words repeats given a specific range
// It receives two words and an integer as inputs

var encoding = 'utf-8';
var filename = '';
var word1;
var word2;
var range;
var totalCount = 0;

var myArgs = require('optimist').argv,
     help = 'This needs to run with two words, a range and a input file.';

 if ((myArgs.h)||(myArgs.help)) {
   console.log(help);
   process.exit(0);
 }

 if (myArgs._.length === 4) {
   word1 = myArgs._[0];
   word2 = myArgs._[1];
   range = myArgs._[2];
   filename = myArgs._[3];
   //console.log("We have ====> On the TTY *"+word1+'*'+word2+'*'+range);
   calculateProximity(word1, word2, range, filename);
 }
 else if (myArgs._.length > 1 && myArgs._.length < 4) {
   console.log(help);
   process.exit(0);
 }


var run = function (w1, w2, r, f) {
  word1 = w1;
  word2 = w2;
  range = r;
  filename = f;
  //console.log("We have ====> On the exports *"+word1+'*'+word2+'*'+range);
  return calculateProximity();
};

module.exports.run = run;

function calculateProximity (){
  // Let's test if the range is a number
  if (word1 == ''){
    throw(new Error('Need two words to search'));
  }
  if (word2 == ''){
    throw(new Error('Need two words to search'));
  }
  if (filename == ''){
    throw(new Error('Need a filename to parse'));
  }
  if (isNaN(range)) {
    //console.log('This is not a number');
    throw(new Error('Not a Number: '+range));
  }
  // Parse the file and get the respective structs
  const parseFile = require('./parsefile').init(filename);
  var wordStruct = parseFile.wordStruct();
  var text = parseFile.text();

  // Now lets see what to do
  // Get the array
  var word1AppearsIn = Array.isArray(wordStruct[word1]) ? wordStruct[word1] : [] ;
  var howmany1 = word1AppearsIn.length;
  // if the lenght is 0, the word is not in the document
  if (howmany1 < 1) {
    //console.log('The word "'+word1+'" is not in the text');
    throw(new Error('The word "'+word1+'" is not in the text'));
  }
  var howmany2 = Array.isArray(wordStruct[word2]) ? wordStruct[word2].lenght : 0 ;
  if (howmany2 < 1) {
    //console.log('The word "'+word2+'" is not in the text');
    throw(new Error('The word "'+word2+'" is not in the text'));
  }
  // All good so far, lets iterate
  word1AppearsIn.forEach(function(element) {
    // Check to the right..
    for(var i=1; i<=range; i++){
      let pos = element+i;
      //console.log("i: "+pos+" WORD: "+text[i]);
      if ( text[pos] == word2) {
        //console.log(text[pos] + word2);
        totalCount++;
      }
    }
    // ... and to the left
    for(var i=1; i<=range; i++){
      let pos = element-i;
      //console.log("i: "+pos+" WORD: "+text[i]);
      if ( text[pos] == word2) {
        //console.log(text[pos] + word2);
        totalCount++;
      }
    }
  });
  console.log("Total count: "+totalCount);
  return totalCount;
}
