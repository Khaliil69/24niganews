const API_KEY = "76efc73f36e04a35a61bf065f14405cd";
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const newsContainer = document.getElementById("newsContainer");
const refreshBtn = document.getElementById("refreshBtn");

async function fetchNews() {
  newsContainer.innerHTML = "<p>Loading latest news...</p>";
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.articles && data.articles.length > 0) {
      newsContainer.innerHTML = "";
      data.articles.forEach((article, index) => {
        const articleElem = document.createElement("div");
        articleElem.classList.add("article");

        articleElem.innerHTML = `
          ${article.urlToImage ? `<img src="${article.urlToImage}" alt="News image">` : ""}
          <h2>${article.title}</h2>
          <p>${article.description || ""}</p>
          <footer>
            <button class="likeBtn" data-index="${index}">👍 Like</button>
            <button class="commentBtn" data-index="${index}">💬 Comment</button>
            <button class="shareBtn" data-url="${article.url}">🔗 Share</button>
          </footer>
          <div class="comments" id="comments-${index}"></div>
          <div class="comment-form" id="comment-form-${index}" style="display:none;">
            <input type="text" placeholder="Your name" id="name-${index}">
            <textarea placeholder="Write a comment..." id="text-${index}"></textarea>
            <button onclick="addComment(${index})">Post</button>
          </div>
        `;
        newsContainer.appendChild(articleElem);
      });

      setupButtons();
    } else {
      newsContainer.innerHTML = "<p>No news available right now.</p>";
    }
  } catch (error) {
    newsContainer.innerHTML = "<p>Error loading news.</p>";
    console.error(error);
  }
}

function setupButtons() {
  document.querySelectorAll(".likeBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      let likes = localStorage.getItem(`likes-${index}`) || 0;
      likes++;
      localStorage.setItem(`likes-${index}`, likes);
      btn.textContent = `👍 Like (${likes})`;
    });
  });

  document.querySelectorAll(".commentBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      const form = document.getElementById(`comment-form-${index}`);
      form.style.display = form.style.display === "none" ? "block" : "none";
    });
  });

  document.querySelectorAll(".shareBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.dataset.url;
      navigator.clipboard.writeText(url);
      alert("Article link copied!");
    });
  });
}

function addComment(index) {
  const name = document.getElementById(`name-${index}`).value || "Anonymous";
  const text = document.getElementById(`text-${index}`).value;
  if (!text.trim()) return;

  const commentsDiv = document.getElementById(`comments-${index}`);
  const commentElem = document.createElement("div");
  commentElem.classList.add("comment");
  commentElem.textContent = `${name}: ${text}`;
  commentsDiv.appendChild(commentElem);

  document.getElementById(`name-${index}`).value = "";
  document.getElementById(`text-${index}`).value = "";
}

refreshBtn.addEventListener("click", fetchNews);

fetchNews();
