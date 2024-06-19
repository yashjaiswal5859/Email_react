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
"scripts": { <br>
    "start": "react-scripts start",<br>
    "build": "react-scripts build",<br>
    "test": "react-scripts test",<br>
    "eject": "react-scripts eject",<br>
    "server": "node src/component/server.js"<br>

# Get App Password from google
Open your Google Account
![image](https://github.com/yashjaiswal5859/Email_react/assets/60476018/a976f021-01c9-4c04-8d38-414ba1bf9ab7) <br>
Search for `App Password`<br>

![image](https://github.com/yashjaiswal5859/Email_react/assets/60476018/84b5c698-d0f1-4091-b598-b169937cc8ec)<br>
Create new App<br>

And then you will get your password <br>

# Start app
npm run server <br>
npm start
