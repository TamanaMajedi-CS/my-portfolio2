import { useState } from "react";

function Star({ filled }){ return <span aria-hidden>{filled ? "★" : "☆"}</span>; }

export default function FeedbackWall(){
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [sort, setSort] = useState("new");

  function submit(e){
    e.preventDefault();
    const item = { id: crypto.randomUUID(), name, rating: Number(rating), comment, date: Date.now() };
    setEntries(prev => [item, ...prev]);
    setName(""); setRating(5); setComment("");
  }

  const sorted = [...entries].sort((a,b)=>{
    if (sort==="new") return b.date - a.date;
    return b.rating - a.rating;
  });

  return (
    <section className="card">
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        <h2 style={{margin:0}}>Feedback Wall</h2>
        <select className="input" value={sort} onChange={e=>setSort(e.target.value)} aria-label="Sort feedback" style={{maxWidth:180}}>
          <option value="new">Newest first</option>
          <option value="rating">Highest rating</option>
        </select>
      </div>

      <form onSubmit={submit} className="grid" style={{marginTop:12}}>
        <input className="input" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} required />
        <select className="input" value={rating} onChange={e=>setRating(e.target.value)} required>
          {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <textarea className="input" rows="3" placeholder="Write something…" value={comment} onChange={e=>setComment(e.target.value)} required />
        <button className="btn primary" type="submit">Add Feedback</button>
      </form>

      <div className="grid" style={{marginTop:16}}>
        {sorted.length === 0 ? <p className="muted">No feedback yet.</p> :
          sorted.map(f => (
            <article key={f.id} className="card fade-in">
              <div style={{display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
                <strong>{f.name}</strong>
                <span className={f.rating===5 ? "badge featured" : "badge"}>{f.rating} <Star filled={true} /></span>
                {f.rating===5 && <span className="badge featured" title="Featured">🌟 Featured</span>}
              </div>
              <p style={{margin:'6px 0 0'}}>{f.comment}</p>
            </article>
          ))
        }
      </div>
    </section>
  );
}
