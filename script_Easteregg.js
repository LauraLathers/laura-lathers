/* =========================================
   LAURA LATHERS
   INTERACTIVE SYSTEM
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       CONSOLE
       ========================================= */

    console.log(
        "%cHi, du Genieee.",
        "font-size: 20px; font-weight: bold; color: maroon;"
    );

    console.log(
        "Willkommen im Maschinenraum. Die meisten sehen nur die Fassade...."
    );

    console.log(
        "Fun Fact: gebaut von einer Maschinenbau-Studentin, die eigentlich keine Ahnung vom Programmieren hat."
    );

    console.log(
        "Hi hier LauraSchlaura, das ist ein Easteregg für die Intilektiellen unter euch."
    );

    console.log(
        "Hier erfahrt ihr mein Geheimnis Hehe..."
    );

    console.log(
        "Spaaaaaß"
    );


    /* =========================================
       ELEMENTE
       ========================================= */

    const wiesel =
        document.querySelector("#wiesel");

    const statusBlock =
        document.querySelector(".status-block");

    const koordinatenFeld =
        document.querySelector("#koordinaten");

    const fortschrittsBalken =
        document.querySelector("#scroll-fortschritt");

    const intro =
        document.querySelector("#intro");


    /* =========================================
       🧠 LAURASCHLAURA
       ========================================= */

    let eingabe = "";

    const geheimwort = "schlaura";


    document.addEventListener(
        "keydown",
        function (event) {

            /*
             * Nur normale Buchstaben aufnehmen.
             * Dadurch stören Shift, Pfeile etc. nicht.
             */

            if (event.key.length !== 1) {
                return;
            }


            eingabe +=
                event.key.toLowerCase();


            eingabe =
                eingabe.slice(
                    -geheimwort.length
                );


            if (eingabe === geheimwort) {

                document.body.classList.toggle(
                    "schlaura-mode"
                );


                alert(
                    "LauraSchlaura hat übernommen.\n\n" +
                    "Alles steht jetzt Kopf. Passt eigentlich."
                );


                console.log(
                    "%cLAURASCHLAURA MODE ACTIVATED",
                    "font-size: 18px; font-weight: bold; color: maroon;"
                );


                eingabe = "";

            }

        }
    );


    /* =========================================
       STATUS EASTER EGG
       ========================================= */

    if (statusBlock) {

        statusBlock.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "schlaura-mode"
                );


                console.log(
                    "%cLAURASCHLAURA MODE ACTIVATED",
                    "font-size: 18px; font-weight: bold; color: maroon;"
                );

            }
        );

    }


    /* =========================================
       SECTION ANIMATION
       ========================================= */

    /*
     * WICHTIG:
     *
     * Das CSS sollte Sections NICHT mehr
     * standardmäßig unsichtbar machen.
     *
     * Das JavaScript sorgt hier nur für
     * die zusätzliche Klasse "visible".
     *
     * Wenn der Observer nicht funktioniert,
     * bleibt die Website trotzdem sichtbar.
     */

    if (
        "IntersectionObserver"
        in window
    ) {

        const beobachter =
            new IntersectionObserver(

                function (einträge) {

                    einträge.forEach(
                        function (eintrag) {

                            if (
                                eintrag.isIntersecting
                            ) {

                                eintrag.target.classList.add(
                                    "visible"
                                );


                                /*
                                 * Einmal gesehen =
                                 * nicht weiter beobachten.
                                 */

                                beobachter.unobserve(
                                    eintrag.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.12
                }

            );


        document
            .querySelectorAll("section")
            .forEach(
                function (section) {

                    beobachter.observe(
                        section
                    );

                }
            );

    }


    /* =========================================
       🖱️ MAUS-KOORDINATEN
       ========================================= */

    document.addEventListener(
        "mousemove",
        function (event) {

            if (!koordinatenFeld) {
                return;
            }


            koordinatenFeld.textContent =
                "X: " +
                event.clientX +
                " / Y: " +
                event.clientY;

        }
    );


    /* =========================================
       🧲 SUBTILE INTRO INTERACTION
       ========================================= */

    document.addEventListener(
        "mousemove",
        function (event) {

            if (!intro) {
                return;
            }


            /*
             * Mausposition auf -0.5 bis +0.5
             */

            const x =
                event.clientX /
                window.innerWidth -
                0.5;


            const y =
                event.clientY /
                window.innerHeight -
                0.5;


            /*
             * Sehr kleine Bewegung.
             *
             * Nicht übertreiben:
             * Die Website soll ruhig bleiben.
             */

            intro.style.transform =
                "translate(" +
                x * 6 +
                "px, " +
                y * 4 +
                "px)";

        }
    );


    /* =========================================
       📜 SCROLL-FORTSCHRITT
       ========================================= */

    function aktualisiereScroll() {

        if (!fortschrittsBalken) {
            return;
        }


        const gescrollt =
            window.scrollY;


        const gesamtHöhe =
            document.documentElement.scrollHeight -
            window.innerHeight;


        if (gesamtHöhe <= 0) {

            fortschrittsBalken.style.width =
                "0%";

            return;

        }


        const prozent =
            (gescrollt / gesamtHöhe) * 100;


        fortschrittsBalken.style.width =
            Math.min(
                100,
                Math.max(0, prozent)
            ) + "%";

    }


    document.addEventListener(
        "scroll",
        aktualisiereScroll,
        { passive: true }
    );


    /*
     * Direkt beim Laden einmal ausführen.
     */

    aktualisiereScroll();


    /* =========================================
       🦦 WIESEL SYSTEM
       ========================================= */

    if (wiesel) {


        let wieselAktiv = true;


        /* =====================================
           WIESEL SPAWN
           ===================================== */

        function wieselSpawn() {

            const sichererRand = 60;


            const maxX =
                Math.max(
                    0,
                    window.innerWidth -
                    sichererRand
                );


            const maxY =
                Math.max(
                    0,
                    window.innerHeight -
                    sichererRand
                );


            const randX =
                Math.random() *
                maxX;


            const randY =
                Math.random() *
                maxY;


            /*
             * Erst Position setzen,
             * dann sichtbar machen.
             */

            wiesel.style.left =
                randX + "px";


            wiesel.style.top =
                randY + "px";


            wiesel.style.opacity =
                "1";


            console.log(
                "%c🦦 Wiesel spawned.",
                "color: maroon;"
            );

        }


        /* =====================================
           WIESEL VERSCHWINDEN
           ===================================== */

        function wieselVerschwindet() {

            wiesel.style.opacity =
                "0";

        }


        /* =====================================
           WIESEL BLÖDSINN
           ===================================== */

        function wieselMachtBloedsinn() {

            const aktion =
                Math.floor(
                    Math.random() * 5
                );


            /* ==============================
               0 — SPIN
               ============================== */

            if (aktion === 0) {

                wiesel.style.transform =
                    "rotate(720deg) scale(1.5)";


                setTimeout(
                    function () {

                        wiesel.style.transform =
                            "";

                    },
                    800
                );

            }


            /* ==============================
               1 — RIESIG
               ============================== */

            else if (aktion === 1) {

                wiesel.style.transform =
                    "scale(2.8)";


                setTimeout(
                    function () {

                        wiesel.style.transform =
                            "";

                    },
                    700
                );

            }


            /* ==============================
               2 — TELEPORT
               ============================== */

            else if (aktion === 2) {

                wiesel.style.transition =
                    "none";


                wiesel.style.opacity =
                    "0";


                setTimeout(
                    function () {

                        wieselSpawn();


                        /*
                         * Normale Animation
                         * wieder einschalten.
                         */

                        wiesel.style.transition =
                            "left 2s linear, " +
                            "top 2s linear, " +
                            "opacity 0.3s ease";

                    },
                    250
                );

            }


            /* ==============================
               3 — FLUCHT
               ============================== */

            else if (aktion === 3) {

                const randX =
                    Math.random() *
                    window.innerWidth;


                const randY =
                    Math.random() *
                    window.innerHeight;


                wiesel.style.transition =
                    "left 0.5s linear, " +
                    "top 0.5s linear";


                wiesel.style.left =
                    randX + "px";


                wiesel.style.top =
                    randY + "px";


                setTimeout(
                    function () {

                        wiesel.style.transition =
                            "left 2s linear, " +
                            "top 2s linear, " +
                            "opacity 0.3s ease";

                    },
                    600
                );

            }


            /* ==============================
               4 — CONSOLE
               ============================== */

            else {

                console.log(
                    "%c🦦 WIESEL HAT ÜBERNOMMEN.",
                    "font-size: 18px; font-weight: bold; color: maroon;"
                );

            }

        }


        /* =====================================
           WIESEL LAUFEN
           ===================================== */

        function wieselLäuftLos() {

            if (!wieselAktiv) {
                return;
            }


            wieselVerschwindet();


            const verschwindeZeit =
                500 +
                Math.random() * 1500;


            setTimeout(
                function () {

                    if (!wieselAktiv) {
                        return;
                    }


                    wieselSpawn();


                    /*
                     * Geschwindigkeit für den
                     * nächsten normalen Lauf.
                     */

                    const dauer =
                        1 +
                        Math.random() * 4;


                    wiesel.style.transition =
                        "left " +
                        dauer +
                        "s linear, " +

                        "top " +
                        dauer +
                        "s linear, " +

                        "opacity 0.3s ease";


                    /*
                     * 25 % Wahrscheinlichkeit
                     * für kompletten Blödsinn.
                     */

                    if (
                        Math.random() < 0.25
                    ) {

                        wieselMachtBloedsinn();

                    }


                    /*
                     * Nächster Auftritt.
                     */

                    const wartezeit =
                        2000 +
                        Math.random() * 4000;


                    setTimeout(
                        wieselLäuftLos,
                        wartezeit
                    );

                },
                verschwindeZeit
            );

        }


        /* =====================================
           🦦 WIESEL KLICKEN
           ===================================== */

        wiesel.addEventListener(
            "click",
            function () {

                console.log(
                    "%cDu hast das Wiesel erwischt.",
                    "font-size: 16px; color: maroon;"
                );


                wiesel.style.transition =
                    "transform 0.7s ease";


                wiesel.style.transform =
                    "scale(2) rotate(360deg)";


                setTimeout(
                    function () {

                        wiesel.style.transform =
                            "";


                        wieselSpawn();

                    },
                    700
                );

            }
        );


        /* =====================================
           START
           ===================================== */

        setTimeout(
            wieselLäuftLos,
            1200
        );

    }


    /* =========================================
       🧪 SYSTEM STATUS
       ========================================= */

    console.log(
        "%cSYSTEM STATUS: ONLINE",
        "font-family: monospace; color: maroon;"
    );

    console.log(
        "%cWIESEL STATUS: UNSTABLE",
        "font-family: monospace; color: maroon;"
    );

    console.log(
        "%cLAURA STATUS: IN PROGRESS",
        "font-family: monospace; color: maroon;"
    );


});