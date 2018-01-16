// export function parseCafefStockData(data) {
//   const stockData = {}
//   data.forEach(item => {
//     const stock = mapDataToModel(item)
//     stockData[stock.code] = stock
//   })
//   return stockData
// }

// function mapDataToModel(data) {
//   const code = data.a
//   const value = {
//     code: data.a,
//     name: getStockInfo(code).companyName,
//     oldPrice: {
//       ceiling: data.c,
//       floor: data.d,
//       price: data.b,
//     },
//     stats: {
//       totalAmount: data.n * 10,
//       match: {
//         average: arr[0] === '10' ? parseFloat(arr[39]) : parseFloat(arr[9]),
//         high: parseFloat(arr[13]),
//         low: parseFloat(arr[14]),  
//       },
//       foreign: {
//         buy: parseInt(arr[37], 10),
//         sell: parseInt(arr[38], 10)
//       }
//     },
//     match: {
//       price: data.l,
//       amount: data.m * 10
//     },
//     buy: {
//       one: {
//         price: data.e,
//         amount: data.f * 10
//       },
//       two: {
//         price: data.g,
//         amount: data.h * 10
//       },
//       three: {
//         price: data.i,
//         amount: data.j * 10
//       }
//     },
//     sell: {
//       one: {
//         price: data.o,
//         amount: data.p * 10
//       },
//       two: {
//         price: data.q,
//         amount: data.r * 10
//       },
//       three: {
//         price: data.s,
//         amount: data.t * 10
//       }
//     }
//   }
  
  
//   return value
// }