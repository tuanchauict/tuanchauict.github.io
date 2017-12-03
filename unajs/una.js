function Una(information) {
    var me = this;

    function init(information) {
        me.$el = document.getElementById(information.el);
        me.$code = '<' + me.$el.nodeName + '>' + me.$el.innerHTML + '</' + me.$el.nodeName + '>';
        me.$tree = parseHtml(me.$code);
        me.$methods = information.methods;
        me.$nodes = {
            counter: 0,
            nodes: {},
            update: function(path, node){
                this.nodes[path] = {
                    counter: this.counter,
                    node: node
                }
            },
            get: function (path) {
                return path in this.nodes ? this.nodes[path].node : null;
            },
            beginUpdate: function(){
                this.counter++;
            },
            endUpdate: function() {
                console.log(">>", this.counter);
                for (var k in this.nodes){
                    console.log(">>>", this.nodes[k].counter);
                    if (this.nodes[k].counter < this.counter){
                        this.nodes[k].node.remove();
                        delete this.nodes[k];
                    }
                }
            }
        };

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
        me.$el.innerHTML = '';
        updateView();
    }

    function updateView(prop, old, val) {
        me.$nodes.beginUpdate();
        me.$tree.toDOM(me.$nodes, '', me.$el, {data: me.$data, methods: me.$methods}, null);
        me.$nodes.endUpdate();
    }


    init(information);
}



