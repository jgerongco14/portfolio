function renderSkills() {
  const skillsContainer = document.getElementById("skills-container");
  if (!skillsContainer || !portfolioData.skills) {
    console.error("Skills container or data not found");
    return;
  }

  let skillsHTML = "";

  Object.entries(portfolioData.skills).forEach(([category, skills]) => {
    skillsHTML += `
      <div class="skills-category" data-aos="fade-up">
        <h4><i class="fas fa-code me-2"></i>${category}</h4>
        <div class="row">
    `;

    skills.forEach((skill, index) => {
      skillsHTML += `
        <div class="col-lg-4 col-md-6 mb-3">
          <div class="skill-item" data-aos="fade-up" data-aos-delay="${index * 50}">
            <div class="skill-header">
              <img src="${skill.logo}" alt="${skill.name}" class="skill-logo" onerror="this.style.display='none'">
              <div class="flex-grow-1">
                <h6 class="skill-name">${skill.name}</h6>
              </div>
              <span class="skill-percentage">${skill.level}%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-bar" data-level="${skill.level}"></div>
            </div>
          </div>
        </div>
      `;
    });

    skillsHTML += `
        </div>
      </div>
    `;
  });

  skillsContainer.innerHTML = skillsHTML;
}

function renderProjects() {
  const projectsContainer = document.getElementById("projects-container");
  if (!projectsContainer || !portfolioData.projects) {
    console.error("Projects container or data not found");
    return;
  }

  let projectsHTML = "";

  portfolioData.projects.forEach((project, index) => {
    const techTags = project.technologies
      .map((tech) => `<span class="tech-tag">${tech}</span>`)
      .join("");

    // Use project.image as a relative path
    let projectImage = '';
    if (project.image) {
      projectImage = `<img src="${project.image}" alt="${project.title}" style="width:100%;height:180px;object-fit:cover;border-radius:8px 8px 0 0;">`;
    } else {
      let icon = 'fa-code';
      if (project.platform.toLowerCase() === 'mobile') {
        icon = 'fa-mobile-alt';
      } else if (project.platform.toLowerCase() === 'web') {
        icon = 'fa-globe';
      } else if (project.platform.toLowerCase() === 'desktop') {
        icon = 'fa-desktop';
      }
      projectImage = `<i class="fas ${icon}"></i>`;
    }

    projectsHTML += `
      <div class="col-lg-4 col-md-6 project-item mb-4" data-platform="${project.platform.toLowerCase()}" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="project-card" data-project-id="${project.id}" style="cursor:pointer;">
          <div class="project-image">
            ${projectImage}
          </div>
          <div class="project-content">
            <div class="project-platform">
              <i class="fas fa-tag me-2"></i>${project.platform}
            </div>
            <h5 class="project-title">${project.title}</h5>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">
              ${techTags}
            </div>
          </div>
        </div>
      </div>
    `;
  });

  projectsContainer.innerHTML = projectsHTML;

  // Add click event to open modal with full story
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project-id');
      const project = portfolioData.projects.find(p => p.id == projectId);
      if (!project) return;
      // Set modal content
      document.getElementById('projectModalLabel').textContent = project.title;
      document.getElementById('projectModalImg').src = project.image || '';
      document.getElementById('projectModalImg').alt = project.title;
      document.getElementById('projectModalFullStory').innerHTML = `<p>${project.fullStory || project.description}</p>`;
      // Technologies used
      const techTags = (project.technologies || []).map(tech => `<span class="badge bg-primary me-1 mb-1">${tech}</span>`).join(' ');
      document.getElementById('projectModalTechnologies').innerHTML = techTags ? `<div class="mb-2"><strong>Technologies Used:</strong></div>${techTags}` : '';
      // Show modal (Bootstrap 5)
      const modal = new bootstrap.Modal(document.getElementById('projectModal'));
      modal.show();
    });
  });
}

function renderExperience() {
  const experienceContainer = document.getElementById("experience-container");
  if (!experienceContainer || !portfolioData.experience) {
    console.error("Experience container or data not found");
    return;
  }

  let experienceHTML = "";

  portfolioData.experience.forEach((exp, index) => {
    const techTags = exp.technologies
      .map((tech) => `<span class="tech-tag">${tech}</span>`)
      .join("");

    experienceHTML += `
      <div class="experience-item" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="experience-period">
          <i class="fas fa-calendar-alt me-2"></i>${exp.period}
        </div>
        <h5 class="experience-title">${exp.title}</h5>
        <p class="experience-company">
          <i class="fas fa-building me-2"></i>${exp.company}
        </p>
        <p class="experience-description">${exp.description}</p>
        <div class="experience-technologies">
          ${techTags}
        </div>
      </div>
    `;
  });

  experienceContainer.innerHTML = experienceHTML;
}

function renderEducation() {
  const educationContainer = document.getElementById("education-container");
  if (!educationContainer || !portfolioData.education) {
    console.error("Education container or data not found");
    return;
  }

  let educationHTML = "";

  portfolioData.education.forEach((edu, index) => {
    const achievementBadges = edu.achievements
      .map((achievement) => `<span class="achievement-badge">${achievement}</span>`)
      .join("");

    educationHTML += `
      <div class="col-12 mb-4">
        <div class="education-item" data-aos="fade-up" data-aos-delay="${index * 100}">
          <h5 class="education-degree">
            <i class="fas fa-graduation-cap me-2"></i>${edu.degree}
          </h5>
          <p class="education-institution">
            <i class="fas fa-university me-2"></i>${edu.institution}
          </p>
          <span class="education-period">
            <i class="fas fa-calendar me-2"></i>${edu.period}
          </span>
          <p class="mt-3">${edu.description}</p>
          <div class="achievements-list">
            ${achievementBadges}
          </div>
        </div>
      </div>
    `;
  });

  educationContainer.innerHTML = educationHTML;
}

function renderAchievements() {
  const achievementsContainer = document.getElementById("achievements-container");
  if (!achievementsContainer || !portfolioData.achievements) {
    console.error("Achievements container or data not found");
    return;
  }

  let achievementsHTML = "";

  portfolioData.achievements.forEach((achievement, index) => {
    // Icon based on category
    let icon = 'fa-trophy';
    if (achievement.category.toLowerCase().includes('academic')) {
      icon = 'fa-graduation-cap';
    } else if (achievement.category.toLowerCase().includes('leadership')) {
      icon = 'fa-users';
    } else if (achievement.category.toLowerCase().includes('competition')) {
      icon = 'fa-medal';
    }

    achievementsHTML += `
      <div class="col-lg-4 col-md-6 col-12 mb-4">
        <div class="achievement-item" data-aos="fade-up" data-aos-delay="${index * 100}">
          <h5 class="achievement-title">
            <i class="fas ${icon} me-2"></i>${achievement.title}
          </h5>
          <p class="achievement-category">
            <i class="fas fa-tag me-2"></i>${achievement.category}
          </p>
          <span class="achievement-year">
            <i class="fas fa-calendar me-2"></i>${achievement.year}
          </span>
          <p class="mt-3">${achievement.description}</p>
        </div>
      </div>
    `;
  });

  achievementsContainer.innerHTML = achievementsHTML;
}

function setupProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  if (!filterButtons.length || !projectItems.length) {
    console.warn("Filter buttons or project items not found");
    return;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      projectItems.forEach((item) => {
        if (filter === "all") {
          item.style.display = "block";
          item.style.opacity = "1";
          item.style.transform = "scale(1)";
        } else {
          const platform = item.getAttribute("data-platform");
          if (platform === filter) {
            item.style.display = "block";
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "scale(1)";
            }, 50);
          } else {
            item.style.opacity = "0";
            item.style.transform = "scale(0.8)";
            setTimeout(() => {
              item.style.display = "none";
            }, 300);
          }
        }
      });
    });
  });
}

function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress-bar");

  if (!skillBars.length) {
    console.warn("Skill progress bars not found");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const level = bar.getAttribute("data-level");
          setTimeout(() => {
            bar.style.width = level + "%";
          }, 200);
          observer.unobserve(bar);
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  skillBars.forEach((bar) => observer.observe(bar));
}

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      
      if (target) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

function setupNavbarScrollEffect() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(15, 23, 42, 0.98)";
      navbar.style.backdropFilter = "blur(20px)";
      navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
    } else {
      navbar.style.background = "rgba(15, 23, 42, 0.95)";
      navbar.style.backdropFilter = "blur(10px)";
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.2)";
    }
  });
}

function setupActiveNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentSection = entry.target.getAttribute('id');
          
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '-20% 0px -20% 0px'
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function addLoadingStates() {
  // Add loading animation to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'all 0.6s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

function handleImageErrors() {
  // Handle broken images gracefully
  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', function() {
      console.warn(`Image failed to load: ${this.src}`);
      this.style.display = 'none';
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("Initializing portfolio...");
  
  // Check if portfolioData exists
  if (typeof portfolioData === 'undefined') {
    console.error("portfolioData not found. Make sure data.js is loaded.");
    return;
  }

  try {
    // Render all sections
    renderSkills();
    renderProjects();
    renderExperience();
    renderEducation();
    renderAchievements();
    
    // Setup interactions
    setupProjectFilters();
    setupSmoothScrolling();
    setupNavbarScrollEffect();
    setupActiveNavigation();
    
    // Handle images
    handleImageErrors();
    
    // Animate skill bars after content is rendered
    setTimeout(() => {
      animateSkillBars();
      addLoadingStates();
    }, 500);
    
    console.log("Portfolio initialized successfully!");
    
  } catch (error) {
    console.error("Error initializing portfolio:", error);
  }
});

// Handle window resize
window.addEventListener('resize', function() {
  // Re-setup any responsive elements if needed
  setupProjectFilters();
});

// Add intersection observer for animations
function setupScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-aos]');
  
  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    }
  );

  animatedElements.forEach((el) => animationObserver.observe(el));
}

// Initialize scroll animations
window.addEventListener('load', setupScrollAnimations);