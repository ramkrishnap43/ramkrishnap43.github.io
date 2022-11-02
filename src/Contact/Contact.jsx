import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef();

  const [send, setSend] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f2sbnla",
        "template_mwihbz8",
        formRef.current,
        "Pg-vrK1n2pgGLVS1Z"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSend(true);
          console.log("Message Send")
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c" id="contact">
         <h1 style={{textAlign:"center", fontSize:"36px", fontWeight:"bold"}}>Contact</h1>
      <div className="c-bg"></div>
      <div className="c-wrapper">
       
        <div className="c-right">

           
         
          <form action="" ref={formRef} onSubmit={handleSubmit} style={{margin:"auto", marginTop:"15px", width:"80%", }}>
           
            <input style={{width:"80%"}} type="text" placeholder="Name" name="user_name" />
            <br />
            <br />
            <input type="text" placeholder="Subject" name="user_subject" />
            <br />
            <br />
            <input type="text" placeholder="Email" name="user_email" />
            <br />
            <br />
            <textarea
              coloms="10"
              rows="5"
              placeholder="Message"
              name="message"
            />
            <br />
            <button id="contactBtn" style={{marginLeft:"-30px"}}>Submit</button>
            {send && "Thank You for Contacting me..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;