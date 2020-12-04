var btntranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var textOutputDiv =document.querySelector("#output-txt");
// console.log(textInput);
btntranslate.addEventListener("click",clickEventHandler);
function clickEventHandler(){
    console.log("Button is clicked!");
    console.log("text input: ",textInput.value);
    textOutputDiv.innerText ="Hello "+ textInput.value;
};



