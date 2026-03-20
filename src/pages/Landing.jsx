import { Link } from "react-router-dom";
import "../style.css";

export default function Landing() {
  return (
    <div className="container">
      <h1>GigProtect AI</h1>
      <p>AI-powered risk protection for delivery workers</p>

      <Link to="/risk">
        <button>Get Started</button>
      </Link>
    </div>
  );
}