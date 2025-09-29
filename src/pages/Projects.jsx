import { useMemo, useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

const ALL_TECH = Array.from(new Set(projects.flatMap(p => p.tech)));

export default function Projects(){
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(()=>{
    return projects.filter(p => (filter==="All" || p.tech.includes(filter)) && p.name.toLowerCase().includes(query.toLowerCase()));
  }, [filter, query]);

  return (
    <div className="grid">
      <div className="card" style={{display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
        <input className="input" placeholder="Search projects…" value={query} onChange={e=>setQuery(e.target.value)} style={{maxWidth:280}} />
        <button className={`btn ${filter==="All"?"primary":""}`} onClick={()=>setFilter("All")}>All</button>
        {ALL_TECH.map(t => (
          <button key={t} className={`btn ${filter===t?"primary":""}`} onClick={()=>setFilter(t)}>{t}</button>
        ))}
      </div>
      {filtered.map(p => <ProjectCard key={p.id} project={p} expandable />)}
      {filtered.length===0 && <p className="muted">No projects match your filters.</p>}
    </div>
  );
}
