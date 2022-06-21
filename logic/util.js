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

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput};
}

module.exports = Util();

