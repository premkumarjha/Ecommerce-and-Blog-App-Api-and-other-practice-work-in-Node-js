//1.>frequency of elements in array

var pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];
let redobj = {};
pets.forEach((data) => {
  if (!redobj[data]) {
    redobj[data] = 1;
  } else {
    redobj[data] = redobj[data] + 1;
  }
});
//console.log('redobj======>',redobj);
//console.log('redobj======>',obj);
//******************************using reduce //reduce me jo initial value dete wo actually acumalator ki initial value hoti..*********************** */
const redobjusingreduce = pets.reduce((acc, current) => {
  if (!acc[current]) {
    acc[current] = 1;
    //return  acc[current]=1 ===========>wrong , will not give right output
    return acc;
  } else {
    acc[current] = acc[current] + 1;
    //return acc[current]=acc[current] +1   ===========>wrong , will not give right output
    return acc;
  }
}, {}); //yaha jo blank {} ye acc={},aisa samjho
//console.log('redobjusingreduce======>',redobjusingreduce);

//2.>groupby on an array of objects   //isko 3-4 ways se kar sakte, ==>https://dmitripavlutin.com/javascript-array-group/

const products = [
  { name: 'apples', category: 'fruits' },
  { name: 'oranges', category: 'fruits' },
  { name: 'potatoes', category: 'vegetables' }
];

//==>output like belwo:

const groupByCategory = {
  'fruits': [
    { name: 'apples', category: 'fruits' }, 
    { name: 'oranges', category: 'fruits' },
  ],
  'vegetables': [
    { name: 'potatoes', category: 'vegetables' }
  ]
};

let peopleReduce = [
  { name: "John", age: 21 },
  { name: "Oliver", age: 55 },
  { name: "Michael", age: 55 },
  { name: "Dwight", age: 19 },
  { name: "Oscar", age: 21 },
  { name: "Kevin", age: 55 },
];
let group = {};
peopleReduce.forEach((data) => {
  if (!group[data["age"]]) {
    group[[data["age"]]] = [data];
  } else {
    group[[data["age"]]].push(data); //group[[data['age']]]=group[[data['age']]].push(data)
  }
});
console.log(group);

const groupObj = peopleReduce.reduce((acc, current) => {
  if (!acc[current.age]) {
    acc[current.age] = [current];
    return acc;
  } else {
    acc[current.age].push(current);
    return acc;
  }
}, {}); //yaha ye jo {},ye acc={},aisa samjho, and {} acc ka initial obj or initialzation or default..
//console.log(groupObj)

//3.>remove duplicate ===> from normal array + from array of object

const arrayItem = [2, 2, 3, 4, 4, 5, 9];

let arrayAfterDuplicateRemoval = [];
let duplicateItem = [];
arrayItem.forEach((data) => {
  if (arrayAfterDuplicateRemoval.indexOf(data) == -1) {
    arrayAfterDuplicateRemoval.push(data);
  } else {
    duplicateItem.push(data);
  }
});
//console.log('arrayAfterDuplicateRemoval=>',arrayAfterDuplicateRemoval);
//console.log('duplicateItem=>',duplicateItem);

//below is for object
const arr = [
  { id: 1, name: "test1" },
  { id: 2, name: "test2" },
  { id: 2, name: "test2" },
  { id: 3, name: "test4" },
  { id: 4, name: "test5" },
  { id: 5, name: "test6" },
  { id: 5, name: "test7" },
  { id: 6, name: "test8" },
];
const blankArry = [];

arr.forEach((data) => {
  const abc = blankArry.find((data1) => data1.id == data.id);
  if (!abc) {
    blankArry.push(data);
  }
});
//console.log('blankArry',blankArry)


//3.1.>find common Obj from two array of object;

const arr178=[

  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2012-02-03'),
    "capacity": 7
  },
  {
    "color": "pink",
    "type": "minivan",
    "registration": new Date('2012-02-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "minivan",
    "registration": new Date('2012-02-03'),
    "capacity": 7
  }

]

const arr2=[

  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2012-02-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "minivan",
    "registration": new Date('2012-02-03'),
    "capacity": 7
  },
  {
    "color": "blue",
    "type": "minivan",
    "registration": new Date('2012-02-03'),
    "capacity": 7
  }

];
//solution:
//**************
const allcolorsofarr1=arr178.map(data=>data.color);

const commondata=arr2.filter(data=>{
  if(allcolorsofarr1.includes(data.color)){
    return true;
  }else{
    return false;
  }
});
console.log(commondata) //


//4.>find sum of age or a particular props + make a separate array of value of particular props

const kvArray = [
  { key: "prem", value: 10 },
  { key: "sonu", value: 20 },
  { key: "ram", value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({
  name: key,
  marks: value,
}));
//const reformattedArray = kvArray.map(value=>({'name':value.key,'marks':value.value}));  //ye bhi sahi hai;
//console.log('reformattedArray=>',reformattedArray) // [
//{ name: 'prem', marks: 10 },
// { name: 'sonu', marks: 20 },
//{ name: 'ram', marks: 30 }                                                         //]

const valueOnly = kvArray.map((value) => value.value);
//console.log('valueOnly',valueOnly);//[ 10, 20, 30 ]

//5.>palindrome  of Number + string  using Reverse() and normal way.

//palindrome of string using reverse() methods

const string1 = "madam";
const reverseString = string1.split("").reverse().join("");
//console.log(reverseString == string1);//true


// smethod 2 palendrome

const palundrm=(num)=>{
  let numString=String(num);
  for(let i=0;i<=(numString.length-1)/2;i++){
    if(numString[i]== numString[numString.length-i-1]){
      console.log('yes it is palindrome')
    }else{
      console.log('no palundrom')
    }
  }
}
//palundrm(4342)

//rever Number:
const reverseNumber=(number) =>{

  var revNumber = 0;

  while (number!=0) {
    revNumber = revNumber * 10 + number % 10
    number = Math.floor(number / 10);
  }

  return revNumber;
}
let res=reverseNumber(567)
//console.log(res)

//5.1>how  many ways we can compare two string ?? // == bhi kaaam karega, you can check; //https://www.programiz.com/javascript/examples/string-comparison

//5.2 how many ways compare two objects + two array of object //https://www.freecodecamp.org/news/javascript-comparison-operators-how-to-compare-objects-for-equality-in-js/

//5.3> two array of oject , unme jo same or common object unko find or deuplicate nikalo???

//5.4>add an element at nth position in array and remove nth item from array??

let arra=[1,2,3,4,5]  //array.splice(index, howmany, item1, ....., itemX)     //array.slice(start, end)

//delete 2 and add 1.5 and 1.6 in between 1 and 3

//1.>
arra.splice(1,2,1.5,1.6); //yaha 2 item delete hogi starting from position 1
//console.log('arr=>',arra) //[1, 1.5, 1.6, 4,5]

//2.>
arra.splice(1,0,1.5,1.6);  //yaha position 1 pe ye two new add honge but jo pehle the wo delete nahi honge....
//console.log('arra=>',arra);//[1, 1.5, 1.6,2,3,4,5]
//3.>
arra.splice(1,2) ;  //yaha starting from position 1 two item delete hoga;
//console.log('arr===>',arra); //[1, 4, 5]

const res12=arra.slice(1,3);
//console.log(res)  //[2, 3]

const res34=arra.slice(3,4);
//console.log(res)  //[4]

const res56=arra.slice(3,5);
//console.log(res)  //[4,5]


//6.>find max/largest number from list of number

const arratofindmaxarray = [1, 2, 0, 7, 3, 77];
let max = arratofindmaxarray[0];
for (let i = 0; i < arratofindmaxarray.length; i++) {
  //var max=arratofindmaxarray[0];
  if (max < arratofindmaxarray[i]) {
    //arratofindmaxarray[i] >arratofindmaxarray[i+1] ->wrong hai
    max = arratofindmaxarray[i];
  }
}
//console.log('maxxx=>',max)

//7.>fabonaci seires,

//0,1,1,2,3,5,8
let a = 0;
let b = 1;
console.log(a);
console.log(b);
for (let i = 1; i <= 10; i++) {
  let c = a + b;
  a = b;
  b = c;
  // console.log(c);
}

//8.>reverse each word in the sentence=>var string = "Welcome to this Javascript Guide!";
//output=!ediuG tpircsavaJ siht ot emocleW

var string2 = "Welcome to this Javascript Guide!";

let splitString = string2.split(" ");
let reversedString = splitString.reverse();

let reverseword = reversedString.map((data) =>
  data.split("").reverse().join("")
);
//console.log(...reverseword);//!ediuG tpircsavaJ siht ot emocleW

//9.>How do find the occurence of a string in a sentences?
var occuranceString = "Hi prem Hi How are you prem Hi";

let stringCount = 0;
occuranceString.split(" ").forEach((data) => {
  if (data === "Hi") {
    stringCount++;
  }
});
//console.log('stringCount',stringCount);

//10.>How do find the occurence of a character in a string?
var occuranceChar = "Hiii";

let charCount = 0;
occuranceChar.split("").forEach((data) => {
  if (data === "i") {
    charCount++;
  }
});
//console.log('charCount',charCount);

//11.>How to find the maximum occurring character in given String?
var maxChar = "Hiiipppoooo";
var splitmaxChar = maxChar.split("");
let obj23 = {};
splitmaxChar.forEach((data) => {
  if (!obj23[data]) {
    obj23[data] = 1;
  } else {
    obj23[data] += 1;
  }
});
console.log("obj23", obj23);
console.log("obj23", Object.values(obj23).sort());
let sorted = Object.values(obj23).sort((a, b) => b - a);
//Object.values( );

const resultofmaxchar = Object.keys(obj23).find(
  (data) => obj23[data] === sorted[0]
);
console.log("sorted", resultofmaxchar);

// let maxOccurChar=splitmaxChar.reduce((acc,current)=>{
// if(!acc[current]){
//   acc[current]=1;
//   return acc
// }else{
//   acc[current]+=1;
//   return acc
// }

// },{});
// console.log('maxOccurChar',maxOccurChar);

//12.>how to check Pangram ? -->//A pangram is a sentence containing every letter of the English Alphabet.
const str3 = "We promptly judged antique ivory buckles for the next prize";
const str4 = "The quick brown fox jumps over a lazy dog.";
const str5 = "Two driven jocks help fax my big quiz";
const str6 = "avf uytbgn";

const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

const resultofpanagram = alphabets.every((alphabet) =>
  str5.toLowerCase().includes(alphabet)
);

//console.log("if true means it is panagram and if false than not a panagram",resultofpanagram);

//13.>check if two strings are anagrams(Brush = shrub,Dictionary = indicatory,) of each other
//An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are anagram of each other.

const anmstring1 = "Brush".toLowerCase().split("");
const anmstring2 = "shrub";

const resultanagram = anmstring1.every((alphabte) =>
  anmstring2.toLowerCase().includes(alphabte)
);
//console.log("if true means it is anagrams and if false than not a anagrams",resultanagram);

//14.>swap two variable, with and withiout third variable??  ///=============>important.....
let a1 = 8;
let b1 = 9;

// let c1=b1;
//  b1=a1;
//  a1=c1;
//console.log('a1 is',a1);
//console.log('b1 is',b1);

a1 = a1 + b1; //17
b1 = a1 - b1; //17-9=8

a1 = a1 - b1; //19-8=9;

//15.>sorting of string and number/items of array?
const sortarray = [90, 8, 34, 0, 3, 78];

//console.log('sorted',sortarray.sort());//[ 0, 3, 34, 78, 8, 90 ] =>wrong

//console.log(sortarray.sort((a,b)=>a-b));//[ 0, 3, 8, 34, 78, 90 ] =>right;

const sortstring = ["pooja", "mohan", "amar", "maa kali", "babloo"];
//console.log(sortstring.sort());//[ 'amar', 'babloo', 'maa kali', 'mohan', 'pooja' ]  //ye sort() string ke case me sahi kaam karta but for number , we should pass(a,b)=>a-b;

//16.>reverse a string???

//console.log('prem'.split('').reverse().join('')) //merp

//17.>program to check prime number and also write first n prime number?

const isPrime = (number) => {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      count = count + 1;
    }
  }
  if (count == 2) {
    //console.log('prime');
  } else {
    // console.log('not a prime');
  }
};
isPrime(90);

//18.>How to find closest/nearest number out of an array ?? //absolute differences between the given number and each array element,jiska min diff wahi closest number..

//var numbers = [20, 25, 30, 35, 5, 10, 15];
var numbers = [12, 25, 3, 5, 65, 10, 15];
let target = 7;
let diffarray = [];
numbers.forEach((data) => {
  diffarray.push(Math.abs(data - target));
});
const minDiff = Math.min(...diffarray);
const closetNumberIndex = numbers.findIndex(
  (data) => Math.abs(data - target) === minDiff
);
console.log("closest number", numbers[closetNumberIndex]);

//using for  loop

//using reduce() fucntion...

//19.>Balance parenthesis??

//https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/

//Below Questions are Neosoft Intreview Prep Question
//**********************************************************

//20.>Determine the largest and the smallest element of an array which is not sorted.

//Input: [100, 1234, 10, 4, 1212]
//Output:
//Smallest: 4
//Largest: 1212

let Input1 = [100, 1234, 10, 4, 1212];
//console.log(Math.max(...Input1));
//console.log(Math.min(...Input1));

let largest = 0;
for (let i = 0; i <= Input1.length - 1; i++) {
  if (Input1[i] > largest) {
    largest = Input1[i];
  }
}
//console.log('largest num in given array is :',largest);

//20.1>problem statement mentioned below given array;

const array145 = [
  { value: '11', children: ['11/1','11/2','11/3'] },
  { value: '12', children: ['12/1','12/2', '12/8', '12/3'] },
  { value: '13', children: ['13/1','13/2' ,'13/8', '13/9'] },
];

const tags = [
  { value: '11', children: ['11/1','11/2','11/3',] },
  { value: '12', children: ['12/1','12/2', '12/8', '12/3'] },
  //{ value: '13', children: ['13/1','13/2' ,'13/8', '13/9'] },
];

//1.>if tags array ke object me array145 ka koi bhi value exist hai and us value ke sare child bhi exist hai to print/cosole log only the value/parent value,else print/console all of its childs;
//2.>if tags array me array145 ke sare item prestn hai uske each item ke sare child bhi present hai ,to print/console 'all value with all child present, if sare value hai but sare child nahi than print same value but child not same, if tags me array145 ke sare value nahi prssent print/console all value not present;






//21.>Print missing number in a given integer array of 1 to 100

let arrtyui = [6, 7, 10, 11, 13];

//Output: 8 9 12

let actualArray = []; //[6, 7, 8, 9, 10, 12, 13];

for(let i=6;i<=13;i++){
actualArray.push(i);
}

let missingArray = [];

actualArray.forEach((data) => {
  if (arrtyui.indexOf(data) == -1) {
    missingArray.push(data);
  }
});
console.log('res', missingArray);

//******************************************************

let input2 = [2, 3, 10];
//output : [1,4,5,6,7,8,9,11,...]

let givenInput = [];
let missing = [];
for (let i = 1; i <= 100; i++) {
  givenInput.push(i);
}

input2.forEach((data) => {
  givenInput.splice(givenInput.indexOf(data), 1);
});
//console.log('missing',givenInput)

//22.> Print duplicate number from array.

let input3 = [2, 3, 6, 2, 6, 8];
//Output: 2,6

let duplicate = [];
let unique = [];
input3.forEach((data) => {
  if (unique.indexOf(data) == -1) {
    unique.push(data);
  } else {
    duplicate.push(data);
  }
});
//console.log(duplicate)

//23.>Find the next palindrome number. If I pass any integer value to function it should return the next palindrome number.

//For example:
//If I pass 105 - it should return 111
//If I pass 100 - it should return 101

let input4 = 23;
const checkPalindrome = (num) => {
  let actualNum = num;
  let remainder = 0;
  while (num != 0) {
    remainder = remainder * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  //return remainder;
  if (remainder == actualNum) {
    return true;
  } else {
    return false;
  }
};

const nextPalindromenum = (x) => {
  while (!checkPalindrome(x)) {
    x = x + 1;
    checkPalindrome(x);
  }
  console.log("palindrome->", x);
};
nextPalindromenum(100);

//24.>Print the first “n” prime numbers. N is anything a user might enter.
//For example:
//n = 5 Output is 2,3,5,7,11
//n = 8 Output is 2,3,5,7,11,13,17,19;

const isPrimeNum = (n) => {
  let count = 0;
  //console.log("hey prem at 406");
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      count = count + 1;
    }
  }

  if (count == 2) {
    return { ispirm: true, number: n };
  } else {
    return { ispirm: false, number: n };
  }
};

//const result = isPrimeNum(90);
//console.log("ispimr", result);

const nextNPrime = (n) => {
  let primeArray = [];
  let i = 2;
  while (primeArray.length < n) {
    const result = isPrimeNum(i);
    result.ispirm && primeArray.push(result.number);
    i = i + 1;
  }
  console.log("primearr", primeArray);
};
nextNPrime(5); //[ 2, 3, 5, 7, 11 ]

//25.>Write a function fib() that takes an integer n and returns the series up to nth Fibonacci number.

//For example:

//fib(1); // => 1
//fib(2); // => 1, 1
//fib(3); // => 1, 1, 2
//fib(4); // => 1, 1, 2, 3
//fib(5); // => 1, 1, 2, 3, 5
//fib(6); // => 1, 1, 2, 3, 5, 8

//=>1,1,2,3,5,8
const fib = (n) => {
  let a = 0;
  let b = 1;
  let c;
  for (let i = 1; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log(a);
  }
};
//fib(3);

//26.> write a function which will take input and if given array me uska anagram hua to return that item?
let arran = ["abc", "cde", "exam", "listen"];

//anagram

const angram = (str) => {
  let abcd = [];
  arran.forEach((vm) => {
    if (str.length != vm.length) {
      return;
    } else {
      const result = str.split("").every((el) => vm.includes(el));
      abcd.push(vm);
      //return abcd.push(vm);    //if yaha return karega to wo return function ka nahi hoga, you can check by hover the function.....
    }
  });
  return abcd;
};

const outputanagram = angram("listen");

//console.log(outputanagram);

//27.> write a function which will take input and if given array me uska pangram  hua to return that item?

//const str3 = "We promptly judged antique ivory buckles for the next prize";
//const str4 = "The quick brown fox jumps over the lazy dog";
//const str5 = "Two driven jocks help fax my big quiz";
//const str6 = "avf uytbgn";

//const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

const pangram = (str) => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  const panagramResult = alphabets.every((data) =>
    str.toLowerCase().includes(data)
  ); //input string ko lowecase me change kar lo, Q ki hamne all small hi lya in alphabte
  return panagramResult;
};

const output = pangram("The five boxing wizards jump quickly");
//console.log(output)

//28.>sort DATE and Upvotes in descending order

const tableData = [
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2019-01-21",
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2019-10-21",
  },
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2019-11-23",
  },
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2020-01-24",
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 7,
    date: "2010-12-31",
  },
  {
    title: "Artificial Mountains",
    upvotes: 2,
    date: "2019-11-22",
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "2019-11-21",
  },
];
//concat() new array create karta hai and return it

//console.log(tableData.sort((a,b)=>b.date - a.date));  //wrong.......wrong ...wrong...
console.log(tableData.sort((a, b) => new Date(b.date) - new Date(a.date))); //right..

//29.>   find deuplicate in given array,   let array=[[1],[1,2],[1,2,3],[1,2,3,4]];

//let abc=[...array] //[1],[1,2],[1,2,3],[1,2,3,4]; ===============>WRONG
//let def=[...abc] //====================================WRONG

let array1 = [];
array1.forEach((data) => {
  array1.push(...data); //HERE we can get element as spread....
});

let uniqueArray = [];
let duplicateAray = [];

array1.forEach((data) => {
  if (uniqueArray.indexOf(data == -1)) {
    uniqueArray.push(data);
  } else {
    duplicateAray.push(data);
  }
});

//30.> how to flatten the array ->let array=[[1],[1,2],[1,2,3],[1,2,3,4]];

//Note ===>if you are thinking ki do bar apread kar denge to each element spread ho jayega, to WRONG.....

//1>>use for loop as above;

//2.>let flatArray = [].concat(...arr);

//3.>we can use recursion also.

//31.>change the display props value of 1st index object.

////They both(map and filter) return a new array. map returns a new array of elements where you have applied some function on the element so that it changes the original element (typically). filter returns a new array of the elements of the original array (with no change to the original values).

let listData = [
  { heading: "section1 ", data: "this is section one", display: "none" },
  { heading: "section2 ", data: "this is section two", display: "none" },
  { heading: "section3 ", data: "this is section three", display: "none" },
];
const value = listData.filter((data, i) => {
  if (i == 0) {
    return { ...data, display: "block", prem: "" };
  }
});
console.log(value); // {heading: 'section1 ', data: 'this is section one', display: 'none'}   =>WRONG

//***********************************below is by using map

const value12 = listData.map((data, i) => {
  if (i == 0) {
    return { ...data, display: "block" };
  } else {
    return { ...data, display: "none" };
  }
});
//console.log(value12); //RIGHT

//32.>Maximum Subarray //https://javascript.plainenglish.io/javascript-algorithms-maximum-subarray-leetcode-15812b95bc4   or //

//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

//if simply soche to it looks ki sabko add kar do wahi max subarray, but if negative numbers in between than....
//Subarray bhi contigous hota...

//let nums = [-2,1,-3,4,-1,2,1,-5,4]; //[4,-1,2,1] has the largest sum = 6.
let nums = [5, 4, -1, 7, 8];
let maxsubarraysum = 0;
let indexi;
let indexj;
for (let i = 0; i <= nums.length - 1; i++) {
  let sum = 0;
  for (let j = i; j < nums.length; j++) {
    sum = sum + nums[j];
    if (sum >= maxsubarraysum) {
      maxsubarraysum = sum;
      //indexj = j;            //if index bolega kaha sekaha than...
      //indexi = i;
    }
  }
}

//console.log('maxsubarraysum===================>',maxsubarraysum);
//console.log('index i',indexi,indexj)

//33.>find length of Longest Substring Without Repeating Characters; // check for repeating and all

let s = "pwwkew"; //output ->3
//let s='google.com'; //output->7
//let s = "abcabcbb"; //output ->3
//let s='ABDEFGABEF' //output->6
//let s='GEEKSFORGEEKS';//output->7


///********************************************************************* */


//find length of Longest Substring Without Repeating Characters

//Maximum Subarray

//Balance parenthesis

//let s = 'pwwkew';

let syuios='ABCDEFGABEF'; //ABCDEFG ,7

//let s='GEEKSFORGEEKS'; //“EKSFORG” and “KSFORGE”, with lengths of 7
//let s='stackoverflow' ;//stackoverfl  //11
//let s='bbbbb'
//let s=google.com  //7

let s123 = 'abcabcbb'; //output ->3
let longsubstr=[]
  let maxlen=0;
for (let i = 0; i <= s123.length - 1; i++) {
  let rest = '';
  for (let j = i + 1; j <= s123.length - 1; j++) {
    if (s123[i] != s123[j] && !rest.includes(s123[j])){
      rest = s123.substring(i,j+1)//substring me last exclude...
      longsubstr.push(rest);
      if(maxlen <rest.length){
          maxlen=rest.length
      }
      //console.log('ss',rest, rest.length);
    } else {
      i = j;
     
    }
  }
}

console.log('longsubstr==>', longsubstr,maxlen);
///*********************************************************************** */


let start = 0;
let end = 0;
let lenLongSubstr = 0;
let uniqsubstr = new Set();

while (end < s.length) {
  if (!uniqsubstr.has(s[end])) {
    uniqsubstr.add(s[end]);
    end++;
    if (uniqsubstr.size > lenLongSubstr) {
      lenLongSubstr = uniqsubstr.size;  //set me size hota for length
    }
  } else {
    uniqsubstr.delete(s[start]);
    start++;
  }
}

console.log('lenlongsubstring==>',lenLongSubstr);


//32.>longest common prefix   //prefix means ki jo word ke starting or means word ke pehle laga, and suffix means ki jo word ke last me laga hai...

//Input: strs = ["flower","flow","flight"]
//Output: "fl"

//=====>prefix means jo sabse starting of word....and sufix means word ke last me...

//logic ->https://duncan-mcardle.medium.com/leetcode-problem-14-longest-common-prefix-javascript-3bc6a2f777c4

//logic->https://dev.to/urfan/leetcode-longest-common-prefix-with-javascript-32ca

//solution 1.>

let strs = ['flower', 'flow', 'flight'];
//Output: "fl"

//let strs = ["geeksforgeeks", "geeks", "geek", "geezer"]; //gee
//let strs = ["apple","ape","april"]  //ap

///.>solution 1->
//let strs =['flower', 'fpow', 'flight'];
let abcd=''
for(let i=0;i<=strs.length-1;i++){
for(let j=1;j<=strs.length-1;j++){
    if(strs[0][i] != strs[j][i]){
        break;
    }
}
abcd=strs[0].substring(0,i)
}
console.log('res',abcd)


//solution 2.>

let val = [];
for (let i = 0; i <= strs.length - 1; i++) {
  let count=0;
  for (let j = 1; j <= strs?.length - 1; j++) {
    if (strs[0][i] == strs[j][i]) {
      count=count+1
    }
    if(count == strs?.length - 1){
      val.push(strs[0][i])
    }
  }
}
console.log('hii', val.join(''));


//solution 2.

const longestCommonPrefix = (inputarray) => {
  let prefix = "";

  for (let i = 0; i <= inputarray[0].length - 1; i++) {
    for (let j = 1; j <= inputarray.length - 1; j++) {
      //ye loop two baar hi chalega....Q ki hame banki two item ko first se compare..
      if (inputarray[0][i] != inputarray[j][i]) {
        return prefix;
      }
    }
    prefix = prefix + inputarray[0][i];
  }
  return prefix;
};

const outputlongestprefix = longestCommonPrefix(["flower", "flow", "flighto"]);

console.log("outputlongestprefix", outputlongestprefix);

//33.>Find the pairs of array element for which sum / product is equal to given target value (Two Sum Problem);

let arr1 = [2, 7, 5, 3, 9];
let addSum = 12;
let result = [];
for (let i = 0; i <= arr1.length - 1; i++) {
  for (let j = 1; j < arr1.length; j++) {
    if (arr1[i] + arr1[j] == 12) {
      // if (arr1[i] + arr1[j] == 12 && result.every(data=>data.every(data=>data != arr1[i] && arr1[j]))) {  //it will remove deuplicate like [ 7, 5 ], [ 5, 7 ]

      result.push([arr1[i], arr1[j]]);
    }
  }
}
//console.log("result", result);

//34.>Find the missing number from unsorted array?


//==>already solved above.


//35.>balance/Valid Parentheses (with JavaScript)   //https://dev.to/urfan/leetcode-valid-parentheses-with-javascript-eh9

const isBalanceParenthesis = (inputstring) => {
  let obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let array35 = [];
  for (let i = 0; i <= inputstring.length - 1; i++) {
    if (
      inputstring[i] == "[" ||
      inputstring[i] == "{" ||
      inputstring[i] == "("
    ) {
      array35.push(inputstring[i]);
    } else if (
      inputstring[i] == "]" ||
      inputstring[i] == "{" ||
      inputstring[i] == "("
    ) {
      let closingParan = array35.pop();
      if (inputstring[i] != obj[closingParan]) {
        return false;
      }
    }
  }
  return array35.length == 0; //suppose opening bracket ki count jyada ho...then it is also not balnce...,jitne opening utne hi closing bhi hone chahiye
};

const resultforvalidparenthesis = isBalanceParenthesis("[(]{)}");
//console.log("parenthesis is valid ", resultforvalidparenthesis);

//solutions 2

const balance = (givenExp) => {
  let arr = [];
  let obj = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (let i = 0; i <= givenExp.length - 1; i++) {
    if (givenExp[i] == '[' || givenExp[i] == '(' || givenExp[i] == '{') {
      arr.push(givenExp[i]);
    } else {
      let popval = arr.pop();
      if (obj[popval] != givenExp[i]) {
        return false;
      }
    }
  }

  return arr.length == 0;
};

const res3456 = balance('');

console.log('res', res3456);


//36.>Move all Zeros to end of array(with JavaScript)  //https://dev.to/urfan/leetcode-move-zeros-with-javascript-4oai

let inputfor36 = [0, 1, 0, 3, 12];
//output =>[1,3,12,0,0];

//======>solution 1->two blank array lo and given main array pe loop and zero ko ak me and non zero ko ak me and than dono ko concat...

//=====>solution 2:->
for(let i=0;i<=inputfor36.length-1;i++){
  if(inputfor36[i]==0){
    inputfor36.splice(i,1);
    inputfor36.push(0)
  }
  }
//console.log('inputfor36,',inputfor36); //[ 1, 3, 12, 0, 0 ]

//37.>Rotate Array (with JavaScript)  //https://dev.to/urfan/leetcode-rotate-array-with-javascript-3j5h

let num = [1, 2, 3, 4, 5, 6, 7]; //k=3 //output->[ 5, 6, 7, 1, 2, 3, 4]
let k = 3; //k=3;

let num1 = [-1, -100, 3, 99];
let k1 = 2; //output =>[3,99,-1,100]

for (let i = 0; i <= k1 - 1; i++) {
  let abc = num1.pop();
  num1.unshift(abc);
}
//console.log(num1)

//38.>find the common char in all items in array
const hunney = ["flower", "flow", "flightor"];
//jitne bhi common hai all three string me nikali..
let commonchar = "";
for (let i = 0; i <= hunney[0].length - 1; i++) {
  for (let j = 1; j <= hunney.length - 1; j++) {
    if (!hunney[j].includes(hunney[0][i])) {
      break;
    } else if (j == hunney.length - 1) {
      //iska matlab ki all item me check karega , all me hoga tabhi add, aisa nahi ki kuch me hai aue kuch me nahi..,n-1, means lst item tak check kar liya
      commonchar = commonchar + hunney[0][i];
    }
  }
}
console.log("commonchar", commonchar);

//39.>write a logic to count the maximum number of repeating characters in a string?

let givenStirng='hunneybbb';
const charcountinstring=givenStirng.split('').reduce((acc,curr)=>{

  if(!acc[curr]){      //yaha acc.curr will not work..
    acc[curr]=1
    return acc;
  }else{
    acc[curr]+=1;   //yaha acc.curr will not work...
    return acc
  }

},{})

//console.log('maxcount',Math.max(...Object.values(charcountinstring)));
//console.log('charcountinstring',charcountinstring);//{ h: 1, u: 1, n: 2, e: 1, y: 1, b: 3 }
for(let i in charcountinstring){
  if(charcountinstring[i] ==Math.max(...Object.values(charcountinstring)))
 console.log('max occuring char',i)
};

//39.1>Find the minimum distance between two numbers

let arrt=[3, 4, 5]  //x = 3, y = 6
let arrIndex3=[];
let arrIndex6=[]
console.log(arrIndex3)

arrt.forEach((data,index)=>{
  if(data==3){
  arrIndex3.push(index)
  }
  if(data==5){
    arrIndex6.push(index);
  }
});
console.log(arrIndex3);
console.log(arrIndex6);
let mindist=Math.abs(arrIndex3[0]-arrIndex6[0])
for(let i=0;i<=arrIndex3.length-1;i++){
  for(let j=0;j<=arrIndex6.length-1;j++){
if(Math.abs(arrIndex3[i] - arrIndex6[j]) <= mindist){
  mindist=Math.abs(arrIndex3[i] - arrIndex6[j])
  }
}
  
};
console.log(mindist);


//40.>Rearrange the array in alternating positive and negative items

let arr=[-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]; //output=>[5, -5, 2, -2, 4, -8, 7, 1, 8, 0]
//let arr=[3,1,-2,-5,2,-4]  //output=>[3, -2, 1, -5, 2, -4]
let arr1=[];
let arr2=[];
let arr3=[];
arr.forEach(a=>{
  if(a>=0){
    arr1.push(a);
  }else{
    arr2.push(a);
  }
});
let abc=arr.shift();
//console.log(abc)
//console.log('arr1=>',arr1);
//console.log('arr2',arr2);

for(let i=0;i<=arr.length-1;i++){
  let positive=false;
  if(arr1[i] || arr1[i]==0){
    arr3.push(arr1[i])
    positive=true;
  }
  if(arr2[i]){
    arr3.push(arr2[i])
  }
}
console.log(arr3)

//40.>permutations of a string ???  //ye normal way and backtracking dono se bnega




//41.>Write a program to count the digits in a number?



//42.>Write a program to calculate pow(x,n), factorial , fabonacci series using recursion



//43.>Program to remove all white spaces from a string with using replace(); //tr1.replaceAll("\\s", "");

//String str1 = "Saket Saurav        is a QualityAna    list";



//44.>write code for any sorting algorith.??





//46.>finish all 50 Question of Array and string from geeksforgeeks by daily trying one problems.


//47.>same for ->tress,graph, dynamic programing;

//Maximum Subarray

