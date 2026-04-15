// useful elements
const shortElements = ["<h1>", "<h2>"];
const longElements = ["<article>", "<main>", "<p>"];

//existing elements
const shortElementsText = [];
const longElementsText = [];
const chosenLongElementsText = [];

//check for the elements (short elements first and then long elements).
for (let i = 0; i < (shortElements.length()); i += 1) {
    if (document.querySelectorAll(shortElements[i])) {
        const foundElementList = document.querySelectorAll(shortElements[i]);
        shortElementsText.push(foundElementList);
    }
}
for (let i = 0; i < (longElements.length()); i += 1) {
    if (document.querySelectorAll(longElements[i])) {
        const foundElementList = document.querySelectorAll(longElements[i]);
        longElementsText.push(foundElementList);
    }
}

//remove extra whitespace from elements
for (let i = 0; i < (shortElementsText.length()); i += 1) {
    const cleanedText = shortElementsText[i].replace(/\s+/g, ' ').trim();
    shortElementsText[i] = cleanedText;
}
for (let i = 0; i < (longElementsText.length()); i += 1) {
    const cleanedText = longElementsText[i].replace(/\s+/g, ' ').trim();
    longElementsText[i] = cleanedText;
}

//sort long elements by length and only leave the longest ~3 
longElementsText.sort((a, b) => a.length - b.length);
if (longElementsText.length() < 3) {
    chosenLongElementsText = longElementsText;
}
else {
    chosenLongElementsText.push(longElementsText[0], longElementsText[1], longElementsText[2]);
}