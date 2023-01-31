/*
function handleclick(){
  alert('hello world')
}

function handleinput(){
  alert("key information")
}

function handleinput(a, b){
  alert(a + b)
}
*/

//  var a = 5;

//  try {
//   console.log(b + 1)
// } catch (error) {
//   console.log(error)
// }

// console.log("hello")

// //another example
//  var a = 5;

//  try {
//   console.log("http://facebook.com")
// } catch (error) {
//   console.log(error)
// }

// console.log("hello")

// //another example
//  var a;

//  try {
//   console.log("")
// } catch (error) {
//   console.log(error)
// }

// console.log("hello")

/*
 EVENT IN JAVASCRIPT
event is an action that happans at a particular time on the webpage. There are 3 ways
of applying events to code 
1. specify directly as an attribute on the HTML element
2. one can use "Add event listener"
3. the Dom method.

 COMMON JS EVENT
1. onclick
2. onmouseover
3. onmouseenter
4. onmouseleave
5. ondoubleclick
6. onkeyup
7. onkeydown
8. onchange

SELECTOR IN JS
1. document.getElementById("test")
2. document.getElementsByClassName("top")
3. document.querySelector("button")
4. document.querySelectorall
5. document.getElementsByName
6. document.getElementsByTagName

*/

/*
*example
function handleclick(){
  return "hello"
}

esn, lastest version
const handleclick1 = () => "hello"
console.log(handleclick())

*/

document.getElementById("btn").onclick = () => alert("hello")