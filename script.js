// function displayIST() {
//     const date = new Date();
//     const options = {
//         timeZone: 'Asia/Kolkata',
//         hour12: false,
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric'
//     };
//     const timeString = date.toLocaleTimeString('en-IN', options);
//     console.log(timeString);
// }

// setInterval(displayIST, 1000);
function displayTime() {
    const date = new Date();
    const options = {
        timeZone: 'Asia/Kolkata',
         hour12: true,
                hour: 'numeric',
                minute: 'numeric'
    };
    const timeString = date.toLocaleTimeString('en-IN', options);
    document.getElementById('clocka').textContent = timeString;
}

// Call displayTime function initially to show current time
displayTime();

// Update time every second
setInterval(displayTime, 1000);

// Array of skills
const skillsList = [
    'Wire-framing', 'Prototyping', 'ui','mobile app design','website design','User Research', 'Usability Testing',
    'Interaction Design', 'User Flow Design', 'Information Architecture','ux',
    'C/C++','User Interface Design',  'JavaScript', 'HTML', 'CSS','React js','node js', 'Express js',
    'MongoDB', 'MySQL', 'Analytics'
  ];
  
  // Function to add skills as skillcard divs to the content_overflow div
  function addSkills() {
    const contentOverflow = document.querySelector('#skills .content_overflow .skillcontainer');
  
    skillsList.forEach(skill => {
      const skillCard = document.createElement('div');
      skillCard.className = 'skillcard';
      skillCard.textContent = skill;
      contentOverflow.appendChild(skillCard);
    });
  }
  
  // Call the function to add skills to the content_overflow div
  addSkills();


  const currentYear = new Date().getFullYear();
  document.getElementById('currentYear').textContent = currentYear;

  // Function to set the selected mode
function setMode(mode) {
    const linkElement = document.getElementById('themeCSS');
  
    // Update href based on the selected mode
    if (mode === 'dark') {
      linkElement.href = 'style.css'; // Replace 'dark.css' with your dark mode stylesheet path
    } else if (mode === 'light') {
      linkElement.href = 'light.css'; // Replace 'light.css' with your light mode stylesheet path
    } else if (mode === 'color') {
      linkElement.href = 'color.css'; // Replace 'color.css' with your color mode stylesheet path
    }
  }
  
  // Event listeners for mode selection buttons
  document.getElementById('darkModeBtn').addEventListener('click', function() {
    setMode('dark');
  });
  
  document.getElementById('lightModeBtn').addEventListener('click', function() {
    setMode('light');
  });
  
  document.getElementById('colorModeBtn').addEventListener('click', function() {
    setMode('color');
  });

const themeElement = document.getElementById('themeElement');

themeElement.addEventListener('click', function() {
  const themeBtn = this.querySelector('.theme-btn');
  themeBtn.style.display = themeBtn.style.display === 'flex' ? 'none' : 'flex';
});


const themeTitle = document.querySelector('.theme-title');
const darkModeBtn = document.getElementById('darkModeBtn');
const lightModeBtn = document.getElementById('lightModeBtn');
const colorModeBtn = document.getElementById('colorModeBtn');

darkModeBtn.addEventListener('mouseover', function() {
  themeTitle.textContent = 'Dark';
});

darkModeBtn.addEventListener('mouseout', function() {
  themeTitle.textContent = 'Switch Theme';
});

lightModeBtn.addEventListener('mouseover', function() {
  themeTitle.textContent = 'Light';
});

lightModeBtn.addEventListener('mouseout', function() {
  themeTitle.textContent = 'Switch Theme';
});

colorModeBtn.addEventListener('mouseover', function() {
  themeTitle.textContent = 'Color';
});

colorModeBtn.addEventListener('mouseout', function() {
  themeTitle.textContent = 'Switch Theme';
});

const myImage = document.querySelector('.myimage img');

darkModeBtn.addEventListener('click', function() {
  myImage.src = './images/Cute Avatar.svg'; // Change image source for dark mode
});

lightModeBtn.addEventListener('click', function() {
  myImage.src = './images/Cute Avatar2.svg'; // Change image source for light mode
});

colorModeBtn.addEventListener('click', function() {
  myImage.src = './images/Cute Avatar3.svg'; // Change image source for color mode
});