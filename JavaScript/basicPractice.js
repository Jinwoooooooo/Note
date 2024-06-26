function add(x, y) {
    return x + y;
}
function minus(x, y) {
    return x - y;
}
function multi(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}

function rideTaxi(money) {
    if(money > 5000) {
        console.log("택시를 탄다.");
    } else if(money > 2000) {
        console.log("버스를 탄다.");
    } else {
        console.log("걸어간다.");
    }
}

rideTaxi(100);
rideTaxi(2000);
rideTaxi(6000);
console.log(add(6,2));
console.log(minus(6,2));
console.log(multi(6,2));
console.log(div(6,2));