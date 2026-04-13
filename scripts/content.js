// ERT: Estimated Reading Time (I am lazy)

const article = document.querySelector("article");
const h1 = document.querySelector("h1");


function renderERT() {
    if (!article || !h1) {
        return;
    }

    const wordCount = article.textContent.split(" ").length;
    const ERT = Math.round(wordCount / 400);

    const ERTBox = document.createElement('div');
    ERTBox.textContent = `${ERT} min read`;

    h1.insertAdjacentElement("afterend", ERTBox)
}

renderERT();