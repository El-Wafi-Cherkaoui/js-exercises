const palindromes = function (text) {
    let symboles = [" ", "?", "!", ".", ","]
    let local_copy = text.toLowerCase().split('').filter((char)=>!symboles.includes(char)).join("")
    let rev_copy = local_copy.split('').reverse().join('') 
    console.log(local_copy, rev_copy)
    if (local_copy == rev_copy) return true
    else return false
};

// Do not edit below this line
module.exports = palindromes;
