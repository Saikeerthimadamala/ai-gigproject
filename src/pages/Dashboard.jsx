import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  // 🔁 Redirect if no data (refresh or direct access)
  useEffect(() => {
    if (!data) {
      navigate("/risk");
    }
  }, [data, navigate]);

  // ⛔ Prevent rendering if no data
  if (!data) return null;

  const { temp, rain, riskLevel } = data;

  let premium = "";
  let payout = "";
  let trigger = "";

  if (riskLevel === "High") {
    premium = "₹40/week";
    payout = "₹500";
    trigger = "Heavy Rain / Extreme Heat";
  } else if (riskLevel === "Medium") {
    premium = "₹25/week";
    payout = "₹300";
    trigger = "Moderate Rainfall";
  } else {
    premium = "₹10/week";
    payout = "₹100";
    trigger = "Normal Conditions";
  }

  return (
    <div className="container">

      <div className="card">
        <h2>Worker Dashboard</h2>
      </div>

      <div className="card">
        <h3>Policy Details</h3>
        <p>Plan: Standard</p>
        <p>Weekly Premium: {premium}</p>
        <p>Coverage: ₹700</p>
        <p>Status: Active</p>
      </div>

      <div className="card">
        <h3>Risk Analysis</h3>
        <p><b>Risk Level:</b> {riskLevel}</p>
        <p><b>Last Weather Input:</b> {temp}°C, {rain} mm Rainfall</p>
      </div>

      <div className="card">
        <h3>Trigger Status</h3>
        <p>Status: Activated</p>
        <p>{trigger}</p>
      </div>

      <div className="card">
        <h3>Claim Details</h3>
        <p>Payout: {payout} (Auto-credited)</p>
      </div>

      <div className="card">
        <h3>AI Insight</h3>
        <p>
          Increased rainfall or temperature raises the income disruption risk for delivery workers.
        </p>
      </div>

    </div>
  );
}