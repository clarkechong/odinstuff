const repeatString = function(string, num) {
    if(num < 0) {return "ERROR"}
    let returnThis = '';
    for(let i = 0; i < num; i++){
        returnThis += string;
    }
    return returnThis;
};

// Do not edit below this line
module.exports = repeatString;
