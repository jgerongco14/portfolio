window.addEventListener('DOMContentLoaded', function() {
  if (!window.portfolioData) return;
  let skillsHTML = '';
  Object.entries(portfolioData.skills).forEach(([category, skills]) => {
    skillsHTML += `<h4>${category}</h4><ul>`;
    skills.forEach(skill => {
      skillsHTML += `<li>${skill.name} (${skill.level}%)</li>`;
    });
    skillsHTML += '</ul>';
  });
  document.getElementById('skills-container').innerHTML = skillsHTML;
});