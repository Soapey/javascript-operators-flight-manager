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
        let output = {
            vipBusiness: 0,
            vipEconomy: 0,
            regBusiness: 0,
            regEconomy: 0
        };

        for (let i = 1; i <= numVIPPassengers; i++) {
            if ((output.vipBusiness + output.regBusiness) < businessSeatsPerFlight) {
                output.vipBusiness += 1;
            }
            else if ((output.vipEconomy + output.regEconomy) < economySeatsPerFlight) {
                output.vipEconomy += 1;
            }
        }

        for (let i = 1; i <= numRegularPassengers; i++) {
            if ((output.vipBusiness + output.regBusiness) < businessSeatsPerFlight) {
                output.regBusiness += 1;
            }
            else if ((output.vipEconomy + output.regEconomy) < economySeatsPerFlight) {
                output.regEconomy += 1;
            }
        }

        return output;
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();
