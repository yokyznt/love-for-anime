// Lluvia de corazones para la página de Romance
const lluviaCorazones = document.querySelector(".lluvia-corazones");

if (lluviaCorazones) {
    function crearCorazon() {
        const corazon = document.createElement("span");

        corazon.classList.add("corazon");
        corazon.textContent = Math.random() > 0.5 ? "♥️" : "♡";

        corazon.style.left = Math.random() * 95 + "%";
        corazon.style.animationDuration = (4 + Math.random() * 3) + "s";
        corazon.style.fontSize = (14 + Math.random() * 16) + "px";

        lluviaCorazones.appendChild(corazon);

        corazon.addEventListener("animationend", () => {
            corazon.remove();
        });
    }

    setInterval(crearCorazon, 500);
}

// Lluvia de espadas para la página de Acción
const lluviaEspadas = document.querySelector(".lluvia-espadas");

if (lluviaEspadas) {
    function crearEspada() {
        const espada = document.createElement("span");

        espada.classList.add("espada");
        espada.textContent = "⚔️";

        espada.style.left = Math.random() * 95 + "%";
        espada.style.animationDuration = (4 + Math.random() * 3) + "s";
        espada.style.fontSize = (16 + Math.random() * 16) + "px";

        lluviaEspadas.appendChild(espada);

        espada.addEventListener("animationend", () => {
            espada.remove();
        });
    }

    setInterval(crearEspada, 700);
}

// Lluvia de estrellas para Fantasía
const lluviaEstrellas = document.querySelector(".lluvia-estrellas");

if (lluviaEstrellas) {
    function crearEstrella() {
        const estrella = document.createElement("span");

        estrella.classList.add("estrella");
        estrella.textContent = Math.random() > 0.5 ? "✦" : "✧";

        estrella.style.left = Math.random() * 95 + "%";
        estrella.style.animationDuration = (4 + Math.random() * 3) + "s";
        estrella.style.fontSize = (14 + Math.random() * 16) + "px";

        lluviaEstrellas.appendChild(estrella);

        estrella.addEventListener("animationend", () => {
            estrella.remove();
        });
    }

    setInterval(crearEstrella, 600);
}

// Lluvia de balones para Deportes
const lluviaBalones = document.querySelector(".lluvia-balones");

if (lluviaBalones) {
    function crearBalon() {
        const balon = document.createElement("span");

        balon.classList.add("balon");
        balon.textContent = Math.random() > 0.5 ? "⚽" : "🏀";

        balon.style.left = Math.random() * 95 + "%";
        balon.style.animationDuration = (4 + Math.random() * 3) + "s";
        balon.style.fontSize = (16 + Math.random() * 16) + "px";

        lluviaBalones.appendChild(balon);

        balon.addEventListener("animationend", () => {
            balon.remove();
        });
    }

    setInterval(crearBalon, 700);
}

// Lluvia de notas musicales para Drama
const lluviaNotas = document.querySelector(".lluvia-notas");

if (lluviaNotas) {
    function crearNota() {
        const nota = document.createElement("span");

        nota.classList.add("nota-musical");
        nota.textContent = Math.random() > 0.5 ? "♪" : "♫";

        nota.style.left = Math.random() * 95 + "%";
        nota.style.animationDuration = (4 + Math.random() * 3) + "s";
        nota.style.fontSize = (16 + Math.random() * 16) + "px";

        lluviaNotas.appendChild(nota);

        nota.addEventListener("animationend", () => {
            nota.remove();
        });
    }

    setInterval(crearNota, 650);
}

// Lluvia de estrellitas para Comedia
const lluviaComedia = document.querySelector(".lluvia-comedia");

if (lluviaComedia) {
    function crearEstrellaComedia() {
        const estrella = document.createElement("span");

        estrella.classList.add("estrella-comedia");
        estrella.textContent = Math.random() > 0.5 ? "✦" : "✧";

        estrella.style.left = Math.random() * 95 + "%";
        estrella.style.animationDuration = (3 + Math.random() * 3) + "s";
        estrella.style.fontSize = (14 + Math.random() * 16) + "px";

        lluviaComedia.appendChild(estrella);

        estrella.addEventListener("animationend", () => {
            estrella.remove();
        });
    }

    setInterval(crearEstrellaComedia, 450);
}
