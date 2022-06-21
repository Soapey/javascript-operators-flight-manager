function Prices() {
    function calculateFinalPrice(basePrice, passengerVariation, flightVariation) {
        let finalPrice = basePrice;
        finalPrice += (finalPrice * passengerVariation);
        finalPrice += (finalPrice * flightVariation);

        return finalPrice.toFixed(2);
    }

    return {calculateFinalPrice};
}

module.exports = Prices();

