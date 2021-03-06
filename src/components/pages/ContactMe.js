import React, { useState } from 'react';

import { validateEmail } from './utils/helpers';
import './utils/style.css';

//
function Contact() {
  

  const [email, setEmail] = useState('');
  const [userName, setName] = useState('');
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {
    

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    
//
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setName(inputValue);
    } else {
      setComment(inputValue);
    }
  };



  const handleFormSubmit = (e) => {
    
    e.preventDefault();

    
    if (!validateEmail(email) || !userName) {
      setErrorMessage('This email address is invalid');
      
      return;
    }
   

    setName('');
    setComment('');
    setEmail('');
  };



  return (
    <div class="container p-3 mb-3">
      <p></p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Please enter email address"
        />


        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your name"
        />


        <input
          value={comment}
          name="comment"
          onChange={handleInputChange}
          type="text"
          placeholder="Please leave a question or comment!"
        />


        <button type="button" class="btn btn-success" onClick={handleFormSubmit}>Submit</button>
      </form>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}



export default Contact;