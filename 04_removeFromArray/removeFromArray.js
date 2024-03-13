const removeFromArray = function(list, element) {
    let newt
    if (arguments.length >2){
        for (let i = 1; i < arguments.length; i++ ){
        newt = list.filter((x)=>{ return x !==  arguments[i]})
        list = newt
        }
        return newt
    }
    else{
        newt = list.filter((x)=>{ return x !==  element})        
        return newt
    }
    
};

// Do not edit below this line
module.exports = removeFromArray;
