// function foo() {
// 	console.log( a ); 
// }

// function bar() {
// 	var a = 3;
// 	foo();
// }

// var a = 2;

// bar();

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))