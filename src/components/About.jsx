import { useState } from "react";

export default function About(){
  const [showMore, setShowMore] = useState(false);
  const [face, setFace] = useState("🙂");

  const hobbies = ["Photography", "Gaming", "Bouldering"];

  return (
    <section className="card">
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        <h2 style={{margin:0}}>About Me</h2>
        <button className="btn" onClick={()=>setShowMore(s=>!s)} aria-expanded={showMore}>
          {showMore ? "Show Less" : "Show More"}
        </button>
        <button className="btn ghost" onMouseEnter={()=>setFace("😎")} onMouseLeave={()=>setFace("🙂")} onClick={()=>setFace(face==="😄"?"🤓":"😄")} aria-label="Avatar reaction">
          {face}
        </button>
      </div>
      <p className="muted">I’m currently learning  building Websites.</p>
      <ul>
        {hobbies.map(h => <li key={h}>{h}</li>)}
      </ul>
      {showMore && (
        <div className="fade-in">
          <p>I enjoy designing web apps and writing clean code.</p>
        </div>
      )}
    </section>
  );
}
