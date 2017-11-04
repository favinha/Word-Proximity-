The purpose of this program is to read a text file and to count the number of time those words repeats given a specific range.

It receives two words and an integer as inputs.

The first word is the start point.
The second word is the word to look for.
The integer is the range to apply to the first word to look for the second.

HOW IT WORKS

It opens the textile that was passed as a parameter and splits the text by the space between words.
It puts all the words in to an array - called TEXT.
It also creates a structure with the word as a key and the position of that word in the first array as values - called WORDSTRUCT.

It then validates if the words passed as parameters exist in the text as well as if the range is an integer.

After the validation, If fetches the array with the positions of that word in the text from the WORDSTRUCT array.
It iterates the array with the positions and applies the range incrementally, to look for the second word on the TEXT array.
It looks to the right and to the left of that word.
Every time it encounters that word,, it increments a counter totalCount.

In the end, it returns the number of values encountered.



