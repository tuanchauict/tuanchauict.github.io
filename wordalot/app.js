function check(letters, word) {
    for(var i = 0; i < word.length; i++){
        var c = word[i];
        if(letters.indexOf(c) < 0) {
            return false;
        }
        letters = letters.replace(c, '');
    }
    return true;
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function onResponse(text){
    console.log(text);
    window.text = text;
    var regex = /List of all possible words with(?:.|\n)+?<FONT.+?>((?:.|\n)+?)<\/FONT>/;
    var arr = text.match(regex);
    if (arr == null || arr.length < 2){
        return;
    }
    var list = arr[1].split('<br>');
    var letters = id('letters').value;
    var result = id('result');
    for(var i = 0; i < list.length; i++) {
        var w = list[i].trim();
        if(!w){
            continue;
        }
        console.log(w);        
        if (check(letters, w)) {
            result.innerText += w + '\n';
        }
    }
}

function request(pattern) {
    var url = "http://herokuperoxy-1-us.herokuapp.com/proxy/?url=http://www.amo.qc.ca/cgi-bin/pub/ODico/dico.out?mot=";

    httpGetAsync(url + pattern, onResponse)
}

function id(_id){
    return document.getElementById(_id);
}

function search(){
    id('result').innerHTML = '';
    var pattern = id('pattern').value;
    var letters = id('letters').value;

    var count = 0;
    for (var i = 0; i < pattern.length; i++){
        if (pattern[i] != '*'){
            count++;
        }
    }

    if (count == 1) {
        var arr = [];
        for (var i = 0; i < letters.length; i++){
            var c = letters[i];
            if (arr.indexOf(c) < 0){
                arr.push(c);
                request(pattern.replace('*', c))
            }
        }
        
    } else {
        request(pattern);
    }
}