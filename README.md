# JAVASCRIPT-GLITTY
Here’s a complete `README.md` file for your **JavaScript Glitty Project** with frontend and JSON Server setup, ready for GitHub and Render deployment:

---

## 📦 JAVASCRIPT-GLITTY

A fully responsive e-commerce UI clone for **Glitty.co**, built with HTML, CSS, Bootstrap, and JavaScript. It uses **JSON Server** as a fake REST API backend for product data.

---

### 🚀 Features

* ✅ Responsive UI using Bootstrap 5
* ✅ Frontend Pages: Home, Best Sellers, Description, Cart, Sign Up, Log In
* ✅ Product sorting (Low to High, High to Low)
* ✅ Carousel and animation effects with **WOW\.js** + **Animate.css**
* ✅ LocalStorage for login and cart
* ✅ Fake backend using **JSON Server**

---

### 🗂️ Folder Structure

```
.
├── db.json               # Backend data (JSON Server)
├── index.html            # Home page
├── Script.js             # JS logic
├── Style.css             # CSS styling
├── /Pages/               # Sub-pages (login, signup, cart, etc.)
├── /Images/              # Image assets
├── package.json          # For JSON Server setup
├── package-lock.json
└── README.md             # You're here
```

---

### 💻 Tech Stack

* **Frontend**: HTML, CSS, Bootstrap, JavaScript
* **Backend (Mock API)**: JSON Server
* **Animation**: Animate.css + WOW\.js
* **Deployment**: Render (both frontend and backend)

---

### 📥 Installation (Local Development)

```bash
git clone https://github.com/your-username/javascript-glitty.git
cd javascript-glitty
npm install
```

---

### ▶️ Run JSON Server

```bash
npx json-server --watch db.json --port 3000
```

Make sure your `Script.js` fetches from:

```js
fetch("http://localhost:3000/WoodCases")
```

---

### 🌐 Deployment

#### 🔹 1. Deploy JSON Server to [Render](https://render.com)

* Create new **Web Service**
* Start command:

  ```bash
  npx json-server --watch db.json --port 10000
  ```
* Copy the deployed URL (e.g., `https://your-json-server.onrender.com`)
* Update all fetch URLs in `Script.js` accordingly.

#### 🔹 2. Deploy frontend as **Static Site** on Render or Netlify

* For Render: Choose **Static Site**, set publish folder as `/`
* For Netlify/Vercel: drag and drop or connect GitHub

---



---

### 🔒 Login/Signup Logic

* Email format is validated using regex.
* Passwords must be at least 6 characters and contain 1 number.
* User data is stored in `localStorage`.

---

### 📚 Scripts

| Command          | Description               |
| ---------------- | ------------------------- |
| `npm install`    | Install dependencies      |
| `npm run server` | Start JSON Server locally |

---

### 📄 License

This project is for educational/demo purposes only. Not affiliated with [Glitty.co](https://glitty.co).

---

Let me know if you'd like a **live demo badge**, **GitHub deploy button**, or **preview GIF** added to the README.
