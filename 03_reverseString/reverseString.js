const reverseString = function(text) {
    let list = []
    for (let i = 0; i<text.length; i++){
        list[i] = text[i]
    }
    list = list.reverse()
    let ne_txt = ""
    for (let i = list.length-1; i>= 0; i--){
        ne_txt += text[i]
    }
    return ne_txt
};

// Do not edit below this line
module.exports = reverseString;
