# ⚽ Sports Orca

**Sports Orca** is a full stack web application that displays upcoming **soccer matches** using live sports data from [TheSportsDB API](https://www.thesportsdb.com/). It is built with **React** (frontend) and **Node.js + Express** (backend). This project **does not use a database** — instead, it fetches live data from a public API.

---

## 🔗 Live Demo

- 🌐 **Frontend (Netlify)**: [https://sports-ocra.netlify.app](https://sports-ocra.netlify.app)
- 🔌 **Backend (Render)**: [https://sports-orca.onrender.com/api/upcoming-soccer-matches](https://sports-orca.onrender.com/api/upcoming-soccer-matches)

---

## ⚙️ Features

- ✅ Displays upcoming **soccer matches** for the current day
- 🔄 Fetches real-time data using **TheSportsDB API**
- 💻 Clean and responsive UI

---

## 🛠 Tech Stack

| Layer      | Technology            |
|------------|------------------------|
| Frontend   | React, JavaScript      |
| Backend    | Node.js, Express       |
| API        | [TheSportsDB](https://www.thesportsdb.com/) |
| Deployment | Netlify (Frontend), Render (Backend) |

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/kuruvapavani/sports-orca.git
````

---

### 2. Run the Frontend

```bash
cd sports-orca/frontend
npm install
npm start
```

---

### 3. Run the Backend

```bash
cd ../backend
npm install
node server.js
```

> 📝 Make sure ports are correctly configured and not conflicting. The backend should be running before accessing the frontend.

---

## 🔗 API Reference

The app fetches data from the following public API:

```
https://www.thesportsdb.com/api/v1/json/{apikey}/eventsday.php?d=${date}&s=Soccer
```

---


## 🙋‍♀️ Author

**Kuruva Pavani**
📎 GitHub: [@kuruvapavani](https://github.com/kuruvapavani)

---

## 📄 License

This project is licensed under the **MIT License**.
Feel free to use and modify for educational or personal use.

