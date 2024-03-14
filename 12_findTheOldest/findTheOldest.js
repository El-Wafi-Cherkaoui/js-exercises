const findTheOldest = function(array) {
    return array.reduce((theOldestPerson, current)=>{
        if (theOldestPerson.yearOfDeath == undefined) theOldestPerson.yearOfDeath = new Date().getFullYear()
        if (current.yearOfDeath == undefined) current.yearOfDeath = new Date().getFullYear()
        
        let current_age = current.yearOfDeath - current.yearOfBirth 
        let theOldestPerson_age = theOldestPerson.yearOfDeath - theOldestPerson.yearOfBirth
        
        if (current_age > theOldestPerson_age) return current
        return theOldestPerson
        }, array[0])
};

// Do not edit below this line
module.exports = findTheOldest;
