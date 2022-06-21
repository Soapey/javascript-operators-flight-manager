function Prices() {
    function calculateFinalPrice(basePrice, percentPassengerType, percentFlightType) {
        let finalPrice = basePrice;

        finalPrice *= 1+percentPassengerType/100;
        finalPrice *= 1+percentFlightType/100;

        return finalPrice.toFixed(2);
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {

        let percentPassengerType = 0;
        if (passengerType.toLowerCase() == 'vip') {
            percentPassengerType = 5;
        }
        else if (passengerType.toLowerCase() == 'regular') {
            percentPassengerType = -5;
        }

        let percentFlightType = 0;
        if (flightType.toLowerCase() == 'economy') {
            percentFlightType = -3;
        }
        else if (flightType.toLowerCase() == 'business') {
            percentFlightType = 10;
        }

        return calculateFinalPrice(basePrice, percentPassengerType, percentFlightType);
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice};
}

module.exports = Prices();

