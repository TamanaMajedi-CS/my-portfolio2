import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer(){
  return (
    <footer className="container" style={{paddingTop:0}}>
      <div className="card" style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:12, flexWrap:'wrap'}}>
        <div className="muted">© {new Date().getFullYear()} Tamana Majedi</div>
        <div style={{display:'flex', gap:10}}>
          <a href="https://github.com/TamanaMajedi-CS" aria-label="GitHub"><FaGithub size={20} /></a>
          <a href="https://www.linkedin.com/in/tamana-majedi-8259a3355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
          <a href="https://twitter.com/your-handle" aria-label="Twitter / X"><FaTwitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
