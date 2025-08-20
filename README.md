# 📚 MERN Stack CRUD Application - Student Info Manager

This is a full-stack **CRUD** (Create, Read, Update, Delete) web application built using the **MERN stack** — **MongoDB**, **Express.js**, **React.js**, and **Node.js**. The app allows users to manage student records, including their **name**, **email**, **phone number**, and a **message**.

---

## 🚀 Features

* ✅ Add new student records
* 📄 View a list of all students
* ✏️ Edit student details
* ❌ Delete student records
* 🔁 Real-time updates on the UI
* ⚙️ Backend API built with RESTful routes

---

## 🛠️ Tech Stack

| Technology                    | Description                             |
| ----------------------------- | --------------------------------------- |
| MongoDB                       | NoSQL database for storing student info |
| Express.js                    | Backend framework for routing and API   |
| React.js                      | Frontend library for UI components      |
| Node.js                       | Server-side JavaScript runtime          |
| Mongoose                      | MongoDB ODM for schema and models       |
| Axios/Fetch                   | For making API requests from frontend   |
| Bootstrap/Tailwind (Optional) | For UI styling                          |

---

## 📂 Project Structure

```
userenquiry/│
├── server/
│   ├── models/
│   ├── routes/
│   ├── server.js
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│
├── .env
├── package.json
└── README.md
```

---

## 📋 Student Data Fields

Each student record includes the following fields:

* **Name**: Full name of the student
* **Email**: Valid email address
* **Phone Number**: Contact number
* **Message**: Additional message or comment

---

## 🧪 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/mern-crud-student-app.git
cd mern-crud-student-app
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

* Create a `.env` file inside `/backend` and add your MongoDB URI:

```
MONGO_URI=mongodb://localhost:27017/studentDB
PORT=5000
```

* Start the backend server:

```bash
npm start
```

### 3. Set Up the Frontend

```bash
cd ../frontend
npm install
npm start
```

* The frontend will run on [http://localhost:3000](http://localhost:3000)

---

## 📷 Screenshots (Optional)



---

## 📌 Future Improvements

* Form validation
* Pagination and search
* Authentication and admin dashboard
* Export to CSV or PDF

---

