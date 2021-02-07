// function prem(){
// var a=8;
// console.log(a)
// }
// //console.log(a)
// prem();

// const register= (user)=>{

//     console.log(user)
// }
// register("prem");
//let arr=[];

  

//   a = [
// 	{name: "prem",id:2},
// 	{name:"sonu",id:3},
// 	{name:"ram",id:4},
// 	{name:"mohan",id:9},
// ];


//firstArray = a.map(v => v.name)
//secondArray = a.map(v => {return {name : v.name}})

//secondArray = a.map(v => {return { name:v.name}})
//console.log(secondArray)
//firstArray = a.filter(v => v.name)
//firstfilter = a.filter(v =>{return {name:v.name}} );
//console.log(firstfilter)
// let cars = [
//   {
//     "color": "purple",
//     "type": "minivan",
//     "registration": new Date('2017-01-03'),
//     "capacity": 7
//   },
//   {
//     "color": "red",
//     "type": "station wagon",
//     "registration": new Date('2018-03-03'),
//     "capacity": 5
//   },
// ]

// cars.forEach(car => {
// 	// car['size'] = "large";

// 	// if (car.capacity <= 5){
// 	//   car['size'] = "medium";
// 	//   return car['size']
// 	// }
// 	// if (car.capacity <= 3){
// 	//   car['size'] = "small";
// 	//   return a
// 	// }
// 	car['size']="large"
//    });
//    console.log(cars)
let time=14

let hrs;
let min;
let sec;

const countelement=document.getElementById('time');


let interval = setInterval(() => {
  updatetimer();
  if(hrs=="0" && min=="0" && sec=="0"){
    clearInterval(interval);
    alert("your time has been completed")
  }
}, 1000);
function updatetimer(){

 hrs=Math.floor(time/3600);
 reminderofhrs=(time%3600);
 min=Math.floor(reminderofhrs/60);
 sec=(reminderofhrs%60)
countelement.innerHTML=`${hrs}:${min}:${sec}`
time--;

}