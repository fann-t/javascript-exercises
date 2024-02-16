const removeFromArray = function(a) {
    let array = arguments[0];
    let remove = Array.prototype.slice.call(arguments, 1);

    for (let i = 0; i < remove.length; i++){
        while (array.includes(remove[i])){
            var index = array.indexOf(remove[i]);
            array.splice(index, 1);
        }
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
