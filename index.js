const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, func) {
    return func(drivers);
};
console.log(selectingDrivers);
console.log(fareDoubler(10)); 
console.log(fareTripler(10)); 
console.log(fareTripler(10)); 
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 

console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 
