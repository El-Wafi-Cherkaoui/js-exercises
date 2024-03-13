const palindromes = function (text) {
    let alphabits = []
    let row_text = ""
    // extract row text without spaces or ! , .  into array
    for (let i=0; i <text.length; i++){
        if (text[i]== " " || text[i]== "!" || text[i]== "."|| text[i]== ",") continue
        alphabits.push(text[i])
        row_text += text[i]
    }
    // reverse the order
    alphabits = alphabits.reverse()
    let output = ""
    // turn array into string
    for (let i=0 ; i <alphabits.length; i++){
        output += alphabits[i]
    }
    // compare the two 
    return output.toUpperCase() == row_text.toUpperCase()
};

// Do not edit below this line
module.exports = palindromes;
