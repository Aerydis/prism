// ====== VARIABLES ======
//order matters (checking will happen in order)

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
    let shortElementNodes = document.querySelectorAll(shortElements[i]);
    for (let j = 0; j < (shortElementNodes.length); j += 1) {
        shortElementsText.push(shortElementNodes[j].textContent);
    }
}

//check for long elements and store any text(if available) at longElementsText
//if one long element is found, do not check for the other long elements
for (let i = 0; i < (longElements.length); i += 1) {
    if (longElementsText.length == 0) {
        let longElementNodes = document.querySelectorAll(longElements[i]);
        for (let j = 0; j < (longElementNodes.length); j += 1) {
            longElementsText.push(longElementNodes[j].textContent);
        }
    }
}

//and if nothing exists, check for long elements fallback and do the same. set longElementsFallbackUsed to true.
//i know this could have been merged with the earlier paragraph but like that's too complicated for my tired soul
if (longElementsText.length == 0) {
    longElementsFallbackUsed = true;
    for (let i = 0; i < (longElementsFallback.length); i += 1) {
        let longElementNodes = document.querySelectorAll(longElementsFallback[i]);
        for (let j = 0; j < (longElementNodes.length); j += 1) {
            longElementsText.push(longElementNodes[j].textContent);
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
            chosenLongElementsText.push(longElementsText[i]);
        }
    }
}
else {
    let totalCharacterCount = 0;
    let wordCount = 0;
    for (let i = 0; i < (longElementsText.length); i += 1) {
        wordCount = longElementsText[i].length;
        if ((totalCharacterCount + wordCount) < 2000) {
            chosenLongElementsText.push(longElementsText[i]);
            totalWordCount += wordCount;
        }
        else { //if (totalWordCount + wordCount >= 2000)
            chosenLongElementsText.push(longElementsText[i].slice(0, 2000 - totalWordCount))
            totalCharacterCount += longElementsText[i].slice(0, (2000 - totalWordCount));
        }
    }
}
