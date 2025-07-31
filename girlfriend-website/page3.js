// Diary functionality
let currentPage = 0;
let photoPages = [];
let currentPhotoPage = 0;

// Initialize diary
document.addEventListener('DOMContentLoaded', function() {
    // Create fireworks on page load
    createFireworks();
    
    // Add click event to diary cover
    const coverPage = document.getElementById('coverPage');
    coverPage.addEventListener('click', openDiary);
    
    // Add touch support for mobile
    if ('ontouchstart' in window) {
        coverPage.addEventListener('touchstart', function(e) {
            e.preventDefault();
            openDiary();
        });
    }
    
    // Add entrance animations
    const diaryTitle = document.querySelector('.diary-title');
    const diaryBook = document.getElementById('diaryBook');
    
    diaryTitle.style.opacity = '0';
    diaryTitle.style.transform = 'translateY(30px)';
    
    diaryBook.style.opacity = '0';
    diaryBook.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        diaryTitle.style.transition = 'all 1s ease-out';
        diaryTitle.style.opacity = '1';
        diaryTitle.style.transform = 'translateY(0)';
    }, 300);
    
    setTimeout(() => {
        diaryBook.style.transition = 'all 1s ease-out';
        diaryBook.style.opacity = '1';
        diaryBook.style.transform = 'scale(1)';
    }, 600);
});

// Open diary function with mesmerizing effects
function openDiary() {
    const coverPage = document.getElementById('coverPage');
    const messagePage = document.getElementById('messagePage');
    
    // Add sparkle effect when opening
    createOpeningSparkles();
    
    // Play background music
    const backgroundMusic = document.getElementById('backgroundMusic');
    if (backgroundMusic) {
        backgroundMusic.volume = 0.3;
        backgroundMusic.play().catch(e => console.log('Music autoplay blocked'));
    }
    
    // Add opening animation with enhanced timing
    coverPage.classList.add('open');
    
    // Add glow effect to diary
    coverPage.style.animation = 'glow 2s ease-in-out infinite';
    
    // Show message page after cover animation
    setTimeout(() => {
        messagePage.classList.add('open');
        
        // Add entrance animation for message content
        const messageContent = messagePage.querySelector('.message-content');
        messageContent.style.opacity = '0';
        messageContent.style.transform = 'translateX(30px) scale(0.95)';
        
        setTimeout(() => {
            messageContent.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            messageContent.style.opacity = '1';
            messageContent.style.transform = 'translateX(0) scale(1)';
            
            // Add subtle floating animation to the page
            setTimeout(() => {
                messagePage.style.animation = 'float 4s ease-in-out infinite';
            }, 1200);
        }, 400);
    }, 1000);
}

// Create opening sparkles
function createOpeningSparkles() {
    const sparkles = ['✨', '💫', '⭐', '🌟', '💖', '💕'];
    const container = document.querySelector('.diary-container');
    
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.position = 'absolute';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.fontSize = (Math.random() * 1 + 1.5) + 'rem';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.animation = 'sparkleFloat 1.5s ease-out forwards';
            sparkle.style.zIndex = '1000';
            sparkle.style.opacity = '0';
            
            container.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.style.opacity = '1';
                sparkle.style.transform = 'translateY(-100px) scale(1.5)';
            }, 100);
            
            setTimeout(() => {
                if (container.contains(sparkle)) {
                    container.removeChild(sparkle);
                }
            }, 1500);
        }, i * 150);
    }
}

// Next page function with smooth transition
function nextPage() {
    const messagePage = document.getElementById('messagePage');
    const photoPagesContainer = document.getElementById('photoPages');
    
    // Create photo pages if not already created
    if (photoPages.length === 0) {
        createPhotoPages();
    }
    
    // Add page turning effect
    messagePage.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    messagePage.style.transform = 'rotateY(-180deg) scale(0.8)';
    messagePage.style.opacity = '0';
    messagePage.style.zIndex = '1';
    
    // Show photo pages container with smooth entrance
    setTimeout(() => {
        messagePage.classList.remove('open');
        photoPagesContainer.style.display = 'block';
        photoPagesContainer.style.opacity = '0';
        photoPagesContainer.style.transform = 'translateX(50px) scale(0.9)';
        photoPagesContainer.style.zIndex = '15';
        
        setTimeout(() => {
            photoPagesContainer.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            photoPagesContainer.style.opacity = '1';
            photoPagesContainer.style.transform = 'translateX(0) scale(1)';
            
            // Show first photo page
            setTimeout(() => {
                showPhotoPage(0);
            }, 200);
        }, 100);
    }, 500);
}

// Create photo pages
function createPhotoPages() {
    const photoPagesContainer = document.getElementById('photoPages');
    
    // Image data with loving messages
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
    
    // Create photo pages (1 image per page)
    for (let pageIndex = 0; pageIndex < imageData.length; pageIndex++) {
        const photoPage = document.createElement('div');
        photoPage.className = 'photo-page';
        photoPage.id = `photoPage${pageIndex}`;
        
        const pageHeader = document.createElement('div');
        pageHeader.className = 'photo-page-header';
        pageHeader.innerHTML = `
            <div class="photo-page-number">${pageIndex + 2}</div>
            <div class="photo-page-title">Memory ${pageIndex + 1}</div>
        `;
        
        const photoGrid = document.createElement('div');
        photoGrid.className = 'photo-grid';
        
        // Add single image for this page
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        
        const img = document.createElement('img');
        img.src = `images/${imageData[pageIndex].filename}`;
        img.alt = `Memory ${pageIndex + 1}`;
        img.loading = 'lazy';
        
        // Add loading animation
        img.style.opacity = '0';
        img.style.transform = 'scale(0.9)';
        img.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        img.onload = function() {
            setTimeout(() => {
                this.style.opacity = '1';
                this.style.transform = 'scale(1)';
            }, pageIndex * 200);
        };
        
        photoItem.appendChild(img);
        photoGrid.appendChild(photoItem);
        
        // Add separate message section below the photo
        const messageSection = document.createElement('div');
        messageSection.className = 'photo-message-section';
        
        const messageText = document.createElement('p');
        messageText.className = 'photo-message-text';
        messageText.textContent = imageData[pageIndex].message;
        
        messageSection.appendChild(messageText);
        photoGrid.appendChild(messageSection);
        
        const pageFooter = document.createElement('div');
        pageFooter.className = 'photo-page-footer';
        pageFooter.innerHTML = `
            <button class="photo-nav-btn" onclick="previousPhotoPage()" ${pageIndex === 0 ? 'disabled' : ''}>
                ← Previous
            </button>
            <button class="photo-nav-btn" onclick="nextPhotoPage()" ${pageIndex === imageData.length - 1 ? 'disabled' : ''}>
                Next →
            </button>
            <button class="photo-nav-btn back-to-message" onclick="backToMessage()">
                ← Back to Message
            </button>
        `;
        
        photoPage.appendChild(pageHeader);
        photoPage.appendChild(photoGrid);
        photoPage.appendChild(pageFooter);
        
        photoPagesContainer.appendChild(photoPage);
        photoPages.push(photoPage);
    }
    
    // Create Love Contract Page (last page)
    createLoveContractPage();
}

// Create Love Contract Page
function createLoveContractPage() {
    const photoPagesContainer = document.getElementById('photoPages');
    
    const contractPage = document.createElement('div');
    contractPage.className = 'photo-page contract-page';
    contractPage.id = 'contractPage';
    
    const pageHeader = document.createElement('div');
    pageHeader.className = 'photo-page-header';
    pageHeader.innerHTML = `
        <div class="photo-page-number">20</div>
        <div class="photo-page-title">Our Love Contract</div>
    `;
    
    const contractContent = document.createElement('div');
    contractContent.className = 'contract-content';
    contractContent.innerHTML = `
        <div class="contract-header">
            <h2 class="contract-title">💖 Our Forever Love Contract 💖</h2>
        </div>
        
        <div class="contract-body">
            <p class="contract-intro">This is an unbreakable, lifetime contract between Priyanshi (my baby, my love, my future wife) and me (your forever and ever).</p>
            
            <p class="contract-section-title">By reading and accepting this, my Priyanshi agrees to:</p>
            
            <ul class="contract-terms">
                <li>Love me endlessly and unconditionally for all the days of her life. ❤️</li>
                <li>Promise to marry me one day and make our forever together come true. 💍</li>
                <li>Stand by me in every up and down, because together we are unbeatable.</li>
                <li>Choose me first, always and always, no matter what the world says.</li>
                <li>Spend every lifetime loving, laughing, and living with me, because our story is endless.</li>
                <li>Keep our hearts safe with each other and never let anything or anyone come in between us.</li>
                <li>Seal this love with forever kisses and hugs, because distance or fights can never break us. 🤗💖</li>
            </ul>
            
            <div class="penalty-section">
                <p class="penalty-title">Penalty for breaking this contract:</p>
                <ul class="penalty-terms">
                    <li>Unlimited kisses and the tightest hugs to fix everything. 💞</li>
                    <li>Saying "I love you" to me a hundred times in a row until forgiven. 😘</li>
                </ul>
            </div>
            
            <div class="signature-section">
                <p class="signature-title">Signed:</p>
                <p class="signature-name">Your Baby, Priyanshi ❤️</p>
                <p class="signature-name">Your Forever, Me 💖</p>
            </div>
        </div>
        
        <div class="contract-footer">
            <button class="accept-contract-btn" onclick="acceptContract()">
                <span class="btn-heart">💖</span>
                <span class="btn-text">I Accept</span>
            </button>
        </div>
    `;
    
    const pageFooter = document.createElement('div');
    pageFooter.className = 'photo-page-footer';
    pageFooter.innerHTML = `
        <button class="photo-nav-btn" onclick="previousPhotoPage()">
            ← Previous
        </button>
        <button class="photo-nav-btn back-to-message" onclick="backToMessage()">
            ← Back to Message
        </button>
    `;
    
    contractPage.appendChild(pageHeader);
    contractPage.appendChild(contractContent);
    contractPage.appendChild(pageFooter);
    
    photoPagesContainer.appendChild(contractPage);
    photoPages.push(contractPage);
}

// Accept Contract Function
function acceptContract() {
    // Create heart beating animation
    createHeartBeatAnimation();
    
    // Create floating hearts and kisses
    createFloatingHearts();
    
    // Create extra fireworks
    createExtraFireworks();
    
    // Show acceptance message
    setTimeout(() => {
        showAcceptanceMessage();
    }, 2000);
}

// Create Heart Beat Animation
function createHeartBeatAnimation() {
    const container = document.querySelector('.diary-container');
    
    const heartBeat = document.createElement('div');
    heartBeat.className = 'heart-beat-animation';
    heartBeat.innerHTML = '💖';
    heartBeat.style.position = 'fixed';
    heartBeat.style.top = '50%';
    heartBeat.style.left = '50%';
    heartBeat.style.transform = 'translate(-50%, -50%)';
    heartBeat.style.fontSize = '8rem';
    heartBeat.style.zIndex = '9999';
    heartBeat.style.animation = 'heartBeat 2s ease-in-out infinite';
    
    container.appendChild(heartBeat);
    
    setTimeout(() => {
        if (container.contains(heartBeat)) {
            container.removeChild(heartBeat);
        }
    }, 6000);
}

// Create Floating Hearts and Kisses
function createFloatingHearts() {
    const container = document.querySelector('.diary-container');
    const elements = ['💖', '💕', '💓', '💗', '💝', '😘', '💋', '💌'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const element = document.createElement('div');
            element.textContent = elements[Math.floor(Math.random() * elements.length)];
            element.style.position = 'fixed';
            element.style.left = Math.random() * 100 + '%';
            element.style.top = '100%';
            element.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
            element.style.zIndex = '9998';
            element.style.pointerEvents = 'none';
            element.style.animation = 'floatUp 4s ease-out forwards';
            
            container.appendChild(element);
            
            setTimeout(() => {
                if (container.contains(element)) {
                    container.removeChild(element);
                }
            }, 4000);
        }, i * 200);
    }
}

// Create Extra Fireworks
function createExtraFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    const colors = ['#ff6b9d', '#ff8fab', '#ffb3d1', '#ffd6e7', '#4CAF50', '#2196F3', '#FF9800', '#E91E63'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * window.innerWidth + 'px';
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            firework.style.animationDelay = Math.random() * 1.5 + 's';
            firework.style.animationDuration = (Math.random() * 1 + 2) + 's';
            
            const size = Math.random() * 8 + 4;
            firework.style.width = size + 'px';
            firework.style.height = size + 'px';
            
            fireworksContainer.appendChild(firework);
            
            setTimeout(() => {
                if (fireworksContainer.contains(firework)) {
                    fireworksContainer.removeChild(firework);
                }
            }, 4000);
        }, i * 50);
    }
}

// Show Acceptance Message
function showAcceptanceMessage() {
    const container = document.querySelector('.diary-container');
    
    const message = document.createElement('div');
    message.className = 'acceptance-message';
    message.innerHTML = `
        <h2>💖 YES! 💖</h2>
        <p>Priyanshi, you've made me the happiest person in the world!</p>
        <p>Our forever begins now... 💕</p>
    `;
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.background = 'linear-gradient(135deg, #ff6b9d, #ff8fab)';
    message.style.color = '#fff';
    message.style.padding = '2rem';
    message.style.borderRadius = '20px';
    message.style.textAlign = 'center';
    message.style.zIndex = '10000';
    message.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
    message.style.animation = 'fadeInUp 1s ease-out';
    
    container.appendChild(message);
    
    setTimeout(() => {
        if (container.contains(message)) {
            container.removeChild(message);
        }
    }, 5000);
}

// Show photo page with smooth animation
function showPhotoPage(pageIndex) {
    // Hide all photo pages with smooth transition
    photoPages.forEach((page, index) => {
        if (index !== pageIndex) {
            page.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            page.style.opacity = '0';
            page.style.transform = 'translateX(-50px) scale(0.9)';
            page.style.zIndex = '1';
            
            setTimeout(() => {
                page.classList.remove('open');
                page.style.display = 'none';
            }, 400);
        }
    });
    
    // Show current page with smooth entrance
    const currentPage = photoPages[pageIndex];
    currentPage.style.display = 'flex';
    currentPage.style.opacity = '0';
    currentPage.style.transform = 'translateX(50px) scale(0.9)';
    currentPage.style.zIndex = '20';
    
    setTimeout(() => {
        currentPage.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        currentPage.style.opacity = '1';
        currentPage.style.transform = 'translateX(0) scale(1)';
        currentPage.classList.add('open');
        
        // Animate photo item with enhanced effects
        const photoItem = currentPage.querySelector('.photo-item');
        const messageSection = currentPage.querySelector('.photo-message-section');
        
        if (photoItem) {
            photoItem.style.opacity = '0';
            photoItem.style.transform = 'translateY(30px) scale(0.8)';
            
            setTimeout(() => {
                photoItem.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                photoItem.style.opacity = '1';
                photoItem.style.transform = 'translateY(0) scale(1)';
                
                // Add subtle floating animation
                setTimeout(() => {
                    photoItem.style.animation = 'float 3s ease-in-out infinite';
                }, 1200);
            }, 300);
        }
        
        // Animate message section
        if (messageSection) {
            messageSection.style.opacity = '0';
            messageSection.style.transform = 'translateY(20px) scale(0.9)';
            
            setTimeout(() => {
                messageSection.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                messageSection.style.opacity = '1';
                messageSection.style.transform = 'translateY(0) scale(1)';
            }, 800);
        }
        
        // Animate page header and footer
        const pageHeader = currentPage.querySelector('.photo-page-header');
        const pageFooter = currentPage.querySelector('.photo-page-footer');
        
        if (pageHeader) {
            pageHeader.style.opacity = '0';
            pageHeader.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                pageHeader.style.transition = 'all 0.8s ease-out';
                pageHeader.style.opacity = '1';
                pageHeader.style.transform = 'translateY(0)';
            }, 600);
        }
        
        if (pageFooter) {
            pageFooter.style.opacity = '0';
            pageFooter.style.transform = 'translateY(20px)';
            setTimeout(() => {
                pageFooter.style.transition = 'all 0.8s ease-out';
                pageFooter.style.opacity = '1';
                pageFooter.style.transform = 'translateY(0)';
            }, 800);
        }
    }, 100);
    
    currentPhotoPage = pageIndex;
}

// Navigation functions
function nextPhotoPage() {
    if (currentPhotoPage < photoPages.length - 1) {
        showPhotoPage(currentPhotoPage + 1);
    }
}

function previousPhotoPage() {
    if (currentPhotoPage > 0) {
        showPhotoPage(currentPhotoPage - 1);
    }
}

function backToMessage() {
    const messagePage = document.getElementById('messagePage');
    const photoPagesContainer = document.getElementById('photoPages');
    
    // Hide current photo page
    const currentPage = photoPages[currentPhotoPage];
    if (currentPage) {
        currentPage.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        currentPage.style.opacity = '0';
        currentPage.style.transform = 'translateX(-50px) scale(0.9)';
        currentPage.classList.remove('open');
    }
    
    // Hide photo pages container
    setTimeout(() => {
        photoPagesContainer.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        photoPagesContainer.style.opacity = '0';
        photoPagesContainer.style.transform = 'translateX(-50px) scale(0.9)';
        
        setTimeout(() => {
            photoPagesContainer.style.display = 'none';
            
            // Show message page
            messagePage.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            messagePage.style.transform = 'rotateY(0deg) scale(1)';
            messagePage.style.opacity = '1';
            messagePage.style.zIndex = '10';
            messagePage.classList.add('open');
        }, 500);
    }, 300);
}

// Create fireworks effect
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

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        if (currentPhotoPage < photoPages.length - 1) {
            nextPhotoPage();
        }
    } else if (e.key === 'ArrowLeft') {
        if (currentPhotoPage > 0) {
            previousPhotoPage();
        }
    }
}); 