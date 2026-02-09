# 🎮 Clicker Game with Video Rewards

This project is a simple **Clicker Game** with a **frontend (HTML/CSS/JavaScript)** and a **backend (Node.js + Express)**.  
Users earn points by clicking and can exchange them for **video rewards**, which are served from the backend.

---

## 📌 Features

- 🖱 Clicker mechanics with a points counter
- 🎁 Rewards system with special prizes
- 🎥 Video storage and download from the server
- 🌐 Client–server interaction using `fetch`
- ⚠️ Error handling when the server is unavailable
- ⏳ Async logic using `async / await`

---

## 🛠 Technologies Used

### Frontend
- HTML
- CSS
- JavaScript (Vanilla JS)

### Backend
- Node.js
- Express
- MongoDB (Mongoose)
- REST API

---

## 📂 Project Structure

CLICKER/
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── server/
│   ├── src/
│   │   ├── models/
│   │   │   └── Video.js
│   │   └── index.js
│   └── videos/
│       └── 07_inv_episode.mp4
│
├── package.json
├── package-lock.json
└── .gitignore

## 🚀 How to Run the Project

### 1️⃣ Install dependencies

```bash
npm install

2️⃣ Start the backend server

node server/src/index.js

http://localhost:3000

3️⃣ Open the frontend

Open the file manually in a browser:

public/index.html

Or use Live Server extension in VS Code.

🔄 API Endpoints

📥 Get all videos

GET /videos

📤 Download video by ID

GET /videos/:id/download

➕ Add a new video

POST /videos

## 🎬 Video Setup

This project uses a local video file for rewards.

Before running the server, please make sure you have added a video file to the following directory:

server/videos/
The video file **must be named exactly**:

### Steps:
1. Create the folder `server/videos/` if it does not exist.
2. Download or add any `.mp4` video file.
3. Rename the file to `07_inv_episode.mp4`.
4. Place it inside the `server/videos/` folder.


⚠️ Notes
	•	Make sure the backend server is running before using rewards
	•	If the server is unavailable, an error message is shown on the client
	•	Video files are stored locally in the server/videos directory

📈 Possible Improvements
	•	Add environment variables (.env)
	•	Improve UI animations
	•	Add authentication system
	•	Deploy backend to cloud hosting
	•	Add database validation and pagination

👤 Author

G-D-A 
Junior JavaScript Developer

📜 License

This project is created for educational purposes.
