function getPriceColor(ceiling, floor, oldPrice, price) {
    if (price < 0) {
        return 'atoatc';
    }
    
    if (price > oldPrice){
        return price >= ceiling ? 'c' : 'i';
    } else if (price === oldPrice) {
        return 'e';
    } else {
        return price <= floor ? 'f' : 'd';
    }
}

function roundPrice(price){
    return Math.round(price * 1000)/1000;
}

function roundAmount(amount){
    return amount;
}