import Header from "../components/Header.jsx";
import Profile from "../components/Profile.jsx";
import Skills from "../components/Skills.jsx";
import UpdatesTicker from "../components/UpdatesTicker.jsx";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

import tamanaPhoto from "../assets/TamanaMajedi.jpg"; // <— one import, once



const quotes = [
  "Small steps, big impact.",
  "Ship early. Iterate often.",
  "Clarity beats cleverness."
];

export default function Home(){
  const quote = quotes[Math.floor(Math.random()*quotes.length)];
  return (
    <div className="grid">
      <Header message="Welcome to my developer portfolio." quote={quote} />
      <Profile
         photo={tamanaPhoto} 
        title="Tamana Majedi"
        bio="I build accessible, responsive web apps with React. I love clean UI, tiny bundles, and DX."
      />
      <Skills />
      <UpdatesTicker />
      <section className="grid">
        <h2>Featured Projects</h2>
        {projects.filter(p => p.featured).map(p => <ProjectCard key={p.id} project={p} expandable />)}
      </section>
    </div>
  );
}
