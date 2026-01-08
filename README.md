# Hello developer – Smart Chrome New Tab Extension 🚀

A full-stack Chrome extension that overrides the default New Tab page and displays a time-based personalized greeting.  
The greeting is dynamically fetched from a Node.js backend API.

---

## ✨ Features

- Automatically runs on every new tab
- Time-based greeting (Morning / Afternoon / Evening)
- Popup-style centered UI
- Data fetched from Node.js backend
- REST API integration
- Built using Chrome Extension Manifest V3

---

## 🛠️ Tech Stack

### Chrome Extension (Frontend)
- HTML
- CSS
- JavaScript
- Chrome Extension APIs (Manifest V3)

### Backend
- Node.js
- Express.js
- CORS

---

## 📁 Project Structure

hello-abhay-project/
│
├── hello-abhay-extension/
│ ├── manifest.json
│ ├── newtab.html
│ ├── newtab.js
│ └── style.css
│
└── hello-abhay-backend/
├── package.json
└── server.js

yaml
Copy code

---

## 🚀 How to Run the Project

### 1️⃣ Run Node.js Backend

```bash
cd hello-abhay-backend
npm install
node server.js
Backend runs at:

arduino
Copy code
http://localhost:4000
Test API: cannot GET/

bash
Copy code
http://localhost:4000/greet
2️⃣ Load Chrome Extension
Open Chrome

Go to:
Copy code
chrome://extensions
Enable Developer mode

Click Load unpacked

Select folder:

swift
Copy code
hello-abhay-extension
Open a new tab

📸 Output
Every new tab displays a greeting like:

nginx
Copy code
GOOD AFTERNOON ABHAY 🌤️
🧠 Learning Outcomes
Chrome Extension development with Manifest V3

Full-stack integration (Frontend + Backend)

REST API consumption using Fetch API

Handling CORS

Clean project structure

📌 Future Enhancements
Live clock and date

Quotes or weather API

User-configurable name

Backend deployment to cloud

Chrome Web Store publishing
