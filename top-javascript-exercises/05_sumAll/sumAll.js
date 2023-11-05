const { run } = require("jest-cli");

const sumAll = function(start, end) {
    if (
        start < 0 ||
        end < 0 ||
        typeof(start) != "number" ||
        typeof(end) != "number"
    ) {
        return "ERROR";
    }
    if (end < start) {
        start += end;
        end = start - end;
        start -= end;
    }
    let runningTotal = 0
    for (let i = start; i <= end; i++){
        runningTotal += i;
    }
    return runningTotal;
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
