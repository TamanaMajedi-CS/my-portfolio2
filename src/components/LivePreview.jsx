export default function LivePreview({ name, email, message }){
  return (
    <aside className="card">
      <h3>Live Preview</h3>
      <p className="muted">This is how your message looks:</p>
      <div className="card" style={{background:'var(--panel)'}}>
        <p><strong>From:</strong> {name || "—"}</p>
        <p><strong>Email:</strong> {email || "—"}</p>
        <p style={{whiteSpace:'pre-wrap'}}>{message || "Start typing to see a preview ✍️"}</p>
      </div>
    </aside>
  );
}
