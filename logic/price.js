function Prices() {
    function calculateFinalPrice(basePrice, passengerVariation, flightVariation) {
        let finalPrice = basePrice;
        finalPrice += (basePrice * passengerVariation);
        finalPrice += (basePrice * flightVariation);
        
        return finalPrice.toFixed(2);
    }

    return {calculateFinalPrice};
}

module.exports = Prices();

