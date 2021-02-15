
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
{name:"amit",age:17,degree:"B.E"},

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

