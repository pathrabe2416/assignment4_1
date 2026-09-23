import { useState } from "react";
import "./App.css";

function isPrime(num) {
  const n = Math.trunc(Math.abs(num));
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCheck = (e) => {
    e.preventDefault();
    if (num === "") {
      setError("Please enter a number.");
      setResult(null);
      return;
    }
    setError("");
    setResult(isPrime(Number(num)));
  };

  const handleReset = () => {
    setNum("");
    setResult(null);
    setError("");
  };

  return (
    <div className="page">
      <div className="card">
        <h1>Prime Number Checker</h1>
        <p className="subtitle">Check whether a number is prime</p>
        <form onSubmit={handleCheck} className="form">
          <label>
            Number
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)} placeholder="e.g. 29" />
          </label>
          {error && <p className="error">{error}</p>}
          <div className="button-row">
            <button type="submit" className="btn-primary">Check</button>
            <button type="button" className="btn-secondary" onClick={handleReset}>Reset</button>
          </div>
        </form>
        {result !== null && (
          <div className={`result ${result ? "result-yes" : "result-no"}`}>
            <span>{num}</span>
            <strong>{result ? "Prime" : "Not Prime"}</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;