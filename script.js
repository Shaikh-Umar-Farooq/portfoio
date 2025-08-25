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
  'MongoDB', 'MySQL', 'Analytics','JIRA','Metabase'
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