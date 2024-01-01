//1.>scope practice
//****************************************************************************
for (var i = 0; i < 5; i++) {
  //console.log(i); //0,1,2,3,4
}
//console.log('ourside for loop',i) //5
//Note==>var has function scope.

for (let i = 0; i < 5; i++) {
  //console.log(i); //0,1,2,3,4
}
//console.log("ourside for loop", i);/ReferenceError:
//Note==>let has block scope.
//Note=>declaring varibale inside block with var keyword is like declaring that glovally.
{
  var age = 12; //
}
//abc();
//console.log(age);//12

{
  let age = 12;
}
//abc();
//
//console.log(age);//ReferenceError: age is not defined

//setTimeOut inside for Loop

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    // console.log(i)// 5,5,5,5,5   //https://www.youtube.com/watch?v=01YqvsizQs4
  }, 1000);
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    //  console.log(i) //0,1,2,3,4,   //https://www.youtube.com/watch?v=01YqvsizQs4
  }, 1000);
}

//callbakc Hell

addition(2, function (addRes, err) {
  if (!err) {
    Subtract(addRes, function (subRes, err) {
      if (!err) {
        multiplication(subRes, function (mulRes, err) {
          //console.log(mulRes);                        //output 20;
        });
      }
    });
  }
});

function addition(val, callback) {
  callback(val + 5, false);
}
function Subtract(val, callback) {
  callback(val - 3, false);
}
function multiplication(val, callback) {
  callback(val * 5, false);
}
///////end of callback hell

let x = [1];
let y = x;
x.push(2); //yaha x hai wo x ka type object hai;
//console.log(x); // [1, 2]
//console.log(y); // [1, 2]

let a = [1];
let b = a;
a = 9; //yaha a ka type number ho gay jo ki pehle object tha;
//console.log(a); //9
//console.log(b); //[1]

var g = [1, 2, 3];
var h = g;
g; // [1,2,3]
h; // [1,2,3]

// later
h = [4, 5, 6]; //i think yaha h ak new array obj banaya gya, so i think it has different memory location now, yaha hamne h ke previous value koupdate nahi kiya by push/pop or other array method, balki new array obj create kiye hai.
g; // [1,2,3]
h; // [4,5,6]

let c = [1, 2];
let d = c;
c = []; //aisa karne se c ke array me to kuch update or change nahi ho raha hai, c to array hai usko update ke liye .push or pop or array methods....yaha to ham c ko new..
//console.log(c)//[]
//console.log(d)//[1,2]


//avoid mutating orignal object
const todos = [
  { task: "reading", completed: true },
  { task: "painting", completed: false },
];
function addToDo(newToDo) {
  return [newToDo, ...todos];
}
const newList = addToDo({ task: "recording", completed: false });
//console.log(todos);
//console.log(newList);


//finding sum of n numbers using map()
function sum(...values) {
  console.log(...values); //[2,3],[10,4,6],[10,4,6,9,10,30]
  let sum=0;

  // values.forEach(data=>{
  //   sum=sum+data
  // })
  
 // values.map(data=>sum=sum+data)  //it is also same thing what above forEach loop was doing.
  console.log(sum)
}

sum(2, 3);
sum(10, 4, 6);
sum(10, 4, 6, 9, 10, 30);

//Note =>har jagh filter lagane ki kosis mat, filter only and only waha jaha condiiton ke base pe new array, rather than map() or other way.

// javascript closure example

// outer function
function greet() {

  // variable defined outside the inner function
  let count = 0;

  // inner function
  function displayName() {
console.log('count',++count);     //count++ pe output=>1,2,3, and count+1 =>2,2,2
      // accessing name variable
  }

  return displayName;
}

const value=greet();
value();//1 //yaha closure ka concept laga so  inner function captures, remembers the variable of its lexical scope,so each time value increase ho raha hai..
value();//2
value();//3
const value1=greet();
value1();//1




