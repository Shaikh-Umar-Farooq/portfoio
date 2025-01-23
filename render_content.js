document.addEventListener('DOMContentLoaded', () => {
    // Theme
    const themeTemplate = document.getElementById('theme-template');
    const themeClone = themeTemplate.content.cloneNode(true);
    document.getElementById('themeElement').appendChild(themeClone);

    // Navbar
    const navbarTemplate = document.getElementById('navbar-template');
    const navbarClone = navbarTemplate.content.cloneNode(true);
    navbarClone.querySelector('.myimage img').src = portfolioData.navbar.image;
    navbarClone.querySelector('.white').textContent = portfolioData.navbar.name;
    navbarClone.querySelector('.designation').textContent = portfolioData.navbar.designation;
    navbarClone.querySelector('.button').onclick = () => location.href = `mailto:${portfolioData.navbar.email}`;
    document.getElementById('navbarContainer').appendChild(navbarClone);

    // Experience
    const experienceTemplate = document.getElementById('experience-template');
    const experienceContainer = document.querySelector('.experience_content');
    portfolioData.experience.forEach(exp => {
        const expClone = experienceTemplate.content.cloneNode(true);
        expClone.querySelector('.title').textContent = exp.title;
        const achievementsDiv = expClone.querySelector('.achievements');
        exp.achievements.forEach(achievement => {
            const p = document.createElement('p');
            p.textContent = achievement;
            achievementsDiv.appendChild(p);
        });
        expClone.querySelector('.company').textContent = exp.company;
        expClone.querySelector('.duration').textContent = exp.duration;
        experienceContainer.appendChild(expClone);
    });

    // About Me
    const aboutMeTemplate = document.getElementById('aboutme-template');
    const aboutMeClone = aboutMeTemplate.content.cloneNode(true);
    aboutMeClone.querySelector('.aboutme_content').textContent = portfolioData.aboutMe;
    document.querySelector('#words .content_overflow').appendChild(aboutMeClone);

    // What I Do
    const whatidoTemplate = document.getElementById('whatido-template');
    const particleContainer = document.getElementById('particle-container');
    portfolioData.whatIDo.forEach(item => {
        const particleClone = whatidoTemplate.content.cloneNode(true);
        particleClone.querySelector('.particle').textContent = item;
        particleContainer.appendChild(particleClone);
    });

    // Projects
    const projectTemplate = document.getElementById('project-template');
    const projectContainer = document.querySelector('.project_content');
    portfolioData.projects.forEach(project => {
        const projectClone = projectTemplate.content.cloneNode(true);
        projectClone.querySelector('img').src = project.image;
        projectClone.querySelector('.title').textContent = project.title;
        projectClone.querySelector('.description').textContent = project.description;
        projectClone.querySelector('.project_card').onclick = () => location.href = project.link;
        projectContainer.appendChild(projectClone);
    });

    // Skills
    const skillTemplate = document.getElementById('skill-template');
    const skillContainer = document.querySelector('.skillcontainer');
    portfolioData.skills.forEach(skill => {
        const skillClone = skillTemplate.content.cloneNode(true);
        skillClone.querySelector('.skillcard').textContent = skill;
        skillContainer.appendChild(skillClone);
    });

    // Education
    const educationTemplate = document.getElementById('education-template');
    const educationContainer = document.querySelector('.education_content');
    portfolioData.education.forEach(edu => {
        const eduClone = educationTemplate.content.cloneNode(true);
        eduClone.querySelector('.title').textContent = edu.title;
        eduClone.querySelector('.institution').textContent = edu.institution;
        eduClone.querySelector('.duration').textContent = edu.duration;
        educationContainer.appendChild(eduClone);
    });

    // CTA
    const ctaTemplate = document.getElementById('cta-template');
    const ctaContainer = document.querySelector('#cta .content_overflow');
    portfolioData.cta.forEach(item => {
        const ctaClone = ctaTemplate.content.cloneNode(true);
        ctaClone.querySelector('span').textContent = item.text;
        const button = ctaClone.querySelector('.button');
        button.onclick = () => {
            if (item.text === "Download CV") {
                location.href = item.link;
                button.download = true;
            } else {
                window.location.href = item.link;
            }
        };
        ctaContainer.appendChild(ctaClone);
        if (portfolioData.cta.indexOf(item) !== portfolioData.cta.length - 1) {
            ctaContainer.appendChild(document.createElement('br'));
        }
    });

    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Initialize clock
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            timeZone: 'Asia/Kolkata',
            hour12: true,
            hour: 'numeric',
            minute: '2-digit',
        });
        document.getElementById('clocka').textContent = timeString;
    }
    
    updateClock();
    setInterval(updateClock, 1000);

    // Theme functionality
    function setMode(mode) {
        const linkElement = document.getElementById('themeCSS');
        if (mode === 'dark') {
            linkElement.href = 'style.css';
        } else if (mode === 'light') {
            linkElement.href = 'light.css';
        } else if (mode === 'color') {
            linkElement.href = 'color.css';
        }
    }

    const themeElement = document.getElementById('themeElement');
    const themeTitle = document.querySelector('.theme-title');
    const darkModeBtn = document.getElementById('darkModeBtn');
    const lightModeBtn = document.getElementById('lightModeBtn');
    const colorModeBtn = document.getElementById('colorModeBtn');
    const myImage = document.querySelector('.myimage img');

    themeElement.addEventListener('click', function() {
        const themeBtn = this.querySelector('.theme-btn');
        themeBtn.style.display = themeBtn.style.display === 'flex' ? 'none' : 'flex';
    });

    // Theme button hover effects
    darkModeBtn.addEventListener('mouseover', () => themeTitle.textContent = 'Dark');
    darkModeBtn.addEventListener('mouseout', () => themeTitle.textContent = 'Switch Theme');
    lightModeBtn.addEventListener('mouseover', () => themeTitle.textContent = 'Light');
    lightModeBtn.addEventListener('mouseout', () => themeTitle.textContent = 'Switch Theme');
    colorModeBtn.addEventListener('mouseover', () => themeTitle.textContent = 'Color');
    colorModeBtn.addEventListener('mouseout', () => themeTitle.textContent = 'Switch Theme');

    // Theme switching with image changes
    darkModeBtn.addEventListener('click', () => {
        setMode('dark');
        myImage.src = './images/Cute Avatar.svg';
    });

    lightModeBtn.addEventListener('click', () => {
        setMode('light');
        myImage.src = './images/Cute Avatar2.svg';
    });

    colorModeBtn.addEventListener('click', () => {
        setMode('color');
        myImage.src = './images/Cute Avatar3.svg';
    });
});