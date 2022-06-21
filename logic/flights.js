function Flights() {

    function calculateNumberOfFlights(passengers, capacity) {

        if (passengers < 0) {
            throw new Error("The number of passengers must be a positive integer value");
        }

        if (capacity < 0) {
            throw new Error("The capacity of the flight must be a positive integer value");
        }

        return Math.ceil(passengers/capacity);
    }

    function checkAircraftRevision(distanceLimit, distancesArray) {
        let totalDistance = 0;
        distancesArray.map(function(arrayCell) {totalDistance += arrayCell;});
    
        if (totalDistance <= (distanceLimit/2)) {
            return "The revision needs to be done within the next 3 months";
        }
        else if (totalDistance > (distanceLimit*0.5) && totalDistance < (distanceLimit*0.75)) {
            return "The revision needs to be done within the next 2 months";
        }
        else if (totalDistance > (distanceLimit*0.75) && totalDistance <= distanceLimit) {
            return "The revision needs to be done within the next month";
        }
        else if (totalDistance > distanceLimit) {
            throw new Error("Total distance (" + totalDistance + ") exceeds distance limit (" + distanceLimit + ")");
        } 
    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();