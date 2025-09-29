const SKILLS = [
  { name:"React", level:80, fun:"Built 10+ components this week" },
  { name:"CSS", level:75, fun:"Prefers fluid type & grids" },
  { name:"JavaScript", level:78, fun:"Writes clean, modern ES modules" }
];

export default function Skills(){
  return (
    <section className="card">
      <h2>Skills</h2>
      <div className="grid">
        {SKILLS.map(s => (
          <div key={s.name} className="fade-in" title={s.fun}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <strong>{s.name}</strong><span className="muted">{s.level}%</span>
            </div>
            <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={s.level} aria-label={`${s.name} proficiency`}>
              <span style={{width:`${s.level}%`}} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
