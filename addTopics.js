const fetch = require('node-fetch'); // If using Node 18+, you can use global fetch

const token = 'YOUR_TOKEN_HERE'; // <-- Replace with your actual token!
const owner = 'GitJohnFis';
const repo = 'FiReFeast';

const topics = [
  "rpg",
  "javascript",
  "game",
  "text-adventure",
  "browser-game",
  "html",
  "css",
  "interactive-fiction",
  "adventure",
  "singleplayer",
  "role-playing-game"
];

(async () => {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/topics`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ names: topics })
  });
  const data = await response.json();
  console.log('Response:', data);
})();
