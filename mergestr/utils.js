function generateSharedKeys(map1, map2) {
    var ks1 = map1.key;
    var m1 = map1.map;
    var m2 = map2.map;
    var result = [];
    var keys = {};
    for (var i = 0; i < ks1.length; i++) {
        var k = ks1[i];
        var v1 = m1[k];
        var v2 = m2[k];
        if (v2 != undefined && v1 != v2) {
            keys[k] = true;
            result.push({
                key: k,
                value: undefined,
                value1: v1,
                value2: v2
            });
        }
    }
    return {
        keys: keys,
        array: result
    };
}


function parseKey(text){
    var re_key = /^<.+name="(.+?)"/;
    text = text.trim();
    var arr = text.match(re_key);
    if(arr){
        return arr[1];
    }
    return null;
}

function parseValue(text) {
    var index0 = text.indexOf('>');
    var index1 = text.lastIndexOf('<');
    return text.substring(index0 + 1, index1).trim();
}


function stringToMap(str) {

    var re_start_string = /^<string.+$/;
    var re_end_string = /.*?<\/string>/;
    var re_start_plural = /^<plurals.+$/;
    var re_end_plural = /.*?<\/plurals>/;
    var re_start_array = /^<string-array.+$/;
    var re_end_array = /.*?<\/string-array>$/;


    var map = {};
    var keys = [];
    var arr = str.split("\n");
    var text = "";
    for (var i = 0; i < arr.length; i++) {
        var line = arr[i];
        var sline = line.trim();
        // console.log(sline);
        if (sline.match(re_start_string) || sline.match(re_start_plural) || sline.match(re_start_array)) {
            // console.log("match begin");
            text = line;
        } else {
            text += "\n" + line;
        }
        if (sline.match(re_end_string) || sline.match(re_end_plural) || sline.match(re_end_array)) {
            // console.log("match end");
            if(text.indexOf('translatable="false"') < 0){
                var key = parseKey(text);
                if (key) {
                    map[key] = text.trim();
                    keys.push(key);
                }
            }
            // console.log(key);
            text = "";
        }

    }

    return {
        key: keys,
        map: map
    }
}

function merge(data) {
    var arr = [];
    var ks1 = data.oldMap.key;
    var m1 = data.oldMap.map;
    var ks2 = data.newMap.key;
    var m2 = data.newMap.map;
    var sks = data.sharedKey.array;
    var skeys = data.sharedKey.keys;

    var i, k;
    for (i = 0; i < ks1.length; i++) {
        k = ks1[i];
        if (!(k in skeys)) {
            arr.push(m1[k]);
        }
    }
    for (i = 0; i < ks2.length; i++) {
        k = ks2[i];
        if (!(k in skeys) && !(k in m1)) {
            arr.push(m2[k]);
        }
    }

    for (i = 0; i < sks.length; i++) {
        var v = sks[i];
        if (v.value != undefined)
            arr.push(v.value);
    }


    return arr;
}

function toXml(arr) {
    var text = arr.join('\n');
    return '<?xml version="1.0" encoding="utf-8"?>\n<resources xmlns:xliff="urn:oasis:names:tc:xliff:document:1.2">\n' + text + '\n</resources>';
}

function download(data, filename, type) {
    var a = document.createElement("a"),
        file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

function saveFile(data){
    download(data, "strings.xml", "text");
}


function dragDrop(input, model){
    input.addEventListener('dragover', function(e){
        // console.log("drag", e);
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        input.style.background = '#BBDEFB';
    });

    input.addEventListener('dragleave', function (e) {
        input.style.background = '#fff';
    });

    input.addEventListener('drop', function(e){
        e.stopPropagation();
        e.preventDefault();
        input.style.background = '#fff';
        var files = e.dataTransfer.files;
        if(files.length != 1){
            return;
        }
        var reader = new FileReader();
        reader.onload = function(e2){
            input.value = e2.currentTarget.result;
            angular.element(input).triggerHandler('change');
        };
        reader.readAsText(files[0]);
    });

}
