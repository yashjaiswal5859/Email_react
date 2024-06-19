# Email_react
In this app, I am going to show how we can send email using react

# Backend dependencies
npm install express nodemailer

# Frontend dependencies
npm install react react-dom

# Architecture
email-sender-app/
├── node_modules/
├── src/
│   ├── App.js
│   ├── index.js
│   └── components
│   │   └── EmailForm.js
│   │   └── EmailSent.js
│   │   └── Home.js
│   │   └── sendEmail.js
│   │   └── server.js
├── package.json
└── ...

# package.json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "node src/component/server.js"

