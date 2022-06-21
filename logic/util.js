"use strict"

function Util() {
    function calculateTotalDistributedPassengers(object) {
        return  object.vipPassengersWithBusinessSeats + 
                object.vipPassengersWithEconomySeats + 
                object.regularPassengersWithBusinessSeats + 
                object.regularPassengersWithEconomySeats;
    }

    function calculateTotalNumberOfPassengers(passengersArray) {
        let totalPassengers = 0;
        passengersArray.map(function(arrayCell) {totalPassengers += arrayCell});
        return totalPassengers;
    }

    function checkInput(input) {
        if (input == undefined || typeof(input) != 'number') {
            throw new Error("Input must be an integer");
        }
        return;
    }

    function calculateTotalDistance(distancesArray) {
        let totalDistance = 0;
        distancesArray.map(function(arrayCell) {
            if (arrayCell >= 0) {
                totalDistance += arrayCell;
            }
        });
        return totalDistance;
    }

    function calculateBonusPoints(businessSeatsDistancesArray, economySeatsDistancesArray, businessBonusPercent, economyBonusPercent) {
        let businessPoints = calculateTotalDistance(businessSeatsDistancesArray) * businessBonusPercent;
        let economyPoints = calculateTotalDistance(economySeatsDistancesArray) * economyBonusPercent;
        return businessPoints + economyPoints;
    }
 
    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};
}

module.exports = Util();

