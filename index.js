// Code your solution in this file!
//should return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = function (drivers){
    return(drivers.slice(0,2))
}
//should return an array of the last two drivers
const returnLastTwoDrivers = function (drivers){
    return(drivers.slice(-2))
}
//array containing two elements: the two functions that we previously defined
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
//a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly
function createFareMultiplier(integer){
    let fare;
    return(function (fare){
        let totalFare = fare*integer
        return totalFare
    })
}
//Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it
const fare = createFareMultiplier()
function fareDoubler(fare){
    return(fare*2)
}
//Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.
function fareTripler(fare){
    return(fare*3)
}
//function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers
function selectDifferentDrivers(drivers,selectingDrivers){ 
    if (selectingDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else if (selectingDrivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }else{
        return []
    }
}