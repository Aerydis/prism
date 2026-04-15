// useful elements
const shortElements = ["h1", "h2"];
const longElements = ["article", "main"];
const longElementsFallback = ["p"]

//existing elements
let shortElementsText = [];
let longElementsText = [];
let chosenLongElementsText = [];

//check for short elements 
for (let i = 0; i < (shortElements.length); i += 1) {
    if (document.querySelectorAll(shortElements[i])) {
        let foundElementTextList = document.querySelectorAll(shortElements[i]).innerText;
        if (foundElementTextList.length > 0) {
            shortElementsText.push(...foundElementTextList);
        }
    }
}

//check for long elements, and if nothing exists, check for long elements fallback
for (let i = 0; i < (longElements.length); i += 1) {
    if (document.querySelectorAll(longElements[i])) {
        let foundElementTextList = document.querySelectorAll(longElements[i]).innerText;
        if (foundElementTextList.length > 0) {
            longElementsText.push(...foundElementTextList);
        }
    }
}

if (longElementsText.length == 0) {
    for (let i = 0; i < (longElementsFallback.length); i += 1) {
        if (document.querySelectorAll(longElementsFallback[i])) {
            let foundElementTextList = document.querySelectorAll(longElementsFallback[i]).innerText;
            if (foundElementTextList.length > 0) {
                longElementsText.push(...foundElementTextList);
            }
        }
    }
}

//remove extra whitespace from elements
for (let i = 0; i < (shortElementsText.length); i += 1) {
    let cleanedText = shortElementsText[i].replace(/\s+/g, ' ').trim();
    shortElementsText[i] = cleanedText;
}
for (let i = 0; i < (longElementsText.length); i += 1) {
    let cleanedText = longElementsText[i].replace(/\s+/g, ' ').trim();
    longElementsText[i] = cleanedText;
}

//sort long elements by length and only leave the longest ~3 
longElementsText.sort((a, b) => b.length - a.length);
if (longElementsText.length < 3) {
    chosenLongElementsText = longElementsText;
}
else {
    chosenLongElementsText.push(...longElementsText[0], ...longElementsText[1], ...longElementsText[2]);
}

//so first the selectors don't need angle brackets
//and .length is not a function so no brackets
//querySelectorAll() always returns a NodeList so the if statement is always truthy
//the sorting logic sorts ascending
//can't reassign a constant. use let or push or something

//algorithm has issues will fix later