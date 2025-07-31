// Page 4 - Love Contract JavaScript

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Play background music
    const backgroundMusic = document.getElementById('backgroundMusic');
    if (backgroundMusic) {
        backgroundMusic.volume = 0.4;
        backgroundMusic.play().catch(e => console.log('Music autoplay blocked'));
    }
    
    // Create initial fireworks
    createInitialFireworks();
    
    // Create floating hearts
    createFloatingHearts();
    
    // Add entrance animations
    addEntranceAnimations();
    
    // Add keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            acceptContractMain();
        }
    });
});

// Create initial fireworks
function createInitialFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    const colors = ['#ff6b9d', '#ff8fab', '#ffb3d1', '#ffd6e7', '#4CAF50', '#2196F3', '#FF9800', '#E91E63'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * window.innerWidth + 'px';
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            firework.style.animationDelay = Math.random() * 2 + 's';
            firework.style.animationDuration = (Math.random() * 1 + 2) + 's';
            
            const size = Math.random() * 6 + 3;
            firework.style.width = size + 'px';
            firework.style.height = size + 'px';
            
            fireworksContainer.appendChild(firework);
            
            setTimeout(() => {
                if (fireworksContainer.contains(firework)) {
                    fireworksContainer.removeChild(firework);
                }
            }, 4000);
        }, i * 100);
    }
}

// Create floating hearts
function createFloatingHearts() {
    const floatingHeartsContainer = document.getElementById('floatingHearts');
    const hearts = ['💖', '💕', '💓', '💗', '💝', '💌', '💋', '😘'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 3 + 's';
            heart.style.animationDuration = (Math.random() * 2 + 4) + 's';
            
            floatingHeartsContainer.appendChild(heart);
        }, i * 500);
    }
}

// Add entrance animations
function addEntranceAnimations() {
    const contractWrapper = document.querySelector('.contract-wrapper');
    const contractTitle = document.querySelector('.contract-main-title');
    const contractBody = document.querySelector('.contract-body-main');
    const acceptBtn = document.querySelector('.accept-contract-btn-main');
    
    // Initial states
    contractWrapper.style.opacity = '0';
    contractWrapper.style.transform = 'translateY(50px) scale(0.9)';
    
    contractTitle.style.opacity = '0';
    contractTitle.style.transform = 'translateY(-30px)';
    
    contractBody.style.opacity = '0';
    contractBody.style.transform = 'translateY(30px)';
    
    acceptBtn.style.opacity = '0';
    acceptBtn.style.transform = 'scale(0.8)';
    
    // Animate wrapper
    setTimeout(() => {
        contractWrapper.style.transition = 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        contractWrapper.style.opacity = '1';
        contractWrapper.style.transform = 'translateY(0) scale(1)';
    }, 300);
    
    // Animate title
    setTimeout(() => {
        contractTitle.style.transition = 'all 1s ease-out';
        contractTitle.style.opacity = '1';
        contractTitle.style.transform = 'translateY(0)';
    }, 800);
    
    // Animate body
    setTimeout(() => {
        contractBody.style.transition = 'all 1.2s ease-out';
        contractBody.style.opacity = '1';
        contractBody.style.transform = 'translateY(0)';
    }, 1200);
    
    // Animate button
    setTimeout(() => {
        acceptBtn.style.transition = 'all 1s ease-out';
        acceptBtn.style.opacity = '1';
        acceptBtn.style.transform = 'scale(1)';
    }, 1600);
}

// Accept Contract Main Function
function acceptContractMain() {
    // Disable button to prevent multiple clicks
    const acceptBtn = document.querySelector('.accept-contract-btn-main');
    acceptBtn.disabled = true;
    acceptBtn.style.opacity = '0.7';
    
    // Create massive heart beat animation
    createMassiveHeartBeat();
    
    // Create explosion of hearts and kisses
    createHeartExplosion();
    
    // Create extra fireworks
    createExtraFireworksMain();
    
    // Show acceptance message
    setTimeout(() => {
        showAcceptanceMessageMain();
    }, 3000);
    
    // Re-enable button after effects
    setTimeout(() => {
        acceptBtn.disabled = false;
        acceptBtn.style.opacity = '1';
    }, 8000);
}

// Create massive heart beat animation
function createMassiveHeartBeat() {
    const heartBeatContainer = document.getElementById('heartBeatContainer');
    
    const heartBeat = document.createElement('div');
    heartBeat.className = 'massive-heart-beat';
    heartBeat.innerHTML = '💖';
    heartBeat.style.position = 'fixed';
    heartBeat.style.top = '50%';
    heartBeat.style.left = '50%';
    heartBeat.style.transform = 'translate(-50%, -50%)';
    heartBeat.style.fontSize = '12rem';
    heartBeat.style.zIndex = '9999';
    heartBeat.style.animation = 'massiveHeartBeat 3s ease-in-out infinite';
    heartBeat.style.filter = 'drop-shadow(0 0 20px rgba(255,107,157,0.8))';
    
    heartBeatContainer.appendChild(heartBeat);
    
    setTimeout(() => {
        if (heartBeatContainer.contains(heartBeat)) {
            heartBeatContainer.removeChild(heartBeat);
        }
    }, 8000);
}

// Create heart explosion
function createHeartExplosion() {
    const floatingHeartsContainer = document.getElementById('floatingHearts');
    const elements = ['💖', '💕', '💓', '💗', '💝', '😘', '💋', '💌', '💞', '💟'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const element = document.createElement('div');
            element.className = 'explosion-heart';
            element.textContent = elements[Math.floor(Math.random() * elements.length)];
            element.style.position = 'fixed';
            element.style.left = '50%';
            element.style.top = '50%';
            element.style.fontSize = (Math.random() * 3 + 2) + 'rem';
            element.style.zIndex = '9998';
            element.style.pointerEvents = 'none';
            element.style.animation = 'heartExplosion 4s ease-out forwards';
            element.style.animationDelay = Math.random() * 0.5 + 's';
            
            floatingHeartsContainer.appendChild(element);
            
            setTimeout(() => {
                if (floatingHeartsContainer.contains(element)) {
                    floatingHeartsContainer.removeChild(element);
                }
            }, 4000);
        }, i * 50);
    }
}

// Create extra fireworks
function createExtraFireworksMain() {
    const fireworksContainer = document.getElementById('fireworks');
    const colors = ['#ff6b9d', '#ff8fab', '#ffb3d1', '#ffd6e7', '#4CAF50', '#2196F3', '#FF9800', '#E91E63', '#9C27B0', '#FF5722'];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * window.innerWidth + 'px';
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            firework.style.animationDelay = Math.random() * 1.5 + 's';
            firework.style.animationDuration = (Math.random() * 1 + 2) + 's';
            
            const size = Math.random() * 10 + 5;
            firework.style.width = size + 'px';
            firework.style.height = size + 'px';
            
            fireworksContainer.appendChild(firework);
            
            setTimeout(() => {
                if (fireworksContainer.contains(firework)) {
                    fireworksContainer.removeChild(firework);
                }
            }, 5000);
        }, i * 30);
    }
}

// Show acceptance message
function showAcceptanceMessageMain() {
    const acceptanceContainer = document.getElementById('acceptanceContainer');
    
    const message = document.createElement('div');
    message.className = 'acceptance-message-main';
    message.innerHTML = `
        <div class="acceptance-content">
            <h2 class="acceptance-title">💖 YES! 💖</h2>
            <p class="acceptance-text">Priyanshi, you've made me the happiest person in the world!</p>
            <p class="acceptance-text">Our forever begins now... 💕</p>
            <div class="acceptance-hearts">
                <span>💖</span>
                <span>💕</span>
                <span>💓</span>
                <span>💗</span>
                <span>💝</span>
            </div>
        </div>
    `;
    
    acceptanceContainer.appendChild(message);
    
    setTimeout(() => {
        if (acceptanceContainer.contains(message)) {
            acceptanceContainer.removeChild(message);
        }
    }, 8000);
} 