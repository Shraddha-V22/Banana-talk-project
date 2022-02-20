var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function constructURl(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occurred", error)
};

function clickHandler() {
    var inputText = textInput.value

    fetch(constructURl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedValue = json.contents.translated
        outputDiv.innerText = translatedValue})
    .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickHandler);


