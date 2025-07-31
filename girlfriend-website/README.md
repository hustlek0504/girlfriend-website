# 💕 Happy Girlfriend's Day Website 💕

A beautiful, interactive website created with love for your special someone! This website features romantic animations, interactive elements, and a heartfelt message.

## 🌟 Features

- **Romantic Design**: Beautiful gradient background with floating hearts
- **Interactive Love Button**: Click to see random love messages and animations
- **Love Counter**: Tracks how many times love has been sent
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Special Effects**: Confetti animation on special occasions
- **Photo Gallery**: Placeholder for your favorite photos together
- **Personal Message**: Heartfelt message section

## 🚀 How to Host

### Option 1: GitHub Pages (Free & Easy)

1. **Create a GitHub account** (if you don't have one)
2. **Create a new repository**:
   - Go to GitHub.com
   - Click "New repository"
   - Name it `girlfriend-website`
   - Make it public
   - Click "Create repository"

3. **Upload your files**:
   - Click "uploading an existing file"
   - Drag and drop all the files from this folder
   - Commit the changes

4. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Save
   - Your website will be available at: `https://yourusername.github.io/girlfriend-website`

### Option 2: Netlify (Free & Easy)

1. **Go to Netlify.com**
2. **Sign up/Login**
3. **Drag and drop** the entire folder to deploy
4. **Get your URL** instantly!

### Option 3: Vercel (Free & Easy)

1. **Go to Vercel.com**
2. **Sign up/Login**
3. **Import your project** from GitHub or upload files
4. **Deploy** with one click!

## 🎨 Customization

### Personalize the Content

1. **Edit `index.html`**:
   - Change the title and messages
   - Update the special message section
   - Add your girlfriend's name
   - Modify the reasons why she's amazing

2. **Edit `script.js`**:
   - Update the love messages array
   - Change the initial love counter number
   - Modify the confetti colors

3. **Edit `style.css`**:
   - Change colors (search for `#ff6b9d` and `#667eea`)
   - Modify fonts
   - Adjust animations

### Add Photos

1. **Create an `images` folder** in your website directory
2. **Add your photos** to the folder
3. **Replace the placeholder divs** in the gallery section with:
   ```html
   <div class="gallery-item">
       <img src="images/photo1.jpg" alt="Our memory">
       <p>Description of the photo</p>
   </div>
   ```

### Change the Love Counter

In `script.js`, find this line:
```javascript
loveCountElement.textContent = '365'; // Change this number
```

## 📱 Mobile Friendly

The website is fully responsive and works great on:
- Desktop computers
- Tablets
- Mobile phones

## 🎯 Special Features

- **Keyboard Shortcut**: Press 'L' to send love
- **Touch Support**: Works perfectly on touch devices
- **Confetti Effect**: Every 10th click triggers a special animation
- **Floating Hearts**: Beautiful background animation
- **Smooth Scrolling**: Elegant page navigation

## 💝 Tips for Maximum Impact

1. **Customize the message** to be personal and specific to your relationship
2. **Add real photos** of you two together
3. **Change the love counter** to reflect how long you've been together
4. **Add inside jokes** or special memories in the reasons section
5. **Host it** and surprise her with the URL!

## 🛠️ File Structure

```
girlfriend-website/
├── index.html          # Main website file
├── style.css           # Styling and animations
├── script.js           # Interactive features
└── README.md           # This file
```

## 🎉 Ready to Deploy!

Your website is ready to go! Choose any hosting option above and your girlfriend will have a beautiful, interactive website made just for her. 

**Remember**: The most important part is the personal touch - customize the messages and add your own photos to make it truly special! 💕

---

*Made with 💕 for the most special person in your life* 