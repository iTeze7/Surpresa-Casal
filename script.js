
function showCelebration() {
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('celebration-page').classList.add('active');
    startTimeCounter();
    createCelebrationHearts();
}

function showHome() {
    document.getElementById('celebration-page').classList.remove('active');
    document.getElementById('home-page').classList.add('active');
}


function createHomeParticles() {
    const container = document.getElementById('home-particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 6 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 5 + 3}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(particle);
    }
}

function createCelebrationHearts() {
    const container = document.getElementById('celebration-hearts');
    container.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        const heart = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        heart.setAttribute('class', 'floating-heart animate-float');
        const size = Math.random() * 30 + 20;
        heart.setAttribute('width', size);
        heart.setAttribute('height', size);
        heart.setAttribute('viewBox', '0 0 24 24');
        heart.setAttribute('fill', 'currentColor');
        heart.innerHTML = '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 3 + 's';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        container.appendChild(heart);
    }
}


let currentSlide = 0;
const totalSlides = 8;

function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}


const startDate = new Date('2025-10-25T00:00:00');

function calculateTimeElapsed() {
    const now = new Date();
    
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();
    
  
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }
    
    return { years, months, days, hours, minutes, seconds };
}

function updateTimeDisplay() {
    const time = calculateTimeElapsed();
    let display = '';
    
    if (time.years > 0) {
        display += `${time.years} ${time.years === 1 ? 'ano' : 'anos'}, `;
    }
    if (time.months > 0) {
        display += `${time.months} ${time.months === 1 ? 'mês' : 'meses'}, `;
    }
    
    display += `${time.days} ${time.days === 1 ? 'dia' : 'dias'}, `;
    display += `${time.hours} ${time.hours === 1 ? 'hora' : 'horas'}, `;
    display += `${time.minutes} ${time.minutes === 1 ? 'minuto' : 'minutos'} e `;
    display += `${time.seconds} ${time.seconds === 1 ? 'segundo' : 'segundos'}`;
    
    document.getElementById('time-display').textContent = display;
}

let timeInterval = null;

function startTimeCounter() {
    if (timeInterval) clearInterval(timeInterval);
    updateTimeDisplay();
    timeInterval = setInterval(updateTimeDisplay, 1000);
}


document.addEventListener('DOMContentLoaded', function() {
    createHomeParticles();
});
