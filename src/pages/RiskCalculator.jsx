import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RiskCalculator() {
  const [temp, setTemp] = useState("");
  const [rain, setRain] = useState("");
  const [result, setResult] = useState("");
  const [riskLevel, setRiskLevel] = useState("");

  const navigate = useNavigate();

  const calculateRisk = () => {
    if (temp === "" || rain === "") {
      setResult("⚠️ Please enter both Temperature and Rainfall");
      return;
    }

    const t = Number(temp);
    const r = Number(rain);

    let risk = "";
    let premium = "";
    let payout = "";

    if (t > 40 || r > 50) {
      risk = "High";
      premium = "₹40/week";
      payout = "₹500";
    } else if (t > 35 || r > 20) {
      risk = "Medium";
      premium = "₹25/week";
      payout = "₹300";
    } else {
      risk = "Low";
      premium = "₹10/week";
      payout = "₹100";
    }

    setRiskLevel(risk);
    setResult(`${risk} Risk - Premium ${premium}`);
  };

  const goToDashboard = () => {
    if (!riskLevel) {
      alert("⚠️ Please calculate risk first");
      return;
    }

    navigate("/dashboard", {
      state: {
        temp,
        rain,
        riskLevel,
      },
    });
  };

  return (
    <div className="container">
      <div className="card">
        <h2>AI Risk Calculator</h2>

        <input
          type="number"
          placeholder="Temperature (°C)"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Rainfall (mm)"
          value={rain}
          onChange={(e) => setRain(e.target.value)}
        />
        <br /><br />

        <button className="button" onClick={calculateRisk}>
          Calculate
        </button>

        <h3>{result}</h3>

        <button className="button" onClick={goToDashboard}>
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}