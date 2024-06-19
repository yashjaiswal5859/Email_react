![image](https://github.com/yashjaiswal5859/Email_react/assets/60476018/745514ce-894f-4bf6-94fe-eba84e6cd4f8)Email_react
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
"scripts": { <br>
    "start": "react-scripts start",<br>
    "build": "react-scripts build",<br>
    "test": "react-scripts test",<br>
    "eject": "react-scripts eject",<br>
    "server": "node src/component/server.js"<br>

