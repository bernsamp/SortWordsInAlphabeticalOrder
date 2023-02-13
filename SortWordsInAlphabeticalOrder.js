const prompt = require("prompt-sync")({sigint:true});

const string = prompt('Enter a sentence: ');

const words = string.toLowerCase().split(' ');

words.sort();

console.log('The words in alphabetical order are:');

for (const element of words) {
    console.log(element);
}