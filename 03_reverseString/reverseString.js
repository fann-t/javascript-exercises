const reverseString = function(s) {
    let newstr = "";
    for (let i = 0; i < s.length; i++){
        newstr = s[i] + newstr;
    }
    return newstr;
};

// Do not edit below this line
module.exports = reverseString;
