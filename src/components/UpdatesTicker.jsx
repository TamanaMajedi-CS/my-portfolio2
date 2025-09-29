import { useEffect, useState } from "react";

const PRESET = [
  "New project card animation added",
  "Improved keyboard focus outlines",
  "Dark/Light/Ocean themes polished",
  "Feedback sorting by rating enabled",
  "Debounced email validation tuned"
];

export default function UpdatesTicker(){
  const [items, setItems] = useState(["Portfolio bootstrapped"]);
  useEffect(()=>{
    let i = 0;
    const id = setInterval(()=>{
      setItems(prev => [`${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})} — ${PRESET[i%PRESET.length]}`, ...prev].slice(0,8));
      i++;
    }, 15000);
    return ()=> clearInterval(id);
  },[]);
  return (
    <aside className="card">
      <strong>Project Updates</strong>
      <ul style={{maxHeight:160, overflow:'auto', marginTop:8}}>
        {items.map((it, idx)=> <li key={idx} className="slide-in">{it}</li>)}
      </ul>
    </aside>
  );
}
