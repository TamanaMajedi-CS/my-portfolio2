export default function Modal({ open, onClose, children, title="Message"}){
  if(!open) return null;
  return (
    <div role="dialog" aria-modal="true" className="fade-in"
      style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', display:'grid', placeItems:'center', zIndex:200}}>
      <div className="card" style={{maxWidth:480, width:'90%'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <h3 style={{margin:0}}>{title}</h3>
          <button className="btn" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div style={{marginTop:10}}>{children}</div>
      </div>
    </div>
  );
}
