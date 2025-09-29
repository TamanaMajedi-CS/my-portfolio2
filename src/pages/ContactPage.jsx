import { useState } from "react";
import ContactForm from "../components/ContactForm.jsx";
import LivePreview from "../components/LivePreview.jsx";
import useLocalStorage from "../hooks/useLocalStorage.js";
import FeedbackWall from "../components/FeedbackWall.jsx";

export default function ContactPage(){
  
  const [name] = useLocalStorage("contact_name", "");
  const [email] = useLocalStorage("contact_email", "");
  const [message] = useLocalStorage("contact_message", "");


  return (
    <div className="grid grid-2">
      <div className="grid" style={{alignContent:'start'}}>
        <ContactForm />
        <FeedbackWall />
      </div>
      <LivePreview name={name} email={email} message={message} />
    </div>
  );
}
