const fs = require('fs');
const axios = require('axios');

const username = 'melbinproy2003';
const apiUrl = `https://api.github.com/users/${username}/repos`;

async function fetchRepoData() {
  try {
    const response = await axios.get(apiUrl);
    const repos = response.data;

    let readmeContent = `
# Hi there, I'm Melbin P Roy 👋

<p align="center">
  <a href="https://img.shields.io/badge/Pronouns-He%2FHim-blue" alt="Pronouns: He/Him">
    <img src="https://img.shields.io/badge/Pronouns-He%2FHim-blue?style=for-the-badge" />
  </a>
  <a href="https://img.shields.io/badge/Interests-Coding%2C%20Open%20Source%2C%20Tech-brightgreen" alt="Interests: Coding, Open Source, Tech">
    <img src="https://img.shields.io/badge/Interests-Coding%2C%20Open%20Source%2C%20Tech-brightgreen?style=for-the-badge" />
  </a>
  <a href="https://img.shields.io/badge/Currently%20Learning-Advanced%20Web%20Development-yellow" alt="Currently Learning: Advanced Web Development">
    <img src="https://img.shields.io/badge/Currently%20Learning-Advanced%20Web%20Development-yellow?style=for-the-badge" />
  </a>
</p>

## 🔥 Streak Stats

<div align="center">
  <a href="https://github.com/${username}">
    <picture>
      <source height="190em" media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=6&theme=dark">
      <img height="190em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=6&theme=dracula" alt="Top Languages"/>
    </picture>
  </a>
  <a href="https://git.io/streak-stats">
    <img src="https://github-readme-streak-stats-gray-two.vercel.app?user=${username}&theme=dark" alt="Github Streak" height="190em"/>
  </a>
</div>

## 🚀 My Works

### Projects

${repos.map(repo => `- [${repo.name}](${repo.html_url}): ${repo.description || 'No description'}`).join('\n')}

## 🛠 Technologies Used

<div align="center">
  <img src="https://skillicons.dev/icons?i=${Array.from(new Set(repos.map(repo => repo.language && repo.language.toLowerCase()).filter(Boolean))).join(',')}" alt="Skills Icons"/>
</div>

## 📫 Let's Connect!

<p align="center">
  <a href="mailto:melbinproy76@gmail.com">
    <img src="https://img.shields.io/badge/-Email-%23EA4335.svg?style=plastic&logo=gmail&logoColor=white" alt="Email">
  </a>
  <a href="https://www.linkedin.com/in/melbin-p-roy">
    <img src="https://img.shields.io/badge/-LinkedIn-blue.svg?style=plastic&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
</p>
`;

    fs.writeFileSync('README.md', readmeContent);
  } catch (error) {
    console.error('Error fetching repo data:', error);
  }
}

fetchRepoData();
