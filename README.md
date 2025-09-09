# 🔗 URL Shortener

A simple and efficient **URL Shortener** built with **Node.js, Express, and MongoDB**.  
This application allows users to shorten long URLs into tiny shareable links, with automatic redirection to the original URL.

---

## ✨ Features
- 📝 Shorten any long URL
- 🔁 Redirect to the original URL instantly
- 📊 Track number of clicks 
- 🌍 RESTful API endpoints
- 💾 Persistent storage using MongoDB
- 🔒 Environment variable support with **dotenv**

---


## ⚙️ Installation & Setup


1. **Install dependencies**
   
   npm install
   
2. **Set up environment variables**
   - Create a `.env` file in the root directory.
   - Add your variables:
     ```
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/urlshortener
     BASE_URL=http://localhost:5000
     ```
3. **Run the project**
   ```bash
   npm start
   or 
   npm run dev
   ```

---



## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **dotenv**
