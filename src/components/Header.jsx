export default function Header({ message, quote }){
  return (
    <header className="header card fade-in">
      <h1>Hey, I’m <span style={{color:'var(--brand)'}}>Tamana Majedi</span> 👋</h1>
      <p>{message}</p>
      {quote && <p className="muted" style={{marginTop:8}}>“{quote}”</p>}
    </header>
  );
}
