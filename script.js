body {
  font-family: Arial, sans-serif;
  margin: 0;
  background: #f8fafc;
  color: #1e293b;
}

header {
  padding: 1rem;
  background: white;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

header h1 {
  margin: 0;
}

header p {
  color: #475569;
}

#refreshBtn {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: #0284c7;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

#refreshBtn:hover {
  background: #0369a1;
}

#newsContainer {
  display: grid;
  gap: 1rem;
  padding: 1rem;
}

.article {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.article img {
  max-width: 100%;
  border-radius: 4px;
}

.article h2 {
  margin: 0.5rem 0;
}

.article p {
  color: #475569;
}

.article footer {
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

button.likeBtn, button.commentBtn, button.shareBtn {
  border: none;
  background: #e2e8f0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}

.comments {
  margin-top: 0.5rem;
  border-top: 1px solid #e2e8f0;
  padding-top: 0.5rem;
}

.comment {
  font-size: 0.9rem;
  border-bottom: 1px solid #e2e8f0;
  padding: 0.25rem 0;
}

.comment-form {
  margin-top: 0.5rem;
}

.comment-form input, .comment-form textarea {
  width: 100%;
  margin-bottom: 0.25rem;
  padding: 0.25rem;
}

