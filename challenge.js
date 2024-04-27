// challenge 
// write a function to reverse a string 
// example(input=>output)
// hello=>olleh

//different ways of solving the solutions

//method 1
function reverseWord(word)
{
    const words= word.split('');
    const splitWords=words.reverse('');
    const reversedWord=splitWords.join('');

    return reversedWord;

}
console.log(reverseWord('hello'))

//method 2
const reverseWord = (str) => str.split('').reverse('').join('')
console.log(reverseWord('world'))

//method 3
const reverseStr = (word) => [...word].reverse('').join('')
console.log(reverseStr('reserve'))

//method 4
function reverseWord(str){
  return str.split('').reverse('').join('')
 }
 console.log(reverseWord('world'))
