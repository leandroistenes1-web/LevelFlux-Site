console.log("LEVEL//FLUX SYSTEM INITIALIZED");

const systemText = document.querySelector(".system-text");

const texto = "> SYSTEM INITIALIZED_";
let indice = 0;
systemText.textContent = "";

function digitar() {

    if (indice < texto.length) {

        systemText.textContent += texto.charAt(indice);

        indice++;

        setTimeout(digitar, 70);
    }

}

digitar();
