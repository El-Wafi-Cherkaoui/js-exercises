const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !(typeof num1 == "number") || !(typeof num2 == "number")){
        return "ERROR"
    }
    else{
        let ma = Math.max(num1, num2)
        let mi = Math.min(num1, num2)
        let sum = 0
        for (let i = mi; i <= ma; i++){
            sum += i
        }
        return sum
    }
}
;

// Do not edit below this line
module.exports = sumAll;
