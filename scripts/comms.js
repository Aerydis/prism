let promptPart1 = `You are an information extraction system.

Given a news article, extract:

- the main topic
- key entities (people, places, organizations)
- 3-5 search queries to find related articles
- the general stance/frame (e.g. policy, conflict, economic impact)

Return ONLY valid JSON in this format:

{
  "topic": "...",
  "entities": ["...", "..."],
  "queries": ["...", "..."],
  "stance_or_frame": "..."
}

Rules:
- Be concise
- Do not summarize the article
- Do not include explanations`


//receive object from get_text.js
window.addEventListener("original article information", (e) => {
    console.log('Signal received');
    let originalArticleInfo = e.info //originalArticleInfo is a class
}) 


//complete promptPart2
let promptPart2 = `Article title: ${originalArticleInfo.title},
Article headers: ${originalArticleInfo.headers},
Article body text: ${originalArticleInfo.body}`