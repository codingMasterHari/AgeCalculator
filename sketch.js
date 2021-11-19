function setup() {
    createCanvas(300, 400);
    background("grey");
    let input, heading;
    input = createInput();
    input.position(150, 200);
    heading = createElement('h2', "Please enter the year that you were born in!");
    heading.position(100, 50);

    ageCalculator(2009, "January");
}

function draw() {
    
}

function ageCalculator(age, beforeAfter) {
    let currentYear = 2021;
    let ageOfPerson;
    
    if(beforeAfter == "January" || beforeAfter == "February" || beforeAfter == "March" || beforeAfter == "April" || beforeAfter == "May" || beforeAfter == "June" || beforeAfter == "July") {
        ageOfPerson = currentYear - age;
    } else {
        ageOfPerson = currentYear - age - 1;
    }

    let statement = "Your age is: ";
    let afterWordStatement = " years old";
    console.log(statement + ageOfPerson + afterWordStatement);
}

ageCalculator(2009, "January");