document.addEventListener('DOMContentLoaded', () => {
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

    // Cat magnetic following logic
    function initializeCatFollowing() {
        const navbar = document.querySelector('.navbar');
        const cat = document.querySelector('.cat');
        
        if (!navbar || !cat) return;
        
        navbar.addEventListener('mousemove', (e) => {
            const navbarRect = navbar.getBoundingClientRect();
            const cursorX = e.clientX - navbarRect.left;
            const navbarWidth = navbarRect.width;
            
            // Calculate relative position (0 to 1)
            const relativeX = Math.max(0, Math.min(1, cursorX / navbarWidth));
            
            // Map to cat movement range (-80px to +80px from center)
            const catOffset = (relativeX - 0.5) * 160;
            
            // Remove existing classes
            cat.classList.remove('walking-left', 'walking-right', 'idle');
            
            // Determine direction and add appropriate class
            if (catOffset < -10) {
                cat.classList.add('walking-left');
            } else if (catOffset > 10) {
                cat.classList.add('walking-right');
            } else {
                cat.classList.add('idle');
            }
            
            // Apply smooth magnetic movement
            cat.style.transform = `translateX(${catOffset}px) scaleX(${catOffset > 10 ? -1 : 1})`;
        });
        
        navbar.addEventListener('mouseleave', () => {
            // Cat returns to center when mouse leaves navbar
            cat.classList.remove('walking-left', 'walking-right');
            cat.classList.add('idle');
            cat.style.transform = 'translateX(0px) scaleX(1)';
        });
    }
    
    // Initialize cat following after a small delay to ensure DOM is ready
    setTimeout(initializeCatFollowing, 500);
});