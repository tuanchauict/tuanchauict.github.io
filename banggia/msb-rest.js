/**
 * Created by tuanchau on 6/30/17.
 */


(function(){
    document.cookie = 'LoginPriceBoard=Remember=360316;';
    var parse = function (line) {
        console.log(line);

        return {
            id: '00' + i,
            name: 'Hoang Anh Gia Lai',
            price0: {
                ceil: 9,
                floor: 8,
                reference: 8.5
            },
            live: {
                match: {
                    price: 9,
                    volume: 10000
                },
                buy: [
                    {
                        price: 8.5,
                        volume: 1000
                    },
                    {
                        price: 8.2,
                        volume: 1000
                    },
                    {
                        price: 9,
                        volume: 1000
                    }
                ],
                sell: [
                    {
                        price: 9,
                        volume: 1000
                    },
                    {
                        price: 9,
                        volume: 1000
                    },
                    {
                        price: 9,
                        volume: 1000
                    }
                ],
                stats: {
                    totalVolume: 90000,
                    high: 9,
                    low: 8,
                    average: 8.5
                },
                foreign: {
                    buyVolume: 144,
                    buyRoom: 4,
                    sellAmount: 0,
                    sellRoom: 1
                }
            }

        }
    };


    get(Url.mbsXHR.toUrl(Url.mbsXHR.full, storage.codes), function(text){
        var lines = text.split(/[|#]/);
        var set = new Set();
        var codes = storage.codes;
        console.log(codes);
        for(var i = 0; i < codes.length; i++){
            set.add(codes[i]);
        }
        console.log(set);
        var line;
        var f3;
        storage.stockCodes = [];
        var stocks = storage.stockCodes;
        for(var i = 0, l = lines.length; i < l; i++){
            line = lines[i];
            f3 = line.substr(0, 3);
            console.log(f3, line);
            if(set.has(f3)){
                stocks.push(parse(line));
            }
        }
    });

}());