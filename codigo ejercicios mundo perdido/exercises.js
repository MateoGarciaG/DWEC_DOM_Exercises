let divSite = document.querySelector(".site");

// Exercise 1

let divResults = document.createElement("div");
let ul = document.createElement("ul");

ul.style.padding = "3rem";

divResults.appendChild(ul);

for (let i = 0; i < 7; i++) {
  let li = document.createElement("li");
  ul.appendChild(li);
}

ul.children[0].innerHTML = "Nombre d'enllaços de la pàgina: ";
ul.children[1].innerHTML = "Nombre de paràgrafs de la pàgina: ";
ul.children[2].innerHTML = "Adreça a la qual enllaça el penúltim enllaç: ";
ul.children[3].innerHTML = "Adreça a la qual enllaça el darrer enllaç: ";
ul.children[4].innerHTML =
  "Número d'enllaços que enllacen a http://www.jurassicpark.com : ";
ul.children[5].innerHTML = "Nombre d'enllaços de tots els paràgrafs: ";

divSite.insertBefore(divResults, divSite.children[1]);

ul.children[0].innerHTML += document.querySelectorAll("a").length;

ul.children[1].innerHTML += document.querySelectorAll("p").length;

ul.children[2].innerHTML += document.querySelector(
  "a[href='http://penultimo_enlace.html']"
);

ul.children[3].innerHTML += document.querySelector(
  "a[href='http://ultimo_enlace.html']"
);

ul.children[4].innerHTML += document.querySelectorAll(
  "a[href='http://www.jurassicpark.com']"
).length;

// https://www.javascripttutorial.net/es-next/javascript-array-flatmap/
ul.children[5].innerHTML += [...document.querySelectorAll("p")].flatMap((p) => [
  ...p.querySelectorAll("a"),
]).length;

// Exercise 3. Create Table

const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

let divTable = document.querySelector("#mountains");
let table = document.createElement("table");

// STYLES TABLE
divTable.style.padding = "3rem";
divTable.style.backgroundColor = "yellow";

table.style.cssText = `
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

// td, th {
//   border: 1px solid #dddddd;
//   text-align: left;
//   padding: 8px;
// }

// Logic

divTable.appendChild(table);

// Headers
let propertiesMountain = Object.keys(MOUNTAINS[0]);
table.appendChild(document.createElement("tr"));
propertiesMountain.forEach((headerTable) => {
  let th = document.createElement("th");
  let thText = document.createTextNode(headerTable);
  th.appendChild(thText);
  table.querySelector("tr").appendChild(th);
});

// Values Rows
MOUNTAINS.forEach((mountain) => {
  let tr = document.createElement("tr");
  table.appendChild(tr);
  for (const key in mountain) {
    if (Object.hasOwnProperty.call(mountain, key)) {
      const value = mountain[key];

      let td = document.createElement("td");
      let thText = document.createTextNode(value);
      td.appendChild(thText);
      tr.appendChild(td);
    }
  }
});

// STYLES TD, TH

[...table.querySelectorAll("tr")].forEach((tr) => {
  tr.style.cssText = `
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  `;
});

[...table.querySelectorAll("th")].forEach((th) => {
  th.style.cssText = `
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  `;
});

[...table.querySelectorAll("td")].forEach((td) => {
  td.style.cssText = `
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  `;
});
