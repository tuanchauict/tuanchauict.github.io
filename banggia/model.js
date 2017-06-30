var storage = {
    allStocks: [

    ]
};

var connection = new WebSocket(url.vndWebsocket, []);

var createMessage = function (object) {
    var json = JSON.stringify(object);
    return "[" + JSON.stringify(json) + "]";
};

connection.onopen = function () {
    connection.send(createMessage({
        type: "info",
        data: {
            time: new Date().getTime()
        }
    })); // Send the message 'Ping' to the server
};

// Log errors
connection.onerror = function (error) {
    console.log('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function (e) {
    console.log('Server: ' + e.data);

};


