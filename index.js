const getJSON = ()=> {
    const httpRequest = new XMLHttpRequest();
    let jsonText;
    httpRequest.onreadystatechange = function () {
        jsonText = httpRequest.readyState == 4 && httpRequest.status == 200 ? httpRequest.responseText : null;
    }
    httpRequest.open("GET","https://cors-anywhere.herokuapp.com/http://www.mrsoft.by/data.json", false);
    httpRequest.send();
    return JSON.parse(jsonText);
};

const data = getJSON().data;
const output = document.getElementById("Output");
const input = document.getElementById("InputMain");
const CaseSensitivity = document.getElementById("CaseSensitivity")

function ClearOutput() {
    output.removeAttribute("style");
    output.value = null;
    output.rows = 3;
    output.cols = 25;
}

function FilterLength() {

    ClearOutput();

    for (var i = 0; i < data.length; i++) {

        if (data[i].length > input.value ) {
            addString(i);
        }
    }
}

function FilterSubstring(){

    ClearOutput();

    for (var i = 0; i <data.length; i++) {

        if (CaseSensitivity.checked&&data[i].indexOf(input.value)!=-1) {
            addString(i);
        }

        if (!CaseSensitivity.checked&&data[i].toLowerCase().indexOf(input.value.toLowerCase())!=-1) {
            addString(i);
        }
    }
}

function addString(i) {
    output.value += data[i] + "\n";
    output.rows++;
}

function InputRow() {
    console.log(1);
}

