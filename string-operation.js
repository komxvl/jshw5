function getLength(someValue){

    /*document.body.innerHTML += '<div id="result" style="display: block"></div>';*/

    var divResult = document.getElementById('result');
    divResult.style.display = 'block';

    var valueInput = document.createElement("span");
    var spanEl = document.getElementsByTagName('span');
    console.log(spanEl);
    for(var  i = 0; i < spanEl.length;i++){
        spanEl[i].innerText = '';
    }
    valueInput.id = 'value';
    (someValue.value ==0)? valueInput.appendChild(document.createTextNode("Строка: не ввели строку!")):
    valueInput.appendChild(document.createTextNode("Строка: "+someValue.value));
    document.getElementById('result').appendChild(valueInput);

    var lengthInput = document.createElement("span");
    lengthInput.id='length';
    lengthInput.appendChild(document.createTextNode(String("Длинна строки: "+someValue.value.length)));
    document.getElementById('result').appendChild(lengthInput);

    var inputVal = document.getElementById('input-value');
    inputVal.value='';
}



function showImage() {
    var imgArray = ["images/facebook.png", "images/play.png" , "images/twitter.png" , "images/uploads.png"];
    for (var i = 0; i < imgArray.length; i++) {
        var img = document.createElement('img');
        img.src = imgArray[i];
        document.body.appendChild(img);
    }
    console.log("image array");
}


function getSiteName(siteFullNames) {

    var siteFullName = siteFullNames.value;
    var name;
    var httpPart = siteFullName.substr(0,7);
    var httpPartModern = siteFullName.substr(0,8);
    if(httpPart == 'http://'){
         name = siteFullName.slice(7,siteFullName.length);
    }
    else if(httpPartModern == 'https://'){
        name = siteFullName.slice(8,siteFullName.length);
    }
    else{
        alert("Не тот формат начните или с http:// или https://");
        name="НЕ тот формат!!";
    }
    document.getElementById('name-site').innerText = name;
    siteFullNames.value = '';
}

function getShortSiteName(siteName) {
    var siteNameVal = siteName.value;
    var shortName = null;
    if(siteNameVal.indexOf('www') == -1){
        if(siteNameVal.substring(0,7) == 'http://'){
            console.log(1);
            shortName =  siteNameVal.slice(7,siteNameVal.length);
        }
        else if(siteNameVal.substring(0,8) == 'https://'){
            console.log(2);
            shortName = siteNameVal.slice(8,siteNameVal.length);
        }
        else{
            shortName = siteNameVal;
        }
    }
    else if(siteNameVal.indexOf('www') == 7){
        console.log(3);
        shortName = siteNameVal.slice(11,siteNameVal.length);
    }
    else if(siteNameVal.indexOf('www') == 8){
        console.log(4);
        shortName = siteNameVal.slice(12,siteNameVal.length);
    }
    document.getElementById('web-name').innerText = shortName;
}

function getCharCode(symbol) {
    var codeNumber = document.getElementById("code-number");
    codeNumber.innerText='';
    console.log(symbol.value.charCodeAt(0));
    codeNumber.innerText += symbol.value.charCodeAt(0);
}

function formValidation(){
    var nameUser = document.getElementById("user-name").value.trim();
    var lastName = document.getElementById("last-name").value.trim();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var adr_pattern=/^[0-9a-z_]+@[0-9a-z_]+?\.[a-z]{2,6}/i;
    var prov=adr_pattern.test(email);
    if(password.length > 5 && prov ) {
        console.log("all good");
        return true;
    }
    else{
        console.log("smtng wrong...");
        return false;
    }
}