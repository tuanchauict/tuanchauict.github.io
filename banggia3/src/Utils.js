export function createRows(model) {
  return model.codes.map(code => {
    if (code in model.data) {
      model.data[code].code = code;
      return model.data[code];
    } else {
      return {
        code,
        oldPrice: {},
        stats: {
          match: {},
          foreign: {}
        },
        match: {},
        buy: {
          one: {},
          two: {},
          three: {}
        },
        sell: {
          one: {},
          two: {},
          three: {}
        }
      }
    }
  })
}

export function getPriceColor(ceiling, floor, oldPrice, price) {
  if (price < 0) {
    return 'atoatc';
  }

  if (price > oldPrice) {
    return price >= ceiling
      ? 'c'
      : 'i';
  } else if (price === oldPrice) {
    return 'e';
  } else {
    return price <= floor
      ? 'f'
      : 'd';
  }
}

function formatNumber(number, fix) {
  if (number === undefined) {
    return ''
  }
  const newFix = fix === 0
    ? 1
    : fix;
  const formated = number
    .toFixed(newFix)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  return fix === 0
    ? formated.substr(0, formated.length - 2)
    : formated;
}

export function roundPrice(price) {
  return formatNumber(price, 2);
}

export function roundAmount(amount) {
  const s = formatNumber(amount * 10, 0);
  return s.substr(0, s.length - 1);
}

export function isSetsEqual(as, bs) {
  if (as.size !== bs.size) return false;
  for (var a of as) if (!bs.has(a)) return false;
  return true;
}

export function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj))
}