
//1. Program to find longest word in a given sentence
const sent = "Program to find longest word in a given sentence";
const str = sent.split(" ").map(word => word.trim());
let maxnum = -Infinity;
let result="";
for(let i=0;i<str.length;i++){
    if(maxnum<str[i].length){
        maxnum=str[i].length;
        result=str[i];
    }
}
console.log(result);

                //OR

const longestString = str.reduce((longest, current)=> current.length > longest.length ? current : longest);
console.log(longestString)

//palindrome
function palindrome(){
    const str = 'malayalam';
    for(let i=0;i<str.length/2;i++){
        if(str[i]!==str[str.length - 1-i]){
            return false;
        }
    }
    return true;
}
console.log(palindrome());

//remove duplicate element
const arr = [1, 2, 3, 4, 2, 2, 3, 4, 5];
console.log(Array.from(new Set(arr)));

