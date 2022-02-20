// Styles h1
/* JS Object
https://stackoverflow.com/questions/40426862/change-element-style-with-javascript-object
Ejm: Copia todos los ENUMRABLE props al elemento "yourelement.style"
Object.assign(yourelement.style,{fontsize:"12px",left:"200px",top:"100px"});

Otra forma:

var el = document.getElementById('#myElement'),
    let css = {
      font-size: '12px',
      left: '200px',
      top: '100px'
    };  

for(let i in css){
  el.style[i] = css[i];
}

*/

/* String 
https://stackoverflow.com/questions/3968593/how-can-i-set-multiple-css-styles-in-javascript
*/

let wrapperCss = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

for (let typeStyle in wrapperCss) {
  document.querySelector(".wrapper").style[typeStyle] = wrapperCss[typeStyle];
}

// ****************************************

// 1

let h1 = document.querySelector("h1");

h1.style.cssText = `
  fontWeight: bold; 
`;

// logic

let year = h1.textContent.match("2020");
let spanYear = document.createElement("span");

spanYear.innerHTML = year;

let spanYearCss = {
  fontSize: "5rem",
};

for (let typeStyle in spanYearCss) {
  spanYear.style[typeStyle] = spanYearCss[typeStyle];
}

h1.textContent = h1.textContent.split("2020")[0];

h1.appendChild(spanYear);

function getRandomColor() {
  var letters = "ABCDEF0123456789";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

window.setInterval(() => {
  spanYear.style.color = getRandomColor();
}, 1000);

// **************************

// 2

let optionsDate = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

let h3Date = document.createElement("h3");

// Insert h3 before <ul>
document
  .querySelector(".wrapper")
  .insertBefore(h3Date, document.querySelector(".wrapper").children[2]);

window.setInterval(() => {
  h3Date.innerHTML = new Date().toLocaleTimeString("en-US", optionsDate);

  h3Date.style.backgroundColor = getRandomColor();
}, 1000);

// **************************

// 3
[...document.querySelectorAll("li")]
  .filter((li) => li.textContent.includes("Done"))
  .map((li) => {
    li.style.backgroundColor = "green";
    return li;
  });

[...document.querySelectorAll("li")]
  .filter((li) => li.textContent.includes("Ongoing"))
  .map((li) => {
    li.style.backgroundColor = "yellow";
    return li;
  });

[...document.querySelectorAll("li")]
  .filter((li) => li.textContent.includes("Coming"))
  .map((li) => {
    li.style.backgroundColor = "red";
    return li;
  });
