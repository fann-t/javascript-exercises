const sumAll = function(a) {
    let start = arguments[0];
    let end = arguments[1];

    if (typeof end === "number" && start > 0) {
        if (start > end){
            let tmp = start;
            start = end;
            end = tmp;
        }
        let sum = 0;
        for (let i = start ; i < end + 1; i++ ) {
            sum += i;
        }
        return sum;
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
