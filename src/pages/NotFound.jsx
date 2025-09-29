import { Link } from "react-router-dom";
export default function NotFound(){
  return (
    <div className="card">
      <h2>Page not found</h2>
      <Link className="btn" to="/">Go Home</Link>
    </div>
  );
}
