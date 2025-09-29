import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";
import useDebounce from "../hooks/useDebounce.js";
import Modal from "./Modal.jsx";

export default function ContactForm(){
  const [name, setName] = useLocalStorage("contact_name", "");
  const [email, setEmail] = useLocalStorage("contact_email", "");
  const [message, setMessage] = useLocalStorage("contact_message", "");
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState(false);

  const [errors, setErrors] = useState({});
  const debouncedEmail = useDebounce(email, 400);

  useEffect(()=> {
    setHint(Boolean(name || email || message));
  }, [name, email, message]);

  useEffect(()=> {
    if (!debouncedEmail) return;
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(debouncedEmail);
    setErrors(prev => ({ ...prev, email: ok ? "" : "Please enter a valid email (e.g., name@domain.com)" }));
  }, [debouncedEmail]);

  function validateNow(){
    const e = {};
    if (!name.trim()) e.name = "Name is required.";
    if (!message.trim()) e.message = "Please write a short message.";
    if (!email.trim()) e.email = "Email is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(e){
    e.preventDefault();
    if(!validateNow()) return;
    setSubmitted(true);
    setOpen(true);
  }

  function resetForm(){
    setName(""); setEmail(""); setMessage(""); setSubmitted(false); setHint(false);
  }

  return (
    <section className="card">
      <h2>Contact</h2>
      {hint && !submitted && <div className="badge slide-in">You have unsent message data saved!</div>}
      <form onSubmit={onSubmit} noValidate style={{display:'grid', gap:12, marginTop:12}}>
        <label>
          <span>Name</span>
          <input className="input" value={name} onChange={e=>setName(e.target.value)} aria-invalid={!!errors.name} />
          {errors.name && <div className="error">{errors.name}</div>}
        </label>
        <label>
          <span>Email</span>
          <input className="input" value={email} onChange={e=>setEmail(e.target.value)} aria-invalid={!!errors.email} />
          {errors.email && <div className="error">{errors.email}</div>}
        </label>
        <label>
          <span>Message</span>
          <textarea rows="5" value={message} onChange={e=>setMessage(e.target.value)} aria-invalid={!!errors.message} />
          {errors.message && <div className="error">{errors.message}</div>}
        </label>
        <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
          <button className="btn primary" type="submit">Send</button>
          <button className="btn" type="button" onClick={resetForm}>Reset</button>
        </div>
      </form>

      <Modal open={open} onClose={()=>setOpen(false)} title="Thanks!">
        <p>Thank you, <strong>{name}</strong>! Your message was sent. ✨</p>
      </Modal>
    </section>
  );
}
