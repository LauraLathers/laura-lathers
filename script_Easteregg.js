console.log("%cHi, du Genieee.", "font-size: 20px; font-weight: bold; color: maroon;");
console.log("Willkommen im Maschinenraum. Die meisten sehen nur die Fassade....");
console.log("Fun Fact: gebaut von einer Maschinenbau-Studentin die eigentliche keine Ahnung vom Programmieren hat, ");
console.log("Hi hier LauraSChlaura, das ist ein Easteregg für die Intilektiellen unter euch");
console.log("Hier erfahrt ihr mein Geheimnis Hehe...");
console.log("Spaaaaaß");

// ==============================
// LAURASCHLAURA
// ==============================

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


// ==============================
// STATUS EASTER EGG
// ==============================


document.querySelector(".status-block").addEventListener("click", function() {
  alert("LauraSchlaura hat übernommen. Frag nicht warum.");
  document.body.style.transform = "rotate(180deg)";
});


// ==============================
// SECTIONS EINBLENDEN
// ==============================

const beobachter = new IntersectionObserver(function(einträge) {
  einträge.forEach(function(eintrag) {
    if (eintrag.isIntersecting) {
      eintrag.target.classList.add("visible");
    }
  });
});

document.querySelectorAll("section").forEach(function(section) {
  beobachter.observe(section);
});

const koordinatenFeld = document.querySelector("#koordinaten");

document.addEventListener("mousemove", function(event) {
  koordinatenFeld.textContent = "X: " + event.clientX + " / Y: " + event.clientY;
});


// ==============================
// MAUS-KOORDINATEN
// ==============================

const fortschrittsBalken = document.querySelector("#scroll-fortschritt");


// ==============================
// SCROLL-FORTSCHRITT
// ==============================
document.addEventListener("scroll", function() {
  const gescrollt = document.documentElement.scrollTop;
  const gesamtHöhe = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const prozent = (gescrollt / gesamtHöhe) * 100;
  fortschrittsBalken.style.width = prozent + "%";
});



// ==============================
// 🦦 DAS WIESEL
// ==============================

const wiesel = document.querySelector("#wiesel");

console.log("Wiesel:", wiesel);


if (wiesel) {

  function wieselLäuftLos() {

    // Wiesel verschwinden lassen
    wiesel.style.opacity = "0";


    // Zufällige Zeit verschwinden
    const verschwindeZeit =
      500 + Math.random() * 1500;


    setTimeout(function() {

      // Zufällige X-Position
      const neueXPosition =
        Math.random() * (window.innerWidth - 80);


      // Zufällige Y-Position
      const neueYPosition =
        Math.random() * (window.innerHeight - 80);


      // Wiesel an neue Position setzen
      wiesel.style.left =
        neueXPosition + "px";

      wiesel.style.top =
        neueYPosition + "px";


      // Wiesel wieder sichtbar machen
      wiesel.style.opacity = "1";


      // Zufällige Geschwindigkeit
      const dauer =
        1 + Math.random() * 4;

      wiesel.style.transition =
        "left " + dauer + "s linear, " +
        "top " + dauer + "s linear, " +
        "opacity 0.3s ease";


      // Nächsten Auftritt planen
      const wartezeit =
        2000 + Math.random() * 4000;

      setTimeout(wieselLäuftLos, wartezeit);

    }, verschwindeZeit);
  }


  // Wiesel startet
  setTimeout(wieselLäuftLos, 1000);

}
if (Math.random() < 0.2) {
    // Wiesel macht Blödsinn
}