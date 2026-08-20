console.log("%cHi, du Genieee.", "font-size: 20px; font-weight: bold; color: maroon;");
console.log("Willkommen im Maschinenraum. Die meisten sehen nur die Fassade....");
console.log("Fun Fact: gebaut von einer Maschinenbau-Studentin die eigentliche keine Ahnung vom Programmieren hat, ");
console.log("Hi hier LauraSChlaura, das ist ein Easteregg für die Intilektiellen unter euch");
console.log("Hier erfahrt ihr mein Geheimnis Hehe...");
console.log("Spaaaaaß");


let eingabe = "";
const geheimwort = "schlaura";

document.addEventListener("keydown", function(event) {
  eingabe += event.key;
  eingabe = eingabe.slice(-geheimwort.length);

  if (eingabe === geheimwort) {
    document.body.style.transform = "rotate(180deg)";
    alert("LauraSchlaura hat übernommen. Alles steht jetzt Kopf. Passt eigentlich.");
  }
});

document.querySelector(".status-block").addEventListener("click", function() {
  alert("LauraSchlaura hat übernommen. Frag nicht warum.");
  document.body.style.transform = "rotate(180deg)";
});