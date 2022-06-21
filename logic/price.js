function Prices() {
    function calculateFinalPrice(basePrice, percentPassengerType, percentFlightType) {
        let finalPrice = basePrice;

        finalPrice *= 1+percentPassengerType/100;
        finalPrice *= 1+percentFlightType/100;

        return finalPrice.toFixed(2);
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {

        let percentPassengerType = 0;
        if (String.toLowerCase(passengerType) == 'vip') {
            percentPassengerType = 5;
        }
        else if (String.toLowerCase(passengerType) == 'regular') {
            percentPassengerType = -5;
        }

        let percentFlightType = 0;
        if (String.toLowerCase(flightType) == 'economy') {
            percentFlightType = -3;
        }
        else if (String.toLowerCase(flightType) == 'business') {
            percentFlightType = 10;
        }

        return calculateFinalPrice(basePrice, percentPassengerType, percentFlightType);
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice};
}

module.exports = Prices();

