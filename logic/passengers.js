"use strict"

function Passengers() {
    function checkFlightCapacity(flightCapacity, passengerNumbers) {
        let totalPassengers = 0;
        passengerNumbers.map(function(arrayCell) {totalPassengers += arrayCell});

        if (totalPassengers <= flightCapacity) {
            return totalPassengers;
        }
        else if (totalPassengers > flightCapacity) {
            throw new Error("Total passengers (" + totalPassengers + ") exceeds flight capacity (" + flightCapacity + ")");
        }
    }

    function distributeAllSeatsToAllPassengers(numVIPPassengers, numRegularPassengers, numFlights, businessSeatsPerFlight, economySeatsPerFlight) {
        let businessSeats = numFlights * businessSeatsPerFlight;
        let economySeats = numFlights * economySeatsPerFlight;

        let vipPassengersWithBusinessSeats = 0;
        let vipPassengersWithEconomySeats = 0;
        let regularPassengersWithBusinessSeats = 0;
        let regularPassengersWithEconomySeats = 0;

        for (let i = 1; i <= numVIPPassengers; i++) {
            if ((vipPassengersWithBusinessSeats + regularPassengersWithBusinessSeats) < businessSeats) {
                vipPassengersWithBusinessSeats += 1;
            }
            else if ((vipPassengersWithEconomySeats + regularPassengersWithEconomySeats) < economySeats) {
                vipPassengersWithEconomySeats += 1;
            }
        }

        for (let i = 1; i <= numRegularPassengers; i++) {
            if ((vipPassengersWithBusinessSeats + regularPassengersWithBusinessSeats) < businessSeats) {
                regularPassengersWithBusinessSeats += 1;
            }
            else if ((vipPassengersWithEconomySeats + regularPassengersWithEconomySeats) < economySeats) {
                regularPassengersWithEconomySeats += 1;
            }
        }

        return {vipPassengersWithBusinessSeats, vipPassengersWithEconomySeats, regularPassengersWithBusinessSeats, regularPassengersWithEconomySeats};
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();
