let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");

function clickHandler() {
	outputDiv.innerText = " " + txtInput.value.toUpperCase();
}

btnTranslate.addEventListener("click", clickHandler);

console.log(outputDiv);
