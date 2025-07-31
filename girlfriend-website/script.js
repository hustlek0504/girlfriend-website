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
        
        // Navigate to next page
        goToPage('question-page');
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

// Love messages array
const loveMessages = [
    "Priyanshi, you make every day feel like Valentine's Day! 💕",
    "Your smile brightens up my entire world, baby! ✨",
    "I'm so lucky to have you in my life, Priyanshi! 🍀",
    "You're the most beautiful person I've ever known! 🌹",
    "Every moment with you is pure magic! ✨",
    "You're my everything, my love! 💝",
    "I love you more than words can express, Priyanshi! 💖",
    "You're the reason I believe in love! 💕",
    "My heart beats only for you, baby! 💓",
    "You're the most amazing girlfriend ever! 🌟",
    "I can't imagine my life without you, Priyanshi! 💕",
    "You're my dream come true! 💫",
    "I love you to the moon and back! 🌙",
    "You're my perfect match, my forever! 💑",
    "Every day I fall more in love with you! 💕",
    "We are forever, baby! ❤️",
    "You are my peace and my chaos all at once! 💕",
    "I choose you, over and over, in every lifetime! 💖",
    "You turned my life into something magical! ✨",
    "I love you the most, Priyanshi. Always. Forever! 💕"
];

// Love button functionality
const loveButton = document.getElementById('loveButton');
const loveMessage = document.getElementById('loveMessage');
let clickCount = 0;

loveButton.addEventListener('click', function() {
    clickCount++;
    
    // Animate the button
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
    
    // Show random love message
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    loveMessage.textContent = randomMessage;
    
    // Add heart animation
    createHeartAnimation();
    
    // Update love counter
    updateLoveCounter();
});

// Create floating heart animation
function createHeartAnimation() {
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.fontSize = '2rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.transition = 'all 3s ease-out';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.top = '-50px';
        heart.style.opacity = '0';
    }, 100);
    
    setTimeout(() => {
        document.body.removeChild(heart);
    }, 3000);
}

// Update love counter
function updateLoveCounter() {
    const loveCountElement = document.getElementById('loveCount');
    const currentCount = parseInt(loveCountElement.textContent);
    loveCountElement.textContent = currentCount + 1;
    
    // Animate the counter
    loveCountElement.style.transform = 'scale(1.2)';
    loveCountElement.style.color = '#ff6b9d';
    setTimeout(() => {
        loveCountElement.style.transform = 'scale(1)';
        loveCountElement.style.color = '#ff6b9d';
    }, 200);
}

// Set current date
function setCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    const today = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    dateElement.textContent = today.toLocaleDateString('en-US', options);
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all reason cards
    document.querySelectorAll('.reason-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
}

// Add hover effects to reason cards
function addHoverEffects() {
    document.querySelectorAll('.reason-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Create floating hearts background
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    const hearts = ['💖', '💕', '💗', '💝', '💓', '💜', '💙'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 1 + 1) + 'rem';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.animation = `float ${Math.random() * 4 + 4}s ease-in-out infinite`;
        heart.style.animationDelay = Math.random() * 4 + 's';
        heart.style.pointerEvents = 'none';
        
        heartsContainer.appendChild(heart);
    }
}

// Add typing effect to main title
function addTypingEffect() {
    const title = document.querySelector('.main-title');
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 500);
}

// Enhanced page navigation with better transitions
function goToPage(pageId) {
    const currentPage = document.querySelector('.page[style*="display: flex"]');
    const targetPage = document.getElementById(pageId);
    
    if (currentPage) {
        // Enhanced exit animation for current page
        currentPage.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        currentPage.style.opacity = '0';
        currentPage.style.transform = 'translateY(-40px) scale(0.95)';
        
        // Add slide effect
        if (pageId === 'question-page') {
            currentPage.style.transform = 'translateX(-100px) scale(0.9)';
        } else if (pageId === 'love-page') {
            currentPage.style.transform = 'translateX(100px) scale(0.9)';
        }
        
        setTimeout(() => {
            currentPage.style.display = 'none';
            
            // Enhanced entrance animation for target page
            targetPage.style.display = 'flex';
            targetPage.style.opacity = '0';
            
            // Different entrance animations based on target page
            if (pageId === 'question-page') {
                targetPage.style.transform = 'translateX(100px) scale(0.9)';
            } else if (pageId === 'love-page') {
                targetPage.style.transform = 'translateX(-100px) scale(0.9)';
            } else {
                targetPage.style.transform = 'translateY(40px) scale(0.9)';
            }
            
            setTimeout(() => {
                targetPage.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                targetPage.style.opacity = '1';
                targetPage.style.transform = 'translateX(0) translateY(0) scale(1)';
                
                // Add entrance effects for specific elements
                if (pageId === 'question-page') {
                    animateQuestionPage();
                } else if (pageId === 'love-page') {
                    animateLovePage();
                }
            }, 100);
        }, 400);
    } else {
        // First page load
        targetPage.style.display = 'flex';
        targetPage.style.opacity = '0';
        targetPage.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            targetPage.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            targetPage.style.opacity = '1';
            targetPage.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Animate question page elements
function animateQuestionPage() {
    const title = document.querySelector('.best-girlfriend-title');
    const panda = document.querySelector('.panda');
    const question = document.querySelector('.love-question');
    const buttons = document.querySelector('.button-container');
    
    if (title) {
        title.style.animation = 'slideInFromLeft 1s ease-out 0.3s both';
    }
    
    if (panda) {
        panda.style.animation = 'zoomIn 1s ease-out 0.6s both';
    }
    
    if (question) {
        question.style.animation = 'slideInFromRight 1s ease-out 0.9s both';
    }
    
    if (buttons) {
        buttons.style.animation = 'fadeInUp 1s ease-out 1.2s both';
    }
}

// Animate love page elements
function animateLovePage() {
    const title = document.querySelector('.love-title');
    const messageCard = document.querySelector('.message-card');
    const gallerySection = document.querySelector('.gallery-section');
    
    if (title) {
        title.style.animation = 'slideInFromLeft 1s ease-out 0.3s both';
    }
    
    if (messageCard) {
        messageCard.style.animation = 'zoomIn 1s ease-out 0.6s both';
    }
    
    if (gallerySection) {
        gallerySection.style.animation = 'fadeInUp 1s ease-out 0.9s both';
    }
}

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
    
    // Go to love page after a short delay
    setTimeout(() => {
        goToPage('love-page');
        loadGallery();
    }, 1000);
}

// Create fireworks effect with smoother animations
function createFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    const colors = ['#ff6b9d', '#ff8fab', '#ffb3d1', '#ffd6e7', '#4CAF50', '#2196F3', '#FF9800', '#E91E63'];
    
    // Create multiple fireworks with staggered timing
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * window.innerWidth + 'px';
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            firework.style.animationDelay = Math.random() * 1.5 + 's';
            firework.style.animationDuration = (Math.random() * 1 + 2) + 's';
            
            // Add random size variation
            const size = Math.random() * 6 + 3;
            firework.style.width = size + 'px';
            firework.style.height = size + 'px';
            
            fireworksContainer.appendChild(firework);
            
            // Remove firework after animation
            setTimeout(() => {
                if (fireworksContainer.contains(firework)) {
                    fireworksContainer.removeChild(firework);
                }
            }, 4000);
        }, i * 80);
    }
}

// Load gallery images with special messages
function loadGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    
    // Updated image files with special messages
    const imageData = [
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.48_766338a6.jpg',
            message: 'Every moment with you is pure magic ✨'
        },
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.48_36333ab1.jpg',
            message: 'Your smile lights up my entire world 💕'
        },
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.47_8f797c69.jpg',
            message: 'You are my happiest thought, Priyanshi 🌟'
        },
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.47_25ad233d.jpg',
            message: 'We are forever, baby ❤️'
        },
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.47_f3c0704b.jpg',
            message: 'You turned my life into something magical ✨'
        },
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.46_e0dba4dc.jpg',
            message: 'I choose you, over and over, in every lifetime 💑'
        },
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.46_b6cd475e.jpg',
            message: 'My heart beats only for you, baby 💓'
        },
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.46_0c90c827.jpg',
            message: 'You are my peace and my chaos all at once 💕'
        },
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.45_d342b682.jpg',
            message: 'I love you the most, Priyanshi. Always. Forever 💖'
        },
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.45_33c22a70.jpg',
            message: 'Every day I fall more in love with you 💕'
        },
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.44_2f6e5221.jpg',
            message: 'You are my dream come true 💫'
        },
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.45_a9a02b3a.jpg',
            message: 'I love you to the moon and back 🌙'
        },
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.44_9228f73a.jpg',
            message: 'You are my perfect match, my forever 💑'
        },
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.44_3916ce0a.jpg',
            message: 'You make every day feel like Valentine\'s Day 💕'
        },
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.43_617535a7.jpg',
            message: 'I can\'t imagine my life without you, Priyanshi 💕'
        },
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.43_aadeb6d2.jpg',
            message: 'You are the reason I believe in love 💕'
        },
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.40_aa729e4a.jpg',
            message: 'You are the most amazing girlfriend ever 🌟'
        },
        {
            filename: 'WhatsApp Image 2025-07-31 at 22.56.43_68db035d.jpg',
            message: 'You are my everything, my love 💝'
        }
    ];
    
    // Clear existing content
    galleryGrid.innerHTML = '';
    
    // Create gallery items with smooth animations
    imageData.forEach((data, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animation = `fadeInUp 0.8s ease-out ${index * 0.15}s both`;
        
        const img = document.createElement('img');
        img.src = `images/${data.filename}`;
        img.alt = `Beautiful memory ${index + 1}`;
        img.loading = 'lazy'; // For better performance
        
        // Add smooth loading animation
        img.style.opacity = '0';
        img.style.transform = 'scale(0.9)';
        img.style.transition = 'all 0.6s ease';
        
        img.onload = function() {
            setTimeout(() => {
                this.style.opacity = '1';
                this.style.transform = 'scale(1)';
            }, index * 100);
        };
        
        img.onerror = function() {
            // If image fails to load, show a placeholder
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDMwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0xNTAgMTI1QzE2NS41NTIgMTI1IDE3OCAxMTIuNTUyIDE3OCA5N0MxNzggODEuNDQ4IDE2NS41NTIgNjkgMTUwIDY5QzEzNC40NDggNjkgMTIyIDgxLjQ0OCAxMjIgOTdDMTIyIDExMi41NTIgMTM0LjQ0OCAxMjUgMTUwIDEyNVoiIGZpbGw9IiNDQ0NDQ0MiLz4KPHN2ZyB4PSIxMzAiIHk9IjExMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDAgNDAiIGZpbGw9Im5vbmUiPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxOCIgZmlsbD0iI0NDQ0NDQyIvPgo8Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIyIiBmaWxsPSIjOTk5OTk5Ii8+CjxjaXJjbGUgY3g9IjI0IiBjeT0iMTYiIHI9IjIiIGZpbGw9IiM5OTk5OTkiLz4KPHBhdGggZD0iTTE2IDI0QzE2IDI0IDE4IDI2IDIwIDI2QzIyIDI2IDI0IDI0IDI0IDI0IiBzdHJva2U9IiM5OTk5OTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo8L3N2Zz4K';
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        };
        
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = 'photo-message';
        messageDiv.textContent = data.message;
        messageDiv.style.animation = `fadeInUp 0.8s ease-out ${(index * 0.15) + 0.3}s both`;
        
        // Add hover effect to show message smoothly
        galleryItem.addEventListener('mouseenter', function() {
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0)';
        });
        
        galleryItem.addEventListener('mouseleave', function() {
            messageDiv.style.opacity = '0.8';
            messageDiv.style.transform = 'translateY(5px)';
        });
        
        galleryItem.appendChild(img);
        galleryItem.appendChild(messageDiv);
        galleryGrid.appendChild(galleryItem);
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    setCurrentDate();
    addScrollAnimations();
    addHoverEffects();
    createFloatingHearts();
    addTypingEffect();
    
    // Add some initial love count (you can customize this)
    const loveCountElement = document.getElementById('loveCount');
    loveCountElement.textContent = '365'; // Example: 365 days of loving
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Show welcome page by default
    goToPage('welcome-page');
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const currentPage = document.querySelector('.page[style*="display: flex"]');
            if (currentPage && currentPage.id === 'welcome-page') {
                handleGoForward();
            }
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
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'l' || e.key === 'L') {
        loveButton.click();
    }
});

// Add touch support for mobile
if ('ontouchstart' in window) {
    loveButton.addEventListener('touchstart', function(e) {
        e.preventDefault();
        this.click();
    });
}

// Add confetti effect on special occasions
function createConfetti() {
    const colors = ['#ff6b9d', '#ff8fab', '#ffb3d1', '#ffd6e7'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (document.body.contains(confetti)) {
                document.body.removeChild(confetti);
            }
        }, 5000);
    }
}

// Add CSS for confetti animation
const confettiCSS = `
@keyframes fall {
    to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}`;

const style = document.createElement('style');
style.textContent = confettiCSS;
document.head.appendChild(style);

// Trigger confetti on special events
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('yes-btn')) {
        setTimeout(createConfetti, 500);
    }
});

// Add smooth page transitions
function addPageTransition(pageId) {
    const page = document.getElementById(pageId);
    page.style.transition = 'all 0.5s ease';
}

// Add floating hearts to all pages
function createFloatingHearts() {
    const hearts = ['💖', '💕', '💗', '💝', '💓', '💜', '💙'];
    
    document.querySelectorAll('.page').forEach(page => {
        const heartsContainer = page.querySelector('.floating-hearts');
        if (heartsContainer) {
            for (let i = 0; i < 10; i++) {
                const heart = document.createElement('div');
                heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.position = 'absolute';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';
                heart.style.fontSize = (Math.random() * 1 + 1) + 'rem';
                heart.style.opacity = Math.random() * 0.5 + 0.3;
                heart.style.animation = `float ${Math.random() * 4 + 4}s ease-in-out infinite`;
                heart.style.animationDelay = Math.random() * 4 + 's';
                heart.style.pointerEvents = 'none';
                
                heartsContainer.appendChild(heart);
            }
        }
    });
}

// Add typing effect to titles
function addTypingEffect() {
    const titles = document.querySelectorAll('.main-title, .priyu-title, .best-girlfriend-title, .love-title');
    
    titles.forEach(title => {
        const text = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    });
}

// Initialize floating hearts and typing effects
setTimeout(() => {
    createFloatingHearts();
    addTypingEffect();
}, 1000); 