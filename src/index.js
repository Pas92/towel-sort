
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr2 = [];
    if (arguments.length == 0 || matrix.length == 0) {
        return arr2;
    } else {
        let arr = matrix.slice();

        for (i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                arr2.push(arr[i])
            } else {
                arr2.push(arr[i].reverse())
            }
        }
    
        return arr2.join().split(',')
    }
}
