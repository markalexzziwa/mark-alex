const form = document.getElementById('news-form');
const submittedNewsDiv = document.getElementById('submitted-news');
let submittedNews = [];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const author = document.getElementById('author').value;
    const news = {
        title,
        content,
        author,
    };
    submittedNews.push(news);
    displaySubmittedNews();
    form.reset();
});
function displaySubmittedNews() {
    submittedNewsDiv.innerHTML = '';
    submittedNews.forEach((news, index) => {
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
    <h2>${news.title}</h2>
    <p>${news.content}</p>
    <p>By ${news.author}</p>
`;
        submittedNewsDiv.appendChild(newsDiv);
    });
}