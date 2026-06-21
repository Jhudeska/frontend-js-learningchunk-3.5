console.log("Het script draait");

let out = "";

// 1. Sla het ingevoerde service-type op.
const chosenService = "Uber Black";

// 2. Sla het ingevoerde km's op
const chosenKm =  23;

// 3. Is het ingevoerde type gelijk aan "Uber X"?
//    Vermenigvuldig de km dan met €2.
if(chosenService == "Uber X"){
    console.log("De gekozen service is Uber");
    output =  chosenKm * 2;

// 4. Is het ingevoerde type gelijk aan "Uber Black"?
//    Vermenigvuldig de km dan met €5.
}else if(chosenService == "Uber Black"){
    console.log("De gekozen service is Uber X");
    output =  chosenKm * 5;

// 5. Is het ingevoerde type gelijk aan "Uber Van"?
//    Vermenigvuldig de km dan met €4.
}else if(chosenService == "Uber Van") {
    console.log("De gekozen service is Uber Van");
    output =  chosenKm * 4;
}else {
    console.log("De gekozen service is Uber is niet geldig!");
}

// 6. Log uitkomst in console
console.log(output);





