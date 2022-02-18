var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

function clickHandler() {
    outputDiv.innerText = "translation: " + textInput.value
};

btnTranslate.addEventListener("click", clickHandler);


