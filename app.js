let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");

function clickHandler() {
	console.log("Click!!!!!!");
	console.log("input", txtInput.value);
}

btnTranslate.addEventListener("click", clickHandler);
