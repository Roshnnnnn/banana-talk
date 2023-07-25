let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");

let serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
	return serverURL + "?" + "text=" + text;
}

function errorHandle(error) {
	console.log("Error", error);
	alert("Something went wrong, try after some time");
}

function clickHandler() {
	var inputText = txtInput.value;

	fetch(getTranslationURL(inputText))
		.then((response) => response.json())
		.then((json) => {
			console.log(json.contents.translated);
			outputDiv.innerText = json.contents.translated;
		})
		.catch(errorHandle);
}

btnTranslate.addEventListener("click", clickHandler);
