import { Link } from "react-router-dom";
import TechBadge from "./TechBadge.jsx";
import { useFavorites } from "../context/FavoritesContext.jsx";

export default function ProjectCard({ project, expandable=false }){
  const { fav, dispatch } = useFavorites();
  const isFav = fav.has(project.id);

  return (
    <article className="card fade-in" aria-labelledby={`${project.id}-title`}>
      <div className="grid grid-2" style={{alignItems:'center'}}>
        <div>
          {project.image ? (
            <img src={project.image} alt={`${project.name} preview`} style={{width:"100%", borderRadius:"12px"}} />
          ) : (
            <div aria-hidden className="card" style={{aspectRatio:'16/9', display:'grid', placeItems:'center'}}> {project.name[0]} </div>
          )}
        </div>
        <div>
          <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
            {project.featured && <span className="badge featured" title="Featured">🌟 Featured</span>}
            <span className="badge">{project.status}</span>
            <span className="badge">Priority: {project.priority}</span>
          </div>
          <h3 id={`${project.id}-title`} style={{margin:'10px 0 6px'}}>{project.name}</h3>
          <p className="muted">{project.description}</p>

          <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={project.progress} aria-label="Project progress">
            <span style={{width:`${project.progress}%`}} />
          </div>

          <div style={{display:'flex', gap:8, flexWrap:'wrap', marginTop:12}}>
            {project.tech.map(t => <TechBadge key={t}>{t}</TechBadge>)}
          </div>

          <div style={{display:'flex', gap:8, marginTop:14, flexWrap:'wrap'}}>
            <Link className="btn primary" to={`/projects/${project.id}`}>View Project</Link>
            {project.repo && <a className="btn" href={project.repo} target="_blank" rel="noreferrer">View Code</a>}
            {project.live && <a className="btn" href={project.live} target="_blank" rel="noreferrer">Live Demo</a>}
            <button className="btn ghost" onClick={()=>dispatch({type:"toggle", id:project.id})} aria-pressed={isFav} aria-label="Star project">
              {isFav ? "★ Starred" : "☆ Star"}
            </button>
          </div>

          {expandable && (
            <details className="fade-in" style={{marginTop:12}}>
              <summary className="btn ghost" aria-expanded="false">More Info</summary>
              <p className="muted" style={{marginTop:8}}>Built to explore component composition, state, and animations.</p>
            </details>
          )}
        </div>
      </div>
    </article>
  );
}
