// Enhanced go forward function with better effects
function handleGoForward() {
    const button = document.querySelector('.go-forward-btn');
    
    // Add click effect
    button.style.transform = 'scale(0.95)';
    button.style.boxShadow = '0 5px 15px rgba(255,107,157,0.6)';
    
    // Create ripple effect
    createRippleEffect(button);
    
    // Add sparkle effect
    createSparkleEffect();
    
    setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = '0 10px 30px rgba(255,107,157,0.3)';
        
        // Navigate to page 2
        window.location.href = 'page2.html';
    }, 300);
}

// Create ripple effect
function createRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255,255,255,0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.marginLeft = '-10px';
    ripple.style.marginTop = '-10px';
    ripple.style.pointerEvents = 'none';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (element.contains(ripple)) {
            element.removeChild(ripple);
        }
    }, 600);
}

// Create sparkle effect
function createSparkleEffect() {
    const sparkles = ['✨', '💫', '⭐', '🌟'];
    const container = document.querySelector('.welcome-content');
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.position = 'absolute';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.fontSize = '1.5rem';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.animation = 'sparkleFloat 1s ease-out forwards';
            sparkle.style.zIndex = '1000';
            
            container.appendChild(sparkle);
            
            setTimeout(() => {
                if (container.contains(sparkle)) {
                    container.removeChild(sparkle);
                }
            }, 1000);
        }, i * 100);
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            handleGoForward();
        }
    });
    
    // Add touch support for mobile
    if ('ontouchstart' in window) {
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('touchstart', function(e) {
                e.preventDefault();
                this.click();
            });
        });
    }
    
    // Add entrance animation
    const welcomeContent = document.querySelector('.welcome-content');
    welcomeContent.style.opacity = '0';
    welcomeContent.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        welcomeContent.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        welcomeContent.style.opacity = '1';
        welcomeContent.style.transform = 'translateY(0)';
    }, 100);
}); 