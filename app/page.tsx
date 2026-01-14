"use client";

import { useState } from "react";
export default function Home() {
  const [xp, setXp] = useState(3200);

  const handleRefill = () => {
    setXp((prev) => prev + 1000);
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>XP DEX Demo</h1>
      <p>XP-powered AI DEX demo (testnet)</p>

      <h3>XP STATUS</h3>
      <ul>
        <li>Current XP: {xp.toLocaleString()}</li>
        <li>Required for next decision: 9,800</li>
      </ul>

      <h3>Refill options</h3>
      <ul>
        <li>Earn by action (slow)</li>
        <li>
          <button
            onClick={handleRefill}
            style={{
              padding: "10px 16px",
              marginTop: 8,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Instant refill via DEX (XP/USDC)
          </button>
        </li>
      </ul>

      <p style={{ marginTop: 24, color: "#666" }}>
        Demo UI – Testnet only
      </p>
    </main>
  );
}
