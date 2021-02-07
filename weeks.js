
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


