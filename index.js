// Code your solution in this file!
  function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue-42);
  }

  function distanceFromHqInFeet(someValue) {
  return (264 * distanceFromHqInBlocks(someValue));
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

  function distanceTravelledInFeet(start, destination) {
    return (264 * Math.abs(start-destination));
    //returns the number of feet traveled
  }

   function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return 0;
    }
    else if (distance < 2000) {
        return ((distance-400)*.02);
    }
    else if (distance < 2500 && distance > 2000) {
        return 25;
    }
    else if (distance > 2500) {
        return "cannot travel that far";
    }
  }