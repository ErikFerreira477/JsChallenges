//https://www.jschallenger.com/javascript-fundamentals/javascript-basics/sum-two-numbers-javascript
const sumTwoNumbers = (num1, num2) => {
    return (num1 + num2);
};

//https://www.jschallenger.com/javascript-fundamentals/javascript-basics/comparison-strict-equality
const comparisonOperators = (value1, value2) => {
    if (value1 === value2 && typeof value1 === typeof val2) {
        return true;
    }

    return false;
};

//https://www.jschallenger.com/javascript-fundamentals/javascript-basics/type-value-javascript
const getTypeOfValue = (value) => {
    return typeof value;
}

//https://www.jschallenger.com/javascript-fundamentals/javascript-basics/get-nth-character-string-javascript
const getCharOfString = (string, position) => {
    return (string.charAt(position));
}

//https://www.jschallenger.com/javascript-fundamentals/javascript-basics/remove-first-characters-string-javascript
const removeFirstNChars = (string, quantity) => {
    return (string.slice(quantity));
}

//https://www.jschallenger.com/javascript-fundamentals/javascript-basics/get-last-characters-string-javascript
const getLastThreeChars = (string) => {
    return (string.slice(-3));
}

//https://www.jschallenger.com/javascript-fundamentals/javascript-basics/get-first-characters-string-javascript
const getFirstThreeChars = (string) => {
    return (string.slice(0, 3));
}

//https://www.jschallenger.com/javascript-fundamentals/javascript-basics/extract-first-half-string-javascript
const getFirstHalfOfString = (string) => {
    return (string.slice(0, string.length / 2));
}

//https://www.jschallenger.com/javascript-fundamentals/javascript-basics/extract-first-half-string-javascript
const removeLastThreeCharOfString = (string) => {
    return (string.slice(0, string.length - 3));
}

//https://www.jschallenger.com/javascript-fundamentals/javascript-basics/return-percentage-of-number
const percentageOf = (value1, value2) => {
    return ((value2 / value1) * 100).toFixed(2)
}

//https://www.jschallenger.com/javascript-fundamentals/javascript-basics/basic-math-operators-javascript
const mathOperators = (value1, value2, value3, value4, value5, value6) => {
    return (((((value1 + value2) - value3) * value4) / value5) ** value6);
}

