function Una(information) {
    var me = this;

    function init(information) {
        me.$el = document.getElementById(information.el);
        me.$code = '<' + me.$el.nodeName + '>' + me.$el.innerHTML + '</' + me.$el.nodeName + '>';
        me.$elementMap = {};
        me.$tree = parseHtml(me.$code);
        me.$methods = information.methods;

        function watch(obj) {
            if (Array.isArray(obj)) {
                obj.push = function(){
                    var beforeLength = obj.length;
                    Array.prototype.push.apply(this, arguments);
                    updateView();
                    for (var i = beforeLength; i < obj.length; i++){
                        obj.watch(i, updateView);
                        if (typeof obj[i] === 'object')
                            watch(obj[i])
                    }
                };
                obj.remove = function () {
                    Array.prototype.remove.apply(this, arguments);
                    updateView();
                };

                obj.pop = function () {
                    Array.prototype.pop.apply(this, arguments);
                    updateView();
                };

                console.log("array");
                // obj.watch('length', function (prop, old, val) {
                //     console.log("length changed", old, val);
                //     updateView()
                // });
                for (var i = 0; i < obj.length; i++) {
                    obj.watch(i, updateView);
                    if (typeof obj[i] === 'object')
                        watch(obj[i])
                }
            } else {
                for (var k in obj) {
                    if (!obj.hasOwnProperty(k)) continue;
                    obj.watch(k, updateView);
                    if (typeof obj[k] === 'object') {
                        watch(obj[k]);
                    }
                }
            }
        }

        me.$data = JSON.parse(JSON.stringify(information.data));
        watch(me.$data);

        updateView();
    }

    function updateView(prop, old, val) {
        var newDOM = me.$tree.toDOM({data: me.$data, methods: me.$methods}, null);
        console.log(newDOM);
        //TODO
        me.$el.innerHTML = '';
        me.$el.appendChild(newDOM);
        // for(var i = 0; i < newDOM.childNodes.length; i++){
        //     console.log(newDOM.childNodes[i]);
        //     me.$el.appendChild(newDOM.childNodes[i]);
        // }
    }


    init(information);
}



