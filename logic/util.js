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

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}

module.exports = Util();

