console.log("Refactor code");


let output = "";

// 1. Sla het ingevoerde service-type op.
const chosenService1 = Object.freeze({
    UBER_BLACK: "UBER_BLACK",
    UBER_X: "UBER_X",
    UBER_VAN: "UBER_VAN"
});

let condition =  chosenService1.UBER_BLACK;

// 2. Sla het ingevoerde km's op
const chosenKm1 =  23;

// 3. Is het ingevoerde type gelijk aan "Uber X"?
//    Vermenigvuldig de km dan met €2.
switch(condition){
    case "UBER_X":
    console.log("De gekozen service is Uber");
    output =  chosenKm1 * 2;
    break;

// 4. Is het ingevoerde type gelijk aan "Uber Black"?
//    Vermenigvuldig de km dan met €5.
    case "UBER_BLACK":
        console.log("De gekozen service is Uber Black");
        output =  chosenKm1 * 5;
        break;

// 5. Is het ingevoerde type gelijk aan "Uber Van"?
//    Vermenigvuldig de km dan met €4.
    case "UBER_VAN":
        console.log("De gekozen service is Uber Van");
        output =  chosenKm1 * 4;
        break;
    default:
        console.log("De gekozen service is Uber is niet geldig!");
        output =  "";
        break;
}

// 6. Log uitkomst in console
console.log("Rit van " + output + " - bevestigen ?");





