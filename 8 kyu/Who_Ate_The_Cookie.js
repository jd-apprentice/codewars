// https://www.codewars.com/kata/55a996e0e8520afab9000055/train/javascript

function cookie(x) {
    const baseMessage = "Who ate the last cookie? It was "
    const possiblePeople = {
        zach: "Zach",
        monica: "Monica",
        dog: "dog"
    }
    if (typeof x === "string") return baseMessage + possiblePeople.zach + "!";
    if (typeof x === "number" || typeof x === "float") return baseMessage + possiblePeople.monica + "!";
    return baseMessage + "the " + possiblePeople.dog + "!";
}

cookie("Ryan") // "Who ate the last cookie? It was Zach!"
cookie(2.3) // "Who ate the last cookie? It was Monica!"
cookie(true) // "Who ate the last cookie? It was the dog!"