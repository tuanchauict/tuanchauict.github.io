var stock = {
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