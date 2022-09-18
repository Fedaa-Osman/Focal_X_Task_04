// $(document).ready(function () {
//   $("#arrToTable").DataTable();
// });

const names = [
  "Leanne Graham",
  "Ervin Howell",
  "Clementine Bauch",
  "Patricia Lebsack",
  "Chelsey Dietrich",
  "Mrs. Dennis Schulist",
  "Kurtis Weissnat",
  "Nicholas Runolfsdottir V",
  "Glenna Reichert",
  "Clementina DuBuque",
];
const username = [
  "Bret",
  "Antonette",
  "Samantha",
  "Karianne",
  "Kamren",
  "Leopoldo_Corkery",
  "Elwyn.Skiles",
  "Maxime_Nienow",
  "Delphine",
  "Moriah.Stanton",
];
const email = [
  "Sincere@april.biz",
  "Shanna@melissa.tv",
  "Nathan@yesenia.net",
  "Julianne.OConner@kory.org",
  "Lucio_Hettinger@annie.ca",
  "Karley_Dach@jasper.info",
  "Telly.Hoeger@billy.biz",
  "Sherwood@rosamond.me",
  "Chaim_McDermott@dana.io",
  "Rey.Padberg@karina.biz",
];

var body = document.body;

var table = document.createElement("table");

table.setAttribute("id", "arrToTable");

table.classList.add("table", "table-striped", "table-bordered");
// Head
var thead = document.createElement("thead");
thead.classList.add("table-dark", "text-center");

var th1 = document.createElement("th");
th1.appendChild(document.createTextNode("names"));
var th2 = document.createElement("th");
th2.appendChild(document.createTextNode("username"));
var th3 = document.createElement("th");
th3.appendChild(document.createTextNode("email"));
var tr1 = document.createElement("tr");

tr1.appendChild(th1);
tr1.appendChild(th2);
tr1.appendChild(th3);
thead.appendChild(tr1);
table.appendChild(thead);
// Body
var tbody = document.createElement("tbody");

for (var i = 0; i < email.length; i++) {
  var tr = document.createElement("tr");
  for (var x = 0; x < 3; x++) {
    if (x == 0) {
      var td = document.createElement("td");
      td.appendChild(document.createTextNode(names[i]));
      tr.appendChild(td);
    } else if (x == 1) {
      var td = document.createElement("td");
      td.appendChild(document.createTextNode(username[i]));
      tr.appendChild(td);
    } else if (x == 2) {
      var td = document.createElement("td");
      td.appendChild(document.createTextNode(email[i]));
      tr.appendChild(td);
    }
  }
  tbody.appendChild(tr);
}
table.appendChild(tbody);
body.appendChild(table);
