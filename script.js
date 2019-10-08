function filterByType(arguments) {
    var arr = Array.prototype.slice.call(arguments);
    var type = arr[0];
    var values = arr.slice(1);
    return getFilteredArray(type, values);
    
    function getFilteredArray(type, array) {
        var newArr = [];
    
        for (var i = 0; i < array.length; i++) {
            var currentValue = array[i];
    
            if (typeof (currentValue) === type) {
                newArr.push(currentValue);
            }
    
        }
    
        return newArr;
    }
}

var arr = ['string', 5, 9, true, 'test', 'simple', false, '5', 4];
console.log(filterByType(arr));