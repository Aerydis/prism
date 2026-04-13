function renderReadingTime(article) {
    if (!article) {
        return;
    }
}

const text = article.textContent;
const wordMatchRegExp = /[^\s]+/g
const words = text.matchAll(wordMatchRegExp)