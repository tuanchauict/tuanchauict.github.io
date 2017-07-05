/**
 * Created by tuanchau on 6/30/17.
 */
//HAG       0
// ^10.25   1
// ^8.93    2
// ^9.6     3
// ^9.46    4
// ^1,020   5
// ^9.47    6
// ^1,405   7
// ^9.48    8
// ^663     9
// ^-0.12   10
// ^9.48    11
// ^62,982  12
// ^9.49    13
// ^10      14
// ^9.5     15
// ^3,480   16
// ^9.51    17
// ^2,750   18
// ^580,831 19
// ^9.59    20
// ^9.76    21
// ^9.4     22
// ^        23
// ^        24
// ^710     25
// ^2,484   26
// ^291,802,775
// ^43.0
// ^


var mbsRest = (function () {

    var parse = function (line) {
        var arr = line.split('^');

        return {
            id: arr[0],
            name: _ListStockInfo[arr[0]],
            price0: {
                ceil: parseFloat(arr[1]),
                floor: parseFloat(arr[2]),
                reference: parseFloat(arr[3])
            },
            live: {
                match: {
                    price: parseNumber(arr[11]),
                    volume: normaliseAmount(parseNumber(arr[12]))
                },
                buy: [
                    {
                        price: parseNumber(arr[4]),
                        volume: normaliseAmount(parseNumber(arr[5]))
                    },
                    {
                        price: parseNumber(arr[6]),
                        volume: normaliseAmount(parseNumber(arr[7]))
                    },
                    {
                        price: parseNumber(arr[8]),
                        volume: normaliseAmount(parseNumber(arr[9]))
                    }
                ],
                sell: [
                    {
                        price: parseNumber(arr[13]),
                        volume: normaliseAmount(parseNumber(arr[14]))
                    },
                    {
                        price: parseNumber(arr[15]),
                        volume: normaliseAmount(parseNumber(arr[16]))
                    },
                    {
                        price: parseNumber(arr[17]),
                        volume: normaliseAmount(parseNumber(arr[18]))
                    }
                ],
                stats: {
                    totalVolume: normaliseAmount(parseNumber(arr[19])),
                    high: parseNumber(arr[21]),
                    low: parseNumber(arr[22]),
                    average: parseNumber(arr[20])
                },
                foreign: {
                    buyVolume: normaliseAmount(parseNumber(arr[25])),
                    buyRoom: normaliseAmount(parseNumber(arr[27])),
                    sellAmount: normaliseAmount(parseNumber(arr[26])),
                    sellRoom: normaliseAmount(parseNumber(arr[27]))
                }
            }

        }
    };

    var reload = function (callback) {
        console.log(APP.stock.codes);
        get(Url.mbsHttp.toUrl(Url.mbsHttp.full, APP.stock.codes), function (text) {
            var lines = text.split("|")[2].split("#");
            var set = new Set();
            var codes = APP.stock.codes;
            // console.log(codes);
            var i;
            for (i = 0; i < codes.length; i++) {
                set.add(codes[i]);
            }
            var line;
            var f3;

            var stock;
            var map = {};

            for (i = 0, l = lines.length; i < l; i++) {
                line = lines[i];
                f3 = line.substr(0, 3);
                if (set.has(f3)) {
                    stock = parse(line);
                    map[stock.id] = stock;
                    // console.log(stock);
                }
            }

            var stocks = [];
            var code;
            for (i = 0, l = codes.length; i < l; i++) {
                code = codes[i];
                if (map.hasOwnProperty(code)) {
                    stocks.push(map[codes[i]]);
                }
            }
            if (APP.owner)
                APP.stock.stocks = updateStock(APP.stock.stocks, stocks);
            // console.log(APP.stock.stocks);
            if (callback) {
                callback();
            }
        });
    };

    reload(function () {
        setInterval(function () {
            get(Url.mbsHttp.toUrl(Url.mbsHttp.full, APP.stock.codes), function (text) {
                // console.log(text);
                //TODO
                var lines = text.split("|")[2].split("#");
                var set = new Set();
                var codes = APP.stock.codes;
                // console.log(codes);
                var i;
                for (i = 0; i < codes.length; i++) {
                    set.add(codes[i]);
                }
                var line;
                var f3;

                var stock;
                var map = {};

                for (i = 0, l = lines.length; i < l; i++) {
                    line = lines[i];
                    f3 = line.substr(0, 3);
                    if (set.has(f3)) {
                        stock = parse(line);
                        map[stock.id] = stock;
                        // console.log(stock);
                    }
                }

                var stocks = [];
                var code;
                for (i = 0, l = codes.length; i < l; i++) {
                    code = codes[i];
                    if (map.hasOwnProperty(code)) {
                        stocks.push(map[codes[i]]);
                    }
                }

                if (APP.owner)
                    APP.stock.stocks = updateStock(APP.stock.stocks, stocks);
            })
        }, 1000);
    });

    return {
        reload: reload
    };
}());