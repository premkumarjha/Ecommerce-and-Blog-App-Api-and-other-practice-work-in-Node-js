const { json } = require("express");

 let array=[
   {id:1,name:"prem"},
   {id:2,name:"ram"},
   {id:3,name:"mohan"},
   {id:4,name:"aman"},
   {id:5,name:"prem"},

 ]
 
//duplicate ka sum bas 

let output=array.map(data=>data.name);


let sum=0;
let ele=array.map(data=>data.id);
console.log(ele);
let ygj=[1,2,3,4]
for(i=0;i<array.length;i++){
sum=sum + ele[i];

}
console.log(sum)
let add=0;
array.forEach(data=>{
add=add+data.id
})
console.log("hi add=",add)


//

let dtc=[

{name:"prem",age:12,degree:"12th"},
{name:"prem",age:12,degree:"10th"},
{name:"prem",age:10,degree:"B.E"},
{name:"sonu",age:16,degree:"10th"},
{name:"sonu",age:19,degree:"10th"},
{name:"sonu",age:12,degree:"B.E"},
{name:"amit",age:17,degree:"12th"},
{name:"amit",age:17,degree:"10th"},
{name:"mohan",age:17,degree:"B.E"},
{name:"rohan",age:12,degree:"12th"},
{name:"sohan",age:12,degree:"10th"},
{name:"ramesh",age:10,degree:"B.E"},
{name:"tyagi",age:16,degree:"10th"},
{name:"somesh",age:19,degree:"10th"},

]

const uniqueAddresses = Array.from(new Set(dtc.map(data=>data.name))).map(name => {
  return dtc.find(a => a.name === name );

});

//aise kitne prem hai in dtc jinke  name prem and age 12,aise sonu in dtc jinke name sonu and age 10 hai
uniqueAddresses.forEach(abc=>{
 const leng= dtc.filter(data=>data.name==abc.name && data.age==abc.age ).length;
 console.log(`length of ${abc.name} is`,leng)
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



let morethanonefield=dtc.map(data=>{
  return { "name":data.name,"degree":data.degree}
});

console.log("more than one field:",morethanonefield);

//now dtc me se only wo  name ka object chahiye jiska name  below arrys me present  hai;
let arrys=["amit","sohan","somesh"];

let indexss=dtc.filter(data=>arrys.indexOf(data.name)>-1)

//let indexss=dtc.filter(data=>true)

console.log("hellow:",indexss)


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
  return objectArray.reduce( (accumulator, currentObject) =>{  
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
let uniqueAgeGroup = ageGroup.reduce( (accumulator, currentValue)=> {   //here accumulato ka initial value=>[]
  if (accumulator.indexOf(currentValue) === -1) {       
    accumulator.push(currentValue);         
  }
  return accumulator;
}, []);

console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]

 

//shows how many times each string appears in the array.

var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce((obj, pet)=>{   
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

let ab=9;
let ob={};
ob[ab]=3;
ob["ab"]=90;
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

let unqarr=[];

arr.filter(data=>{
  
  if(unqarr.filter(d => d.id == data.id).length == 0){
    unqarr.push(data);
  }
})
//a={b:"rma"}, c={b:"ram"},a,c is reference of object not the actual object so a and c are not same;
//console.log(unqarr);

// to remove duplicate************************************************************

arr.forEach(data=>{
  
  if(unqarr.filter(d => d.id == data.id).length == 0){
    unqarr.push(data);
  }
})
//a={b:"rma"}, c={b:"ram"},a,c is reference of object not the actual object so a and c are not same;

//to remove duplicate****************************************************************

arr.forEach(data=>{
  
  if(unqarr.filter(d => d.id == data.id).length == 0){
    unqarr.push(data);
  }else{
    return unqarr
  }
})
//a={b:"rma"}, c={b:"ram"},a,c is reference of object not the actual object so a and c are not same;
//console.log(unqarr)


//to remove duplicate*******************************************************

let distinctArrayObject = arr.reduce( (accumulator, currentValue)=> {   //here accumulato ka initial value=>[]
  if (accumulator.filter(data=>data.id==currentValue.id).length==0) {       
    accumulator.push(currentValue);         
  }
  return accumulator;
}, []);

//console.log(distinctArrayObject)
//********************************************************SPREAD OPERATOR ->updating object using spread operator******************************************************************* *//

//spread operator and object.assign ye sab just object copy ke liye use hota..

let object={a:"b",

          address:{
          country:"india",
          city:"fghj"
          }

};
const updatedobject={...object,a:"v",address:{...object.address},city:"abc"};

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
 let remainingnumber=arraynumber.map(data=>data===2 ? 30 : data)
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



var ob1={"name":"prem","id":56};

//first way

//let ob2=JSON.parse(JSON.stringify(ob1)); //deep copy //yaha ham reference nahi balki complete new obj rakh rahe hai //json parse new obj deta

//second way

//let ob2={...ob1} //deep cope ////yaha ham reference nahi balki complete new obj rakh rahe hai //  spread operator se new obj milta

//third way

let ob2=Object.assign({},ob1); //deep cope ////yaha ham reference nahi balki complete new obj rakh rahe hai 
ob2.name="shyam"
console.log("ob1:",ob1);//prem
console.log("ob2:",ob2);//shyam

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

let val1=employees.map((data,i)=>{

  data.index=i;
  if(data.index <2){ 
    return data.firstName;
  }
})

console.log("val1 for map is:",val1); //[ 'John', 'Ana', undefined ] ,//we get last obj as undefine because In map: Function will be applied to all objects of iterable( yaha condition bhi lagay to bhi all object ko iterate karega and jaha condition false uska output undefine aata)



//*********************************jb array of object se only n number of object ka koi ak field ( 30 object se sirf 10 hi display)  display ,than use slice*/

//https://www.programiz.com/javascript/library/array/slice

//https://www.w3schools.com/jsref/jsref_slice_array.asp

let topfiveobjectname=employees.slice(0,2).map(data=>data.firstName);;

console.log("top two:",topfiveobjectname)

//*********************************giving space between two string****************************************** ********************/

let first="Hare";
let second="krishana";

let third=first + "" + second;

//console.log(third) //Harekrishana


let fourth=first + " " + second;

//console.log(fourth);//Hare krishana


//******************************************************************************************************************************* */

//********************* join()********************************************************************************************/

const elements = ['Fire', 'Air', 'Water'];

//console.log(elements.join());//output: Fire,Air,Water
//console.log(elements.join(''));//output: FireAirWater
//console.log(elements.join('-'));//output: Fire-Air-Water

//**************************if return data nahi karenge to blank matlb empty array milega********************************************************************************* */

let agesss=employees.filter(data=>{

  if(data.age>10){
    data.age=34;
  }
return data; //if yaha return data nahi likhenge to cosole me blank yani emplty data aayega;
})
console.log("hey prem:",agesss)
//********************************************************************************************************* */
var datas = {
  'Country1' : '20',
  'country2': '30',
  'country3': '40',
  'country4' : '45'
};
var result = [];
Object.keys(datas).forEach(key => {
  result.push({'name':key,'value':datas[key]});
  
});
//console.log(result);
//************************************************************************************************************* */


//*******************JSON.stringify and  JSON.parse*********************************************************** */

var testObject = {one: 1,"two":2,"three":3};

var jSonString = JSON.stringify(testObject);

var obj2 =JSON.parse(jSonString);

console.log(obj2);

//*******************jo obj copy usi ke koi prop ko again add karenge to wo add nahi balki overwrite hoga,ha jo prop copied obj me nahi hai wo add karenge to add hoga*/


let prem={
  age:12,
  name:"prem"
}

let sonu={...prem,age:13,name:"himanshu" ,god:"jay ma kali"};
console.log("sonu object outout:",sonu); //sonu object outout: { age: 13, name: 'himanshu', god: 'jay ma kali' }

console.log("prem object outout:",prem); //prem object outout: { age: 12, name: 'prem' }

