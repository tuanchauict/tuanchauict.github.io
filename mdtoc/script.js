var md = (function(text, minLevel, maxLevel){
    maxLevel = maxLevel | 6;
    minLevel = minLevel | 1;
    var re = /^(\s{0,3})(#+)(.*?)(\[[a-zA-Z0-9\-_+ ]+\])?(\s*)(#*)(\s*)$/
    var reTOCOpen = /^<!--\s*MarkdownTOC\s*-->\s*$/
    var reTOCClose = /^<!--\s*!MarkdownTOC\s*-->\s*$/
    var reRawText = /[a-zA-Z0-9\-_]+/g
    var reOpenBracket = /\[/g
    var reCloseBracket = /\]/g

    var lines = text.split('\n');

    var headers = [];
    var result = [[],[]];
    var mapId = {};

    var count = 0;
    var flagOpen = false;


    for(var i = 0, l = lines.length; i < l; i++){
        var line = lines[i];
        if(line.match(reTOCOpen) && count == 0){
            count = 1;
            flagOpen = true;
            continue;
        }

        if(flagOpen && count == 1){
            if(line.match(reTOCClose)){
                flagOpen = false;
            }
            continue;
        }

        var arr = line.match(re);
        // console.log("line =", line, arr);
        if (arr && arr.length == 8){
            var h = arr[2];
            var t = arr[3];
            var he = arr[6];
            var id = arr[4];
            
            arr[7] = '';

            // for (var j = arr.length - 1; j >= 0; j--) {
            //     console.log(j, arr[j])
            // };


            if(h && h.length <= maxLevel && h.length >= minLevel){
                arr[0] = '';
                var header = {
                    level: h.length,
                    text: t
                };

                headers.push(header);

                // if(he && h.length === he.length){
                    // console.log("id =", id);
                    if(id && id.length > 0){
                        header.id = id.substr(1, id.length - 2).toLowerCase();
                    }
                    else{
                        var raw = t.match(reRawText);
                        header.id = raw.join('').toLowerCase();
                    }
                // }
                // else{
                //     var raw = t.match(reRawText);
                //     header.id = raw.join('-');
                //     arr.push('[' + header.id + ']', h);
                // }
                

                header.id = header.id.toLowerCase();

                if(header.id in mapId){
                    mapId[header.id] += 1;
                }
                else{
                    mapId[header.id] = 0;
                }

                if(mapId[header.id] > 0){
                    header.id += '_' + mapId[header.id];
                }

                arr[4] = '[' + header.id + ']';
                result[count].push(arr.join(''))
            }
            else{
                result[count].push(line);    
            }
        }
        else{
            result[count].push(line);
        }
    }
    /*
    {
        id: id,
        level: 4,
        text: text
    }
    */
    var strHeaders = headers.map(function(header){
        var result = [];
        for(var i = header.level - minLevel; i > 0; i--){
            result.push('\t')
        }
        result.push('* [', header.text.trim().replace(reOpenBracket, '\\[').replace(reCloseBracket, '\\]'), '](#', header.id ,')');
        return result.join('');
    });



    if(count == 0){
        return '\n\n<!-- MarkdownTOC -->\n\n' + strHeaders.join('\n') + '\n\n<!-- !MarkdownTOC -->\n\n' + result[0].join('\n')
    }
    else{
        return result[0].join('\n') + '\n\n<!-- MarkdownTOC -->\n\n' + strHeaders.join('\n') + '\n\n<!-- !MarkdownTOC -->\n\n' + result[1].join('\n');
    }
});


var run = function(){
    var text = document.getElementById('content').value;

    // console.log(md(text));
    document.getElementById('result').value = md(text);
}