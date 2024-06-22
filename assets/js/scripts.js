const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursor.classList.add('show');
});

document.addEventListener('mouseover', e => {
  if (e.target.classList.contains('cta-btn') || e.target.classList.contains('logo') || e.target.closest('.social-icons')) {
    cursor.classList.add('hover');
  }
});

document.addEventListener('mouseout', () => {
  cursor.classList.remove('hover');  
});

const animatedIcons = document.querySelector('.animated-icons');

function createIcon() {
  const icon = document.createElement('div');
  icon.classList.add('animated-icon');
  icon.style.left = Math.random() * window.innerWidth + 'px';
  icon.style.animationDuration = Math.random() * 3 + 7 + 's';
  animatedIcons.appendChild(icon);
  setTimeout(() => {
    icon.remove();
  }, 10000);
}

setInterval(createIcon, 1000);

// Countdown Timer
const countDownDate = new Date("2025-01-01T00:00:00").getTime();

const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
  document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
