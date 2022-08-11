function encrypt(sentence){
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#text");
    const text = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var text_out = document.querySelector("#text_out");
    if (text != ""){
        var out = ""
        for(var i = 0; i < text.length; i++){
            if(((text[i] < 'a') || (text[i] > 'z')) && (text[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontWeight = "600";
                document.querySelector("#warning").style.fontSize = "14px";
                return;
            }
            else if((text.length == 1 && text == " ") || text.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
            if(text[i] == 'a'){
                out += sentence["a"] ;
            }
            else if(text[i] == 'e'){
                out += sentence["e"];
            }
            else if(text[i] == 'i'){
                out += sentence["i"];
            }
            else if(text[i] == 'o'){
                out += sentence["o"];
            }
            else if(text[i] == 'u'){
                out += sentence["u"];
            }
            else{
                out += text[i];
            }
        }

        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        text_out.innerHTML = out;
    }

    return;

}

function decrypt(sentence){
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#text");
    var text = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var text_out = document.querySelector("#text_out");
    if (text != ""){
        for(var i=0; i < text.length; i++){
            if(((text[i] < 'a') || (text[i] > 'z')) && (text[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontWeight = "600";
                document.querySelector("#warning").style.fontSize = "14px";
                return;
            }
            else if((text.length == 1 && text == " ") || text.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
        }
        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        text = text.replace(new RegExp(sentence["a"], "g"), "a");
        text = text.replace(new RegExp(sentence["e"], "g"), "e");
        text = text.replace(new RegExp(sentence["i"], "g"), "i");
        text = text.replace(new RegExp(sentence["o"], "g"), "o");
        text = text.replace(new RegExp(sentence["u"], "g"), "u");
        text_out.innerHTML = text;
    }
    return;
}

function clipboard(){
    const text_out = document.querySelector("#text_out");
    navigator.clipboard.writeText(text_out.value);
}

const encr = document.querySelector('#encr');
const decr = document.querySelector('#decr');
const copy = document.querySelector('#copiar');

var sentence = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

encr.addEventListener( 'click', function() {encrypt(sentence);} );
decr.addEventListener( 'click', function() {decrypt(sentence);} );
copy.addEventListener( 'click', function() {clipboard();} );
