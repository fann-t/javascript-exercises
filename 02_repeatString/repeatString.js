const repeatString = function(mystr, count) {

    if (count < 0){
        return "ERROR";
    } else {
        let newstring = "";
        for (let i = 0; i < count; i++) {
            newstring += mystr;
        } 
        return newstring;
    }
};

// Do not edit below this line
module.exports = repeatString;
