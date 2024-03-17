const fibonacci = function(num) {
    if (num <0) return "OOPS"
    let fib_nums = [0,1,1]
    for (let i=1; i<num; i++){
        fib_nums.push(fib_nums[i]+ fib_nums[i+1])
    }
    return fib_nums[num]
};

// Do not edit below this line
module.exports = fibonacci;
