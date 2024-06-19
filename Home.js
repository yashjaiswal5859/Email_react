// src/Home.jsx
import React, { useState } from 'react';
import EmailForm from './EmailForm';
import EmailSent from './EmailSent';

const Home = () => {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <div className="Home">
      <h1>Send Email</h1>
      {emailSent ? <EmailSent /> : <EmailForm setEmailSent={setEmailSent} />}
    </div>
  );
};

export default Home;
