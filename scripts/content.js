// ERT: Estimated Reading Time (I am lazy)

const wordCount = article.text.split(" ").length;
const ERT = wordCount / 400

const ERTbox = document.createElement('div')
ERTbox.textContent = `Estimated reading time: ${ERT}`

function renderERT() {
    if (!article) || (!h1) {
        return;
    }
}