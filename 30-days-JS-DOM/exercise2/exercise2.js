// 1

let allPByQuerySelector = document.querySelectorAll("p");

let p1 = allPByQuerySelector[0];

p1.style.color = "red";
p1.style.background = "blue";
p1.style.border = "1px solid green";
p1.style.fontSize = "2rem";
p1.style.fontFamily = "Arial";

let p2 = allPByQuerySelector[1];

p2.style.color = "yellow";
p2.style.background = "green";
p2.style.border = "1px solid black";
p2.style.fontSize = "4rem";
p2.style.fontFamily = "Arial";

let p3 = allPByQuerySelector[2];

p3.style.color = "blue";
p3.style.background = "grey";
p3.style.border = "1px solid red";
p3.style.fontSize = "1rem";
p3.style.fontFamily = "Arial";

let p4 = allPByQuerySelector[3];

p4.style.color = "green";
p4.style.background = "red";
p4.style.border = "1px solid yellow";
p4.style.fontSize = "5rem";
p4.style.fontFamily = "Arial";

// 2

allPByQuerySelector.forEach((p) => {
  if (p.id === "p1" || p.id === "p3") {
    p.style.color = "green";
  } else {
    p.style.color = "red";
  }
});


// 3

p1.textContent = "p1";
p1.className = "classP1";

p2.textContent = "p2";
p2.className = "classP2";

p3.textContent = "p3";
p3.className = "classP3";

p4.textContent = "p4";
p4.className = "classP4";