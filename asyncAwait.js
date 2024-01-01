//practice Async await and promises and promises.all()
import fetch from "node-fetch";

const first = () => {
  console.log("I am first");
};
// const second = () => {
//  const output= fetch('https://jsonplaceholder.typicode.com/todos/1')
//  output.then(data=>data.json()).then(data=>console.log(data))
// };

const second = async () => {
  const output = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const output1 = await output.json();
  console.log(output1);
};
const third = () => {
  console.log("I am third");
};

// first();
// second();
// third();

async function main() {
  first();
  await second();
  third();
}
//main();


//promises and promises all and promises .any   practice.







