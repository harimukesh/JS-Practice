
//1. Program to find longest word in a given sentence
const sent = "Program to find longest word in a given sentence";
const str = sent.trim().split(" ");
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

const longestString = str.reduce((longest, current)=> current.length > longest.length ? current : longest,"");
console.log(longestString)

//2. How to check whether a string is palindrome or not ?
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

//3. Write a program to remove duplicates from an array ?
const arr = [1, 2, 3, 4, 2, 2, 3, 4, 5];
console.log(Array.from(new Set(arr)));

//4. Program to find Reverse of a string without using built-in method ?
const wordStr="Hello";
const word=wordStr.split("");
for(let i =0;i<word.length/2;i++){
    [word[i], word[word.length - 1 - i]] = [word[word.length - 1 - i], word[i]];
}
console.log(word.join(""));

//5. Find the max count of consecutive 1’s in an array ?

const brr=[1,2,1,1,1,1,0,2,3,4,1,1,1,1,1,1,1,5,6,7,3];
let p=0;
let kmax=0;
for(let i=0;i<brr.length;i++){
    if(brr[i]===1){
        p++;
        kmax=Math.max(p,kmax);
    }else{
        p=0;
    }
}
console.log("max count of consecutive 1’s : "+kmax);

//6. Find the factorial of given number ?

function factorial(num){
    if(num<=1) {
        return 1;
    }
    return num * factorial(num-1);
}

console.log(factorial(4));


function factloop(num){
    if(num<=1) return 1;
    let res=1;
    for(let i=2;i<=num;i++){
        res*=i
    }
    return res
}

console.log(factloop(5));

//7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?

const arr1=[0,3,4,31];
const arr2 = [1,3,10,4,6,30];
const brr1 = [...arr1,...arr2].sort((a,b)=> a-b);
console.log(brr1);

//8. Create a function which will accepts two arrays arr1 and arr2.
// The function should return true if every value in arr1 has its corresponding value squared in array2.
// The frequency of values must be same.

const nums1=[1, 2, 2, 3];
const nums2 = [1, 4, 9, 4, 25]

function hasSqaurevalue(nums1 , nums2){
    if(nums1.length > nums2.length) return false;
    nums1 = nums1.sort((a,b)=> a-b);
    nums2 = nums2.sort((a,b)=> a-b);
    return nums1.every((num,ind)=> num*num ===nums2[ind]);

}

console.log(hasSqaurevalue(nums1,nums2));

//9. Given two strings. Find if one string can be formed by rearranging the letters of other string.

const str1="listen"
const str2 ="silent"

const freqMap={}
function isAnagram(str1,str2){
    if(str1.length !== str2.length) return false;
    for(let i =0;i<str1.length;i++){
        freqMap[str1[i]]=(freqMap[str1[i]] || 0 ) +1;
        freqMap[str2[i]]=(freqMap[str2[i]] || 0) -1;
    }
    console.log(Object.keys(freqMap))
    for(const val of Object.values(freqMap) ){
        if(val !==0){
            return false;
        }
    }
    return true;
}

console.log("Anagram : "+ isAnagram(str1,str2));

/*
10. Write logic to get unique objects from below array ?

    I/P: [{name: "sai"},{name:"Hello"},{name: "sai"},{name:"Hello"},{name: "111111"}];
    O/P: [{name: "sai"},{name:"Hello"}{name: "111111"}*/

const arrObj = [{name: "sai"},{name:"Hello"},{name: "sai"},{name:"Hello"},{name: "111111"}];
let uniqueSet=new Set();
const uniObj = arrObj.filter((obj)=> {
    if(!uniqueSet.has(obj['name'])){
        uniqueSet.add(obj['name']);
        return true;
    }else{
        return false;
    }
})
console.log(uniObj);

                                //OR

const uniObj2 = arrObj.reduce((acc, obj) => {
    if (!acc.names.has(obj['name'])) {
        acc.names.add(obj['name']); // Add the name to the Set
        acc.result.push(obj); // Keep the object in the result
    }
    return acc;
}, { names: new Set(), result: [] }).result;

console.log(uniObj2);


