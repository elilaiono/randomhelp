
const week_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
const date = new Date();
const weekname = week_names[date.getDay()];


const meetingAlert = document.querySelector('.meeting-alert');
if (weekname === 'Monday' || weekname === 'Tuesday'){
    meetingAlert.style.display = "block";
} else {
    meetingAlert.style.display = "none";
}

// console.log(meetingAlert);