function Prices() {
    function calculateFinalPrice(basePrice, passengerVariation, flightVariation) {
        return basePrice + (basePrice * passengerVariation) * basePrice + (basePrice * flightVariation) * (basePrice + (basePrice * passengerVariation) * basePrice);
    }

    return {calculateFinalPrice};
}

module.exports = Prices();

