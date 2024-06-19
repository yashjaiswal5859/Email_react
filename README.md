Email_react
In this app, I am going to show how we can send email using react

# Backend dependencies
npm install express nodemailer

# Frontend dependencies
npm install react react-dom

# Architecture

├── node_modules/ <br>
├── src/<br>
│ ├── App.js<br>
│ ├── index.js<br>
│ └── components<br>
│ │ └── EmailForm.js<br>
│ │ └── EmailSent.js<br>
│ │ └── Home.js<br>
│ │ └── sendEmail.js<br>
│ │ └── server.js<br>
├── package.json<br>
└── ...<br>

# package.json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "node src/component/server.js"

