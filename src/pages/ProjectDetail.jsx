import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import TechBadge from "../components/TechBadge.jsx";

export default function ProjectDetail(){
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  if(!project){
    return (
      <div className="card">
        <p>Project not found.</p>
        <Link to="/projects" className="btn">Back to Projects</Link>
      </div>
    );
  }
  return (
    <article className="card fade-in">
      <Link to="/projects" className="btn ghost">← All Projects</Link>
      <h1 style={{marginBottom:0}}>{project.name}</h1>
      <p className="muted" style={{marginTop:8}}>{project.description}</p>

      <img src={project.image} alt={`${project.name} preview`} style={{width:'100%', borderRadius:12, margin:'12px 0'}} />

      <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
        {project.tech.map(t => <TechBadge key={t}>{t}</TechBadge>)}
      </div>

      <div style={{display:'flex', gap:8, flexWrap:'wrap', marginTop:12}}>
        {project.live && <a className="btn primary" href={project.live} target="_blank" rel="noreferrer">Live Demo</a>}
        {project.repo && <a className="btn" href={project.repo} target="_blank" rel="noreferrer">Code Repo</a>}
      </div>
    </article>
  );
}
