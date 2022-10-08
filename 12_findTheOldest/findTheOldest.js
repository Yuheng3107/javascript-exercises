const findTheOldest = function(people) {

    const oldest = people.reduce((oldest, person) => {
        let date = new Date();
        let age;
        let oldest_age;
        if (!person.yearOfDeath) {
             age = date.getFullYear() - person.yearOfBirth;
        }
        else {age = person.yearOfDeath - person.yearOfBirth;}

        if (!oldest.yearOfDeath) {
             oldest_age = date.getFullYear() - oldest.yearOfBirth;
        }
        else {oldest_age = oldest.yearOfDeath - oldest.yearOfBirth};

        if (age > oldest_age) return person;
        else return oldest;
    }, people[0]);
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
