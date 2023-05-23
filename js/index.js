// Notifications Count 
const NotifCount = document.getElementById('notificationsCount')

//notifications
const notifications = document.getElementsByClassName('notification')
const circleNotif1 = document.getElementById("circle1");
const circleNotif2 = document.getElementById("circle2");
const circleNotif3 = document.getElementById("circle3");

function markAllAsRead() {
  for (let i = 0; i <= 2; i++) {
    notifications[i].style.backgroundColor = 'white'
  }
  NotifCount.innerText = 0
  circleNotif1.classList.remove("circleUnreadNotif1");
  circleNotif2.classList.remove("circleUnreadNotif2");
  circleNotif3.classList.remove("circleUnreadNotif3");
}

//innerHTML = `<div>Holaaa!!</div>`