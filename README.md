![image](https://github.com/yashjaiswal5859/Email_react/assets/60476018/79472421-a4e2-4f86-abb6-12be34fe7847)# Email_react
In this app, I am going to show how we can send email using react

# Backend dependencies
npm install express nodemailer

# Frontend dependencies
npm install react react-dom

# Architecture

├── node_modules/ <br>
├── src/
│ ├── App.js
│ ├── index.js
│ └── components
│ │ └── EmailForm.js
│ │ └── EmailSent.js
│ │ └── Home.js
│ │ └── sendEmail.js
│ │ └── server.js
├── package.json
└── ...
![image](https://github.com/yashjaiswal5859/Email_react/assets/60476018/4ba6197b-cf42-4afe-acd3-43c9832576b1)

# package.json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "node src/component/server.js"

