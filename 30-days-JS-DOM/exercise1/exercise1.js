
// 1

let firstPQuerySelector = document.querySelector("p");

console.log(firstPQuerySelector);

let firstPTagName = document.getElementsByTagName("p")[0];

console.log(firstPTagName);

// 2

let p1,p2,p3,p4;

p1 = document.querySelector("#p1");
p2 = document.querySelector("#p2");
p3 = document.querySelector("#p3");
p4 = document.querySelector("#p4");

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

p1 = document.getElementById("p1");
p2 = document.getElementById("p2");
p3 = document.getElementById("p3");
p4 = document.getElementById("p4");

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

// 3

// get a nodeList
let allPByQuerySelector = document.querySelectorAll("p");

console.log(allPByQuerySelector);

// HTMLCollection
let allPByTagName = document.getElementsByTagName("p");

console.log(allPByTagName);


// 4

let allTextFromP = [];
// Using foreach NodeList
allPByQuerySelector.forEach(p => {
  allTextFromP.push(p.textContent);
});

console.log(allTextFromP);

// Using ES6 spread operator
allTextFromP = [...allPByQuerySelector].map(p => p.textContent);

console.log(allTextFromP);

// 5

let fourthP = allPByQuerySelector[3];
fourthP.textContent = "Fourth Paragraph";

console.log(fourthP);

// 6

// https://www.w3schools.com/jsref/met_node_clonenode.asp
let copyFourthP = fourthP.cloneNode(true);

// Using directly attribute name
copyFourthP.className = "pFourth";
copyFourthP.id = "p4Id";

console.log(copyFourthP);

// using setAttribute() and classList

let copyFourthP2 = fourthP.cloneNode(true);

copyFourthP2.classList.add("pFourth2", "otherClass");
copyFourthP2.setAttribute("id", "p4Id2");

console.log(copyFourthP2);