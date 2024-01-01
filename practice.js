const { json } = require("express");

let array = [
  { id: 1, name: "prem" },
  { id: 2, name: "ram" },
  { id: 3, name: "mohan" },
  { id: 4, name: "aman" },
  { id: 5, name: "prem" },

]

//duplicate ka sum bas 

let output = array.map(data => data.name);


let sum = 0;
let ele = array.map(data => data.id);
console.log(ele);
let ygj = [1, 2, 3, 4]
for (i = 0; i < array.length; i++) {
  sum = sum + ele[i];

}
console.log(sum)
let add = 0;
array.forEach(data => {
  add = add + data.id
})
console.log("hi add=", add)


//

let dtc = [

  { name: "prem", age: 12, degree: "12th" },
  { name: "prem", age: 12, degree: "10th" },
  { name: "prem", age: 10, degree: "B.E" },
  { name: "sonu", age: 16, degree: "10th" },
  { name: "sonu", age: 19, degree: "10th" },
  { name: "sonu", age: 12, degree: "B.E" },
  { name: "amit", age: 17, degree: "12th" },
  { name: "amit", age: 17, degree: "10th" },
  { name: "mohan", age: 17, degree: "B.E" },
  { name: "rohan", age: 12, degree: "12th" },
  { name: "sohan", age: 12, degree: "10th" },
  { name: "ramesh", age: 10, degree: "B.E" },
  { name: "tyagi", age: 16, degree: "10th" },
  { name: "somesh", age: 19, degree: "10th" },

]

const uniqueAddresses = Array.from(new Set(dtc.map(data => data.name))).map(name => {
  return dtc.find(a => a.name === name);

});

//aise kitne prem hai in dtc jinke  name prem and age 12,aise sonu in dtc jinke name sonu and age 10 hai
uniqueAddresses.forEach(abc => {
  const leng = dtc.filter(data => data.name == abc.name && data.age == abc.age).length;
  console.log(`length of ${abc.name} is`, leng)
})


console.log(uniqueAddresses); //output->[ [ { name: 'prem', age: 12, degree: '12th' },
//               { name: 'prem', age: 12, degree: '10th' },
//                  { name: 'prem', age: 12, degree: 'B.E' } ],
//                  [ { name: 'sonu', age: 10, degree: '12th' },
//                  { name: 'sonu', age: 10, degree: '10th' },
//                  { name: 'sonu', age: 10, degree: 'B.E' } ],
//                  [ { name: 'amit', age: 17, degree: '12th' },
//                  { name: 'amit', age: 17, degree: '10th' },
//                  { name: 'amit', age: 17, degree: 'B.E' } ] ]
//                                                             

//map use karke more than one field return karna hai



let morethanonefield = dtc.map(data => {
  return { "name": data.name, "degree": data.degree }
});

console.log("more than one field:", morethanonefield);

//now dtc me se only wo  name ka object chahiye jiska name  below arrys me present  hai;
let arrys = ["amit", "sohan", "somesh"];

let indexss = dtc.filter(data => arrys.indexOf(data.name) > -1)

//let indexss=dtc.filter(data=>true)

console.log("hellow:", indexss)


//this in arrow function
var this1 = {
  number: 123,
  logFunction: function () { console.log(this); },
  logArrow: () => console.log(this)
};
this1.logFunction(); // Object { number: 123}
this1.logArrow(); // Window 

//reduce function
const numbers = [1, 2, 3, 4, 5, 6];
//reduce function me if accumulator ka initial value set nahi karte hai to by default accumulator me array ka first elemen ka value initialise hota;
let summation = numbers.reduce(
  //a=1,c=2=>a+c=3;
  //a=3,c=3=>a+c=>6
  //a=6,c=4=>a+c=>10
  //a=10,c=5=>a+c=15
  //a=15,c=6=>a+c=21
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation);


////Grouping Objects by a property

let people = [
  { name: "John", age: 21 },
  { name: "Oliver", age: 55 },
  { name: "Michael", age: 55 },
  { name: "Dwight", age: 19 },
  { name: "Oscar", age: 21 },
  { name: "Kevin", age: 55 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce((accumulator, currentObject) => {
    let key = currentObject[property];
    //console.log("key",currentObject[property])                            //here acumalator ka default->{} liy hua hai
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentObject);
    return accumulator;
  }, {});
}

let groupedPeople = groupBy(people, "age");
console.log(groupedPeople);


//Remove Duplicate Items from Array

let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
let uniqueAgeGroup = ageGroup.reduce((accumulator, currentValue) => {   //here accumulato ka initial value=>[]
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]



//shows how many times each string appears in the array.

var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce((obj, pet) => {
  //console.log(obj)
  //console.log(pet)              //here accumulator ka initial value=>{}

  if (!obj[pet]) {
    obj[pet] = 1;
  } else {
    obj[pet]++;
  }
  return obj;
}, {});

console.log(petCounts);

//how would you sum up the population of every country except China?

let data = [
  {
    country: 'China',
    pop: 1409517397,
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Indonesia',
    pop: 263991379,
  }
]

let sumofpopolationExceptChinaPopulation = data.reduce((acc, val) => {
  return val.country == 'China' ? acc : acc + val.pop;
}, 0);

console.log(sumofpopolationExceptChinaPopulation);

//just for practice

let ab = 9;
let ob = {};
ob[ab] = 3;
ob["ab"] = 90;
//console.log(ob)

// to remove duplicate***********************************************************
const arr = [
  { id: 1, name: "test1" },
  { id: 2, name: "test2" },
  { id: 2, name: "test3" },
  { id: 3, name: "test4" },
  { id: 4, name: "test5" },
  { id: 5, name: "test6" },
  { id: 5, name: "test7" },
  { id: 6, name: "test8" }
];

let unqarr = [];

arr.filter(data => {

  if (unqarr.filter(d => d.id == data.id).length == 0) {
    unqarr.push(data);
  }
})
//a={b:"rma"}, c={b:"ram"},a,c is reference of object not the actual object so a and c are not same;
//console.log(unqarr);

// to remove duplicate************************************************************

arr.forEach(data => {

  if (unqarr.filter(d => d.id == data.id).length == 0) {
    unqarr.push(data);
  }
})
//a={b:"rma"}, c={b:"ram"},a,c is reference of object not the actual object so a and c are not same;

//to remove duplicate****************************************************************

arr.forEach(data => {

  if (unqarr.filter(d => d.id == data.id).length == 0) {
    unqarr.push(data);
  } else {
    return unqarr
  }
})
//a={b:"rma"}, c={b:"ram"},a,c is reference of object not the actual object so a and c are not same;
//console.log(unqarr)


//to remove duplicate*******************************************************

let distinctArrayObject = arr.reduce((accumulator, currentValue) => {   //here accumulato ka initial value=>[]
  if (accumulator.filter(data => data.id == currentValue.id).length == 0) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

//console.log(distinctArrayObject)
//********************************************************SPREAD OPERATOR ->updating object using spread operator******************************************************************* *//

//spread operator and object.assign ye sab just object copy ke liye use hota..

let object = {
  a: "b",

  address: {
    country: "india",
    city: "fghj"
  }

};
const updatedobject = { ...object, a: "v", address: { ...object.address }, city: "abc" };

console.log(updatedobject); //{ a: 'v', address: { country: 'india', city: 'fghj' }, city: 'abc' };

console.log(object);//{ a: 'b', address: { country: 'india', city: 'fghj' } }

//********************************************************SPREAD OPERATOR ->updating array using spread operator******************************************************************* *//         

const arraynumber = [1, 2, 3];

//*****************************************************copying the array in other variable
// const copynumber=[...arraynumber];

// console.log(copynumber);//[ 1, 2, 3 ]

//*****************************************************adding  aaray*******************************************
// const copynumber=[...arraynumber,89];

// console.log(copynumber);//[ 1, 2, 3,89];

//******************************************************difference between  ....(tripple dot) and without ....(triple dot) */
// const arryssd=[arraynumber];

// console.log(arryssd)// [ [ 1, 2, 3 ] ];


//*****************************************************remove  aaray*******************************************
//  let remainingnumber=arraynumber.filter(data=>data!==1)
//  console.log(remainingnumber);//[ 2, 3 ]


//*****************************************************update aaray*******************************************
let remainingnumber = arraynumber.map(data => data === 2 ? 30 : data)
console.log(remainingnumber);//[ 1, 30, 3 ]

//********************sorting the array of object on basis of any field or property************************************** */

let employees = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 27,
    joinedDate: 'December 15, 2017'
  },

  {
    firstName: 'Ana',
    lastName: 'Rosy',
    age: 45,
    joinedDate: 'January 15, 2019'
  },

  {
    firstName: 'Zion',
    lastName: 'Albert',
    age: 30,
    joinedDate: 'February 15, 2011'
  }
];

//employees.sort((a,b)=>{ return a.age - b.age }) ;

//****************************every() and some()******************************************************** **************************/


//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. Array.prototype.every
//every()  each object pe condition check kartha and true false rerurn kaerta

//let opl=employees.every(data=>data.age<56);// true

//let opl=employees.every(data=>data.age>27);// false //sare obj ke age 27 se bada to nahi hai, so false



//some() will just check the condition and if one object pe condition true or match hua to wo phir remaining obj pe condition check nahi karega;
//some() will not match condition on all object , jaise hi ak bhi obj pe match hua wo wahi stop ho jayega and result de dega and remaining pe check  nahi karega


//let opl=employees.some(data=>data.age>100); //false


//let opl=employees.some(data=> data.age<28); //true // jaise hi ak bhi obj pe condition  match hua,to wo phir loop wahi stop ho jasyega and other obj pe check nahi karega


// *****************************difference between undefine and not define*************************************************

// undefined : variable is declared but value is not assign;
// not defined : variable is not declared;(if koi varible declare nahi kiya and direct usko conlole log kiya to wo not define karke aayega)


// ***************************************************************************************


//***********************************basic concept**********************************************************************************/

//filter or map array obj return karta ,for that  memory jyda lagta rather than boolean ;

//some(),every() ->boolean return karta  ,for boolean memory  less lagta than array obj;

//so in case have to choose over filter() map() every() some()  ,try to choose some(), every() as acquire less memory;


//**************************shallow copy and deep copy******************spread operator deep copy karta ************************************************ */


//https://dev.to/edwardluu/understanding-deep-and-shallow-copy-in-javascript-4im0  ----->  best  imp link(deep and shalow)

//https://stackabuse.com/spread-operator-in-javascript/  ----------------------------------->spread operator 

//https://www.geeksforgeeks.org/what-is-shallow-copy-and-deep-copy-in-javascript/  ----------->deep and shallow



// var ob1={"name":"prem","id":56}

//  let ob2=ob1;  //this is the shallow copy //here reference copy hua 

// ob2.name="shyam";


// console.log("ob1",ob1);//shyam

// console.log("ob2",ob2);//shyam



var ob1 = { "name": "prem", "id": 56 };

//first way

//let ob2=JSON.parse(JSON.stringify(ob1)); //deep copy //yaha ham reference nahi balki complete new obj rakh rahe hai //json parse new obj deta

//second way

//let ob2={...ob1} //deep cope ////yaha ham reference nahi balki complete new obj rakh rahe hai //  spread operator se new obj milta

//third way

let ob2 = Object.assign({}, ob1); //deep cope ////yaha ham reference nahi balki complete new obj rakh rahe hai 
ob2.name = "shyam"
console.log("ob1:", ob1);//prem
console.log("ob2:", ob2);//shyam

//***********************************Object copy*****************************************************************************/

//three ways:-> spread opretor, Object.assign, Json.parse->is se kaya hota ki real obj change nahi hota if copied obj ke koi prop pe kuch change kiya to,in short it is deep copy

//direct one object ke ref ko other ke ref ke equal // var ob1={"name":"prem","id":56}; let ob2=ob1;  //this is the shallow copy //here reference copy hua 


//************************************************************************************************************** */


//***********************filter() and map() with two parameter************************************************************** */



//---->filter as per condition (let 20 object hai and 20 se hame 10 chahiye to we can do easily);
//----> In filter: Function will be applied to only those objects of iterable who goes True on the condition specified in expression.


// let val=employees.filter((data,i)=>{
// data.index=i;
// if(data.index==1){
//   return data;
// }
// })

// console.log("val for filter is:",val); // we will get output obj whose index=1;as In filter: Function will be applied to only those objects of iterable who goes True on the condition specified in expression.


//**************************MAP()*************************************************************************************** */


//map me condition laga ke kuch phyada nahi ,Q ki map me all object iterate , so jjahaa condition false usme undefine aayega

//In map: Function will be applied to all objects of iterable.

let val1 = employees.map((data, i) => {

  data.index = i;
  if (data.index < 2) {
    return data.firstName;
  }
})

console.log("val1 for map is:", val1); //[ 'John', 'Ana', undefined ] ,//we get last obj as undefine because In map: Function will be applied to all objects of iterable( yaha condition bhi lagay to bhi all object ko iterate karega and jaha condition false uska output undefine aata)



//*********************************jb array of object se only n number of object ka koi ak field ( 30 object se sirf 10 hi display)  display ,than use slice*/

//https://www.programiz.com/javascript/library/array/slice

//https://www.w3schools.com/jsref/jsref_slice_array.asp

let topfiveobjectname = employees.slice(0, 2).map(data => data.firstName);;

console.log("top two:", topfiveobjectname)

//*********************************giving space between two string****************************************** ********************/

let first = "Hare";
let second = "krishana";

let third = first + "" + second;

//console.log(third) //Harekrishana


let fourth = first + " " + second;

//console.log(fourth);//Hare krishana


//******************************************************************************************************************************* */

//********************* join()********************************************************************************************/

const elements = ['Fire', 'Air', 'Water'];

//console.log(elements.join());//output: Fire,Air,Water
//console.log(elements.join(''));//output: FireAirWater
//console.log(elements.join('-'));//output: Fire-Air-Water

//**************************if return data nahi karenge to blank matlb empty array milega********************************************************************************* */

let agesss = employees.filter(data => {

  if (data.age > 10) {
    data.age = 34;
  }
  return data; //if yaha return data nahi likhenge to cosole me blank yani emplty data aayega;
})
console.log("hey prem:", agesss)
//********************************************************************************************************* */
var datas = {
  'Country1': '20',
  'country2': '30',
  'country3': '40',
  'country4': '45'
};
var result = [];
Object.keys(datas).forEach(key => {
  result.push({ 'name': key, 'value': datas[key] });

});
//console.log(result);
//************************************************************************************************************* */


//*******************JSON.stringify and  JSON.parse*********************************************************** */

var testObject = { one: 1, "two": 2, "three": 3 };

var jSonString = JSON.stringify(testObject);

var obj2 = JSON.parse(jSonString);

console.log(obj2);

//*******************jo obj copy usi ke koi prop ko again add karenge to wo add nahi balki overwrite hoga,ha jo prop copied obj me nahi hai wo add karenge to add hoga*/


let prem = {
  age: 12,
  name: "prem"
}

let sonu = { ...prem, age: 13, name: "himanshu", god: "jay ma kali" };
console.log("sonu object outout:", sonu); //sonu object outout: { age: 13, name: 'himanshu', god: 'jay ma kali' }

console.log("prem object outout:", prem); //prem object outout: { age: 12, name: 'prem' }

let cart = []
const product = {
  a: "rtyu",
  b: "yui"
}

cart.push({ ...product, count: 1 });
console.log(cart) //[ { a: 'rtyu', b: 'yui', count: 1 } ] ,count prop add ho gay isme


const loader = () => {

  console.log("hide loader");
}
const done = () => {

  console.log("done");
}
const getData = (cb) => {
  setTimeout(() => {
    console.log("data has been fetched");
    cb();

  }, 2000)

}

getData(loader);
//loader();
let name = {

  firstname: "prem",
  lastname: "jha"
}

let printFullName = function (city, street) {

  console.log(this.firstname + " " + this.lastname + " " + "from" + " " + city + " ," + street)
};

printFullName.call(name, "mumbai", "kharghar");//prem jha from mumbai ,kharghar


// let num = '123';
//   let num1= [...num];
//   console.log('hii', [...num]);
//   let revarr = [];

//   for (var i = 2; i <= num1.length; i--) {
//     revarr.push(num1[i]);
//     //console.log('hii', revarr);
//   }
//   console.log('hii', revarr);

const candidateData = [
  {
    "id": 11, "name": "Ash", "department": "Finance", "joining_date": 8 / 10 / 2016
  },
  { "id": 12, "name": "John", "department": "HR", "joining_date": 18 / 1 / 2011 },
  { "id": 13, "name": "Zuri", "department": "Operations", "joining_date": 28 / 11 / 2019 },
  { "id": 14, "name": "Vish", "department": "Development", "joining_date": 7 / 7 / 2017 },
  { "id": 15, "name": "Barry", "department": "Operations", "joining_date": 19 / 8 / 2014 },
  { "id": 16, "name": "Ady", "department": "Finance", "joining_date": 5 / 10 / 2014 },
  { "id": 17, "name": "Gare", "department": "Development", "joining_date": 6 / 4 / 2014 },
  { "id": 18, "name": "Hola", "department": "Development", "joining_date": 8 / 12 / 2010 },
  { "id": 19, "name": "Ola", "department": "HR", "joining_date": 7 / 5 / 2011 },
  { "id": 20, "name": "Kim", "department": "Finance", "joining_date": 20 / 10 / 2010 }
]
let raaamu = candidateData.filter(data => data.department !== 'Development');
console.log(raaamu);
let rmdup = [];

candidateData.filter(data => {
  //count=0;
  if (rmdup.indexOf(data.department) === -1) {
    rmdup.push(data.department);
  };
});
for (var i = 0; i < rmdup.length; i++) {
  let counts = 0;
  candidateData.filter(data => {
    if (rmdup[i] == data.department) {
      counts = counts + 1;
    }

  })
  console.log("name  count-->", rmdup[i], counts)
}

console.log("distinct====>", rmdup);
//search by name(

//passign array as parameter
// const premarray=[1,2,3,4];
// function prems(...abc){


//   let rams=abc;
//   console.log(rams);
// }
// prems(...premarray);

// var arrA=[1];
// var arrB=[];
// arrB=arrA;

// arrB.push(2);
// console.log(arrA);

// const arrA=[1];
// const arrB=[];
// arrB=arrA;      //Assignment to constant variable is not ...

// arrB.push(2);
// console.log(arrA);



// function Person() {

//   this.name = 'Jack',
//   this.age = 25,
//   this.sayName = ()=>{

//       console.log(this.age);

//       let innerFunc =function () {
//           console.log(this.age);

//             console.log(this);
//       }

//       innerFunc();
//   }
// }
// const x = new Person();
// x.sayName();


// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

//console.log(i)
//for (var i = 0; i < 5; i++) {
// setTimeout(() => {
//console.log(i);
//}, 1000);
//}
// var arrays = [1, 2, 3, 4, 5]
// for(let i = 0; i < arrays.length; i++) {
//   setTimeout(() => {
//     console.log(arrays[i])
//   }, 1000);
// }

// let mohan;
// console.log(mohan);
// var sohan;
// console.log(sohan);
// const amu;
// console.log(amu)

//Balance parenthesis
// let isMatchingBrackets = function (str) {
//   let stack = [];
//   let map = {
//       '(': ')',
//       '[': ']',
//       '{': '}'
//   }

//   for (let i = 0; i < str.length; i++) {

//       // If character is an opening brace add it to a stack
//       if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
//           stack.push(str[i]);
//       }
//       //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
//       else {
//           let last = stack.pop();

//           //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
//           if (str[i] !== map[last]) {return false};
//       }
//   }
//   // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
//       if (stack.length !== 0) {return false};

//   return true;
// }

// console.log(isMatchingBrackets("(){}")); // returns true
// console.log(isMatchingBrackets("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")); // returns true
// console.log(isMatchingBrackets("({(()))}}"));  // returns false

// function outer(){
//   let a=5;
//   function inner(){
//   let b=10;
//   console.log(a);
//   }
//   inner()

//   }
//   outer();

//1.How do you count the occurrence of a given character in a string?

// let charcount=Array.from("abbcdef");
// //let charcount="abbcdef";
//  let count=0;
// let coutChar=(value)=>{
//   charcount.forEach(data=>{
//     console.log("this is separate char in given------>",data);
//     if(data==value){
//       count=count+1
//     }
//   })
// console.log("count of given char is-->",count)
// return count;
// }
// coutChar('b')

//let charcount=Array.from("abbcdef");
let charcount = "abbcdefbb";
let count = 0;
let coutChar = (value) => {
  charcount.split('').forEach(data => {
    console.log("this is separate char in given------>", data);
    if (data == value) {
      count = count + 1
    }
  })
  console.log("count of given char is-->", count)
  return count;
}
coutChar('b')
console.log(charcount.length)

//2. find all permutations of a string?

//prem-> ka total way wo 4!->
let findPermutations = (string) => {
  if (!string || typeof string !== "string") {
    return "Please enter a string"
  } else if (string.length < 2) {
    return string
  }

  // This array will hold our permutations
  let permutationsArray = []

  for (let i = 0; i < string.length; i++) {
    let char = string[i]
    console.log("char is -->", char)
    // if char was used already, skip this time to remove duplicates
    if (string.indexOf(char) != i)
      continue


    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
    console.log("remain--->", remainingChars);


    for (let permutation of findPermutations(remainingChars)) {
      permutationsArray.push(char + permutation)
    }
  }
  console.log("premutatio--->", permutationsArray)
  return permutationsArray
}


//console.log(findPermutations('pre'))
findPermutations('pre')

//3.reverse words in a given sentence //This is Mumbai;

let sentences = "my name is prem";
let sentensesarray = sentences.split(" ");
let reversesentense = [];
//console.log("legth of name",sentensesarray)
for (let i = sentensesarray.length - 1; i >= 0; i--) {
  reversesentense.push(sentensesarray[i]);
}
//console.log("reversed name is --->",reversesentense.join(' '));

//4.reverse string
let nameprem = "prem";
let reversename = "";
let namearray = nameprem.split('');
//console.log("legth of name",namearray);
for (let i = namearray.length - 1; i >= 0; i--) {
  reversename += namearray[i]
}
//console.log(reversename)

//5. duplicate characters in a string

let dupstr = "aman";
let removdup = [];
let dupdata = []; //duplicate variable;
let dupstrarray = dupstr.split('');
dupstrarray.filter(data => {
  if (removdup.indexOf(data) == -1) {
    removdup.push(data)
  } else {
    dupdata.push(data)
  }
})
//console.log(removdup)
//console.log(dupdata)

//6.check if two strings are anagrams(Brush = shrub,Dictionary = indicatory,) of each other

let str22 = "prem";

let str22split = str22.toLowerCase().split('');

let str33 = "abhi";
// str22.split('').some(data=>{
//   console.log(data);

// })
let result23 = [];

for (let i = 0; i <= str33.length - 1; i++) {
  if (str33.toLowerCase().includes(str22split[i])) {
    //console.log(" it is anagram");
  } else {
    //console.log("yes it is Not anagram");
    result23.push('false');
    //return false
  }
}
if (result23.length == 0) {
  console.log("it is anagram");
} else {
  // console.log("it is Not anagram");
}


//7.check if a given string is a palindrome

let checkPalindrome = (str) => {

  for (let i = 0; i < str.length / 2 - 1; i++) {
    //console.log("from start end---->",str[str.length-(i+1)]);
    // console.log("from end--->",str[i]);
    if (str[str.length - (i + 1)] == str[i]) {
      //console.log("it is palindrome")
      return 'it is a palindrome number'
    } else {
      //console.log("it is not palindrome")
      return 'It is Not a palindrome'
    }
  }
}
let value = checkPalindrome("hellow")
//console.log(value) 

//8.check if two strings are a rotation of each other || Check if strings are rotations of each other or not 

// One of the simplest solutions to this interesting problem is first to check if two String has the same length, 
// if not then one String cannot be the rotation of another.
//  If they are of the same length then just create another String by concatenating first String with itself
//   now check if second String is a substring of this concatenated String or not, if yes, the second String is a rotation of first.

let checkRotation = (str1, str2) => {

  let str3 = str1 + str2;

  if (str1.length != str2.length) {

    return 'Second string is not a rotation of first string';

  } else if (str1.length == str2.length && str3.includes(str2)) {

    return 'Second string is  a rotation of first string'
  } else {
    return 'Second string is not a rotation of first string'
  }
}
//ACBD is not a rotated form of ABCD
let outputofisrotation = checkRotation('CDAB', 'ACBD');
//console.log(outputofisrotation)


//9.How do find the occurence of a string in a sentences? use all ways like split(),filter,for loop, .... Regx and normal method

let stringOccurenceInSentence = () => {
  let sentences = "Hi prem How are you , you got call from brother and you have a."
  let youcountsplit = sentences.split(' ');
  let youcount = youcountsplit.filter(data => data == 'you').length;
  //console.log("it is count of you using split",youcount);
  //below ia using regx
  const re = new RegExp('you', 'g');
  //const re = new RegExp('e', 'g'); ///count of a char in string sentences
  let youcount1 = sentences.match(re).length
  console.log("it is count of you using regx", youcount1)
}

stringOccurenceInSentence();

//9.How do find the occurence of a character in a string? use all ways like split(),filter,for loop, .... Regx and normal metho

//---->same as above

//9.How do you check if a string contains only digits?

let stringOnlyDigit = (str) => {

  let strsplit = str.split('');
  for (let i = 0; i <= str.length - 1; i++) {
    if (strsplit[i] == '0' && '1' && '2' && '3' && '4' && '5' & '6' && '7' && '8' && '9') {
      return 'this string contain only digit';
    } else {
      return 'this string does not contain only digit';
    }
  }
}
let resultofstringonly = stringOnlyDigit('123pre67m');
//console.log(resultofstringonly);

//10 How to find the maximum occurring character in given String ???????????

var maxstring = "hellowww";
let max = 0;
let max1 = "";
var maxcount = maxstring.split('');
var maxcountcharArray = [];
//console.log(maxcount);
let removedupcharount = [];
let removedupcharount1 = [];
for (let i = 0; i <= maxcount.length - 1; i++) {
  let countmaxchar = 0;
  for (let j = 0; j <= maxcount.length - 1; j++) {

    if (maxcount[i] == maxcount[j]) {
      countmaxchar = countmaxchar + 1
    }
  }
  maxcountcharArray.push({ "char": maxcount[i], "count": countmaxchar })


  countmaxchar = 0;
}
//console.log(maxcountcharArray);
for (let i = 0; i <= maxcountcharArray.length - 1; i++) {
  if (removedupcharount.indexOf(maxcountcharArray[i]['char']) == -1) {
    removedupcharount.push(maxcountcharArray[i].char);
    removedupcharount1.push(maxcountcharArray[i]);
  }
}

//console.log("hiii->",removedupcharount);
//console.log("hiii->",removedupcharount1);
removedupcharount1.forEach((data) => {
  if (data.count > max) {
    max = data.count; //it will give max count
    max1 = data.char; // it will give char of max count;
  }
});
//console.log(max); //3
//console.log(max1);//w


//11.How to convert a byte array to String? //https://programmingwithswift.com/how-to-convert-byte-array-to-string-with-javascript/

//-->https://stackoverflow.com/questions/3195865/converting-byte-array-to-string-in-javascript

//12.How do you print the first Repeated and first non-repeated character from a string 

//13.How do you convert String to an integer? {parseInt...}

//14.How to convert Integer to Roman String? and roman to integer?

//15.How do you find the longest palindromic substring of a given substring? //Given string str, How do you find the longest palindromic substring in str? 

//16.How do you check  valid parentheses/balance parenthesis? 

//17.How do you count the number of words in SENTENCES/string? 

//18.How do you find all the permutations of a string?


//19. Pattern Matching problem (do by both regx expresion and without regx) -->https://www.techiedelight.com/introduction-pattern-matching/
//Pattern Matching-->https://www.geeksforgeeks.org/finite-automata-algorithm-for-pattern-searching/

//20.Number to word conversion -->https://www.techiedelight.com/c-program-convert-number-to-words/

//21. find the longest common prefix among all strings present in the array.

//22. how to find Closest Strings or Minimum Distance Between Words of a String -->

//closest string -->https://practice.geeksforgeeks.org/problems/closest-strings0611/1/
//Minimum Distance Between Words of a String --->https://www.geeksforgeeks.org/minimum-distance-between-words-of-a-string/

//23.how to check Pangram ? -->

//24.How to find the maximum occurring character in given String ?

//A pangram is a sentence or expression that uses all the letters of the alphabet



//Now satrt Array program practice and go with LinkList.

