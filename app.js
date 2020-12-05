var btntranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var textOutputDiv =document.querySelector("#output-txt");
// console.log(textInput);
// btntranslate.addEventListener("click",clickEventHandler);
// function clickEventHandler(){
//     console.log("Button is clicked!");
//     console.log("text input: ",textInput.value);
//     textOutputDiv.innerText ="Hello "+ textInput.value;
// };

 //var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL= "https://api.funtranslations.com/translate/minion.json";
btntranslate.addEventListener("click",clickEventHandler);

function createTranslationURL(text){
    return serverURL+"?"+"text="+text;
}

function catchErrorHandler(error)
{
  console.log("error has occured", error);
  alert("Some issue, try later!");
}

 function clickEventHandler()
 {
    //store in variable the text enetered in textarea
    var textEntered = textInput.value;

    //call the server & pass the textEntered as part of serverURL
    fetch(createTranslationURL(textEntered))
    .then(response => response.json())
    .then(json => {
        //read value of translated  attribute of content object returned in json format
        var translatedText = json.contents.translated;
        //assign value of translatedText to div to show on GUI
        textOutputDiv.innerText = translatedText;
    })
    .catch(catchErrorHandler)


     
 };



