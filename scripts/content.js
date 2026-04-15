// ====== VARIABLES ======

// useful elements
const shortElements = ["h1", "h2"];
const longElements = ["article", "main"];
const longElementsFallback = ["p"]

//existing elements
let shortElementsText = [];
let longElementsText = [];
let chosenLongElementsText = [];

//useful variables
let longElementsFallbackUsed = false;



// ====== GATHERING TEXT =======

//check for short elements and store any text(if available) at shortElementsText
for (let i = 0; i < (shortElements.length); i += 1) {
    var existingElements = [];
    existingElements.push(document.querySelectorAll(shortElements));
    //get all text from existing elements
    for (let j = 0; j < (existingElements); j += 1) {
        shortElementsText.push(existingElements[j].textContent);
    }
}

//check for long elements and store any text(if available) at longElementsText
for (let i = 0; i < (longElements.length); i += 1) {
    var existingElements = [];
    existingElements.push(document.querySelectorAll(longElements[i]));
    //get all text from existing elements
    for (let j = 0; j < (existingElements); j += 1) {
        longElementsText.push(existingElements[j].textContent);
    }
}

//and if nothing exists, check for long elements fallback and do the same. set longElementsFallbackUsed to true.
//i know this could have been merged with the earlier paragraph but like that's too complicated for my tired soul
if (longElementsText.length == 0) {
    longElementsFallbackUsed = true;
    for (let i = 0; i < (longElementsFallback.length); i += 1) {
        var existingElements = [];
        existingElements.push(document.querySelectorAll(longElementsFallback[i]));
        //get all text from existing elements
        for (let j = 0; j < (existingElements); j += 1) {
            longElementsText.push(existingElements[j].textContent);
        }
    }
}



// ====== CLEAN ======

//remove extra whitespace from elements
for (let i = 0; i < (shortElementsText.length); i += 1) {
    let cleanedText = shortElementsText[i].replace(/\s+/g, ' ').trim();
    shortElementsText[i] = cleanedText;
}
for (let i = 0; i < (longElementsText.length); i += 1) {
    let cleanedText = longElementsText[i].replace(/\s+/g, ' ').trim();
    longElementsText[i] = cleanedText;
}



// ====== SELECT ======

//if fallback used, sort long elements by length and only leave the longest ~3 
//if fallback not used, get first 2000 characters of text
if (longElementsFallbackUsed == true) {
    longElementsText.sort((a, b) => b.length - a.length);
    if (longElementsText.length < 3) {
        chosenLongElementsText = longElementsText;
    }
    else {
        for (let i = 0; i < 3; i += 1) {
            chosenLongElementsText.push(longElementsText[i])
        }
    }
}
else {
    for (let i = 0; i < 2000; i += 1) {
        chosenLongElementsText.push(longElementsText[0][i])
    }
}
