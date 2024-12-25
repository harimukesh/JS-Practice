//11. Write a JavaScript program to find the maximum number in an array.

const maxNum = [1,2,44,2,4,6,8,9,4,33]
const maxVal = maxNum.reduce((acc,num)=>{
    acc=Math.max(acc,num);
    return acc;
},0);

console.log("maximum number : " + maxVal);

//12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

const arrwhole = [2,3,5,3,6,7,8,99,3];
const arrEven = arrwhole.filter(arr=> arr%2===0);
console.log(arrEven);

//13. Write a JavaScript function to check if a given number is prime.

function  isprime(num){
    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i===0) return "Non Prime";
    }
    return "prime"
}

console.log(isprime(43));

//14. Write a JavaScript program to find the largest element in a nested array.
// [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]


const nestArr = [[3, 4, 58], [709, 8, 9, [10, 1111,[23,45,6678]]], [111, 2]];
function findMax(nestArr){
    return nestArr.reduce((acc,current)=>{
        if(Array.isArray(current)){
            acc=Math.max(findMax(current),acc);
        }else{
            acc=Math.max(current,acc);
        }
        return acc;
    },0)
}
console.log("Max num in nested array : "+findMax(nestArr));

//15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

function fib(num){
    if(num===0) return 0;
    if(num===1) return 1;
    return fib(num-1) + fib(num-2);
}
console.log("Fibonacci : "+fib(7));


function fibonacci(num){
    const array1=new Array(num+1).fill(0);
    array1[0]=0;
    array1[1]=1;
    for(let i=2;i<=num;i++){
        array1[i]=array1[i-1]+array1[i-2];
    }
    return array1[num];
}
console.log("fib with tabulation : " + fibonacci(9));

//16. Given a string, write a javascript function to count the occurrences of each character in the string.
const stringOcc="Hello world!"
const freqOcc ={};
for(let i=0;i<stringOcc.length;i++){
    freqOcc[stringOcc[i]]=(freqOcc[stringOcc[i]] || 0)+1;
}
console.log(freqOcc);

//18. Write a javascript function that sorts an array of numbers in descending order.
const descArr = [2,2,4,2,6,4,7,4,3,64];
console.log(descArr.sort((a,b)=>b-a));

//19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.

const reverseStr = "JavaScript from World Hello".trim().split(" ");
for(let i=0;i<reverseStr.length/2;i++){
    [reverseStr[i],reverseStr[reverseStr.length-1-i]] = [reverseStr[reverseStr.length-1-i],reverseStr[i]];
}
console.log(reverseStr.join(" "));


//20. Implement a javascript function that flattens a nested array into a single-dimensional array.
const nestArr1 = [[3, 4, 58], [709, 8, 9, [10, 1111,[23,45,6678]]], [111, 2]];
function flattenArray(nestArray){
    return nestArray.flatMap(arrMap=>{
        if(Array.isArray(arrMap)){
            return flattenArray(arrMap);
        }
        return arrMap;
    })
}
console.log(flattenArray(nestArr1));

//21. Write a function which converts string input into an object
// ("a.b.c", "someValue");
// {a: {b: {c: "someValue"}}}


function stringToObject(path, value) {
    const keys = path.split('.'); // Split the input path into keys
    let result = {}; // Initialize an empty object

    // Iterate through the keys and create the nested structure
    keys.reduce((acc, key, index) => {
        // If it's the last key, assign the value
        if (index === keys.length - 1) {
            acc[key] = value;
        } else {
            // Otherwise, create an empty object for the next key
            acc[key] = acc[key] || {};
        }
        return acc[key]; // Return the nested object to continue the chain
    }, result);

    return result;
}

const obj = stringToObject("a.b.c", "someValue");
console.log(obj);
