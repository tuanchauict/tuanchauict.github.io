function makeSample(id){
    return {
        id: id,
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

    };
}

function makeDefault(){
    function makeSample(id){
        return {
            id: id,
            name: 'Hoang Anh Gia Lai',
            price0: {
                ceil: 0,
                floor: 0,
                reference: 0
            },
            live: {
                match: {
                    price: 0,
                    volume: 0,
                    priceUpdate: 0,
                    volumeUpdate: 0
                },
                buy: [
                    {
                        price: 0,
                        volume: 0,
                        priceUpdate: 0,
                        volumeUpdate: 0
                    },
                    {
                        price: 8.2,
                        volume: 1000,
                        priceUpdate: 0,
                        volumeUpdate: 0
                    },
                    {
                        price: 9,
                        volume: 1000,
                        priceUpdate: 0,
                        volumeUpdate: 0
                    }
                ],
                sell: [
                    {
                        price: 9,
                        volume: 1000,
                        priceUpdate: 0,
                        volumeUpdate: 0
                    },
                    {
                        price: 9,
                        volume: 1000,
                        priceUpdate: 0,
                        volumeUpdate: 0
                    },
                    {
                        price: 9,
                        volume: 1000,
                        priceUpdate: 0,
                        volumeUpdate: 0
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

        };
    }
}