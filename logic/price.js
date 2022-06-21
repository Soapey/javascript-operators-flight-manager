function Prices() {
    function calculateFinalPrice(basePrice, percentPassengerType, percentFlightType) {
        let finalPrice = basePrice;

        finalPrice *= 1+percentPassengerType/100;
        finalPrice *= 1+percentFlightType/100;

        return finalPrice.toFixed(2);
    }
    return {calculateFinalPrice};
}

module.exports = Prices();

