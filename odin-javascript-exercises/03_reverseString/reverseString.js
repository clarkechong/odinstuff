const reverseString = function(phrase) {
    let buffer = [];
    for (let i = 0; i < phrase.length; i++){
        buffer[i] = phrase.charAt(phrase.length -1 -i);
    }
    return buffer.join("");
};

console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;
