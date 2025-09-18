// Render About, Skills, Education, Achievements from data.js
window.addEventListener('DOMContentLoaded', function() {
  if (!window.portfolioData) return;

  // About
  document.getElementById('about-main').innerHTML = `
    <h2 class="section-title">About Me</h2>
    <p>I am an IT professional with experience as a Programmer, Project Assistant, and Instructor. I have a strong background in software development, project coordination, and technology training, which allows me to contribute both technically and collaboratively within teams.</p>
    <p>My expertise includes developing web, desktop and mobile applications, assisting in project implementation, and mentoring students in IT fundamentals. I am eager to bring my adaptability, problem-solving skills, and passion for technology to an organization where I can contribute to innovative projects while continuing to grow professionally.</p>
  `;

  // Skills
  let skillsHTML = '<h2 class="section-title">Skills & Technologies</h2>';
  Object.entries(portfolioData.skills).forEach(([category, skills]) => {
    skillsHTML += `<h4>${category}</h4><ul>`;
    skills.forEach(skill => {
      skillsHTML += `<li>${skill.name} (${skill.level}%)</li>`;
    });
    skillsHTML += '</ul>';
  });
  document.getElementById('skills-section').innerHTML = skillsHTML;

  // Education
  let eduHTML = '<h2 class="section-title">Education</h2>';
  portfolioData.education.forEach(edu => {
    eduHTML += `<div><strong>${edu.degree}</strong> - ${edu.institution} <br><span>${edu.period}</span><br><em>${edu.description}</em></div><ul>`;
    edu.achievements.forEach(a => { eduHTML += `<li>${a}</li>`; });
    eduHTML += '</ul>';
  });
  document.getElementById('education-section').innerHTML = eduHTML;

  // Achievements
  let achHTML = '<h2 class="section-title">Achievements</h2><ul>';
  portfolioData.achievements.forEach(a => {
    achHTML += `<li><strong>${a.title}</strong> (${a.year}) - ${a.description}</li>`;
  });
  achHTML += '</ul>';
  document.getElementById('achievements-section').innerHTML = achHTML;
});
