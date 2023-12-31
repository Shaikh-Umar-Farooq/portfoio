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
