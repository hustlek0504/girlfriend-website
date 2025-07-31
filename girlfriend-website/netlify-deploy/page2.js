// Panda interaction
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const panda = document.getElementById('panda');
    
    // Make panda sad
    panda.classList.add('sad');
    
    // Move the no button randomly
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.3s ease';
    
    // Make panda happy again after a while
    setTimeout(() => {
        panda.classList.remove('sad');
    }, 2000);
}

// Handle Yes button click
function handleYes() {
    // Create fireworks
    createFireworks();
    
    // Go to page 3 after a short delay
    setTimeout(() => {
        window.location.href = 'page3.html';
    }, 1000);
}

// Create fireworks effect
function createFireworks() {
    const fireworksContainer = document.createElement('div');
    fireworksContainer.style.position = 'fixed';
    fireworksContainer.style.top = '0';
    fireworksContainer.style.left = '0';
    fireworksContainer.style.width = '100%';
    fireworksContainer.style.height = '100%';
    fireworksContainer.style.pointerEvents = 'none';
    fireworksContainer.style.zIndex = '1000';
    
    document.body.appendChild(fireworksContainer);
    
    const colors = ['#ff6b9d', '#ff8fab', '#ffb3d1', '#ffd6e7', '#4CAF50', '#2196F3', '#FF9800', '#E91E63'];
    
    // Create multiple fireworks with staggered timing
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.style.position = 'absolute';
            firework.style.left = Math.random() * window.innerWidth + 'px';
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            firework.style.animationDelay = Math.random() * 1.5 + 's';
            firework.style.animationDuration = (Math.random() * 1 + 2) + 's';
            firework.style.animation = 'firework 2s ease-out forwards';
            
            // Add random size variation
            const size = Math.random() * 6 + 3;
            firework.style.width = size + 'px';
            firework.style.height = size + 'px';
            firework.style.borderRadius = '50%';
            
            fireworksContainer.appendChild(firework);
            
            // Remove firework after animation
            setTimeout(() => {
                if (fireworksContainer.contains(firework)) {
                    fireworksContainer.removeChild(firework);
                }
            }, 4000);
        }, i * 80);
    }
    
    // Remove container after all fireworks
    setTimeout(() => {
        if (document.body.contains(fireworksContainer)) {
            document.body.removeChild(fireworksContainer);
        }
    }, 5000);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Add entrance animations
    const title = document.querySelector('.best-girlfriend-title');
    const panda = document.querySelector('.panda');
    const question = document.querySelector('.love-question');
    const buttons = document.querySelector('.button-container');
    
    // Set initial states
    title.style.opacity = '0';
    title.style.transform = 'translateX(-50px)';
    
    panda.style.opacity = '0';
    panda.style.transform = 'scale(0.8)';
    
    question.style.opacity = '0';
    question.style.transform = 'translateX(50px)';
    
    buttons.style.opacity = '0';
    buttons.style.transform = 'translateY(30px)';
    
    // Animate elements in sequence
    setTimeout(() => {
        title.style.transition = 'all 1s ease-out';
        title.style.opacity = '1';
        title.style.transform = 'translateX(0)';
    }, 300);
    
    setTimeout(() => {
        panda.style.transition = 'all 1s ease-out';
        panda.style.opacity = '1';
        panda.style.transform = 'scale(1)';
    }, 600);
    
    setTimeout(() => {
        question.style.transition = 'all 1s ease-out';
        question.style.opacity = '1';
        question.style.transform = 'translateX(0)';
    }, 900);
    
    setTimeout(() => {
        buttons.style.transition = 'all 1s ease-out';
        buttons.style.opacity = '1';
        buttons.style.transform = 'translateY(0)';
    }, 1200);
    
    // Add touch support for mobile
    if ('ontouchstart' in window) {
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('touchstart', function(e) {
                e.preventDefault();
                this.click();
            });
        });
    }
}); 