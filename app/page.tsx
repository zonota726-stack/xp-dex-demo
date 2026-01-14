"use client";

import { useState } from "react";

export default function Home() {
  const [xp, setXp] = useState(3200);
  const [decision, setDecision] = useState<string | null>(null);

  const refillXP = () => {
    setXp((prev) => prev + 1000);
    setDecision(null);
  };

  const runAIDecision = () => {
    if (xp < 9800) {
      setDecision("❌ Not enough XP for AI decision");
      return;
    }

    const choices = ["BUY XP/USDC", "SELL XP/USDC", "HOLD"];
    const pick = choices[Math.floor(Math.random() * choices.length)];
    setDecision(`🤖 AI Decision: ${pick} (Confidence: High)`);
  };

  return (
    <main style={{ padding: 24, maxWidth: 640 }}>
      <h1>XP DEX Demo</h1>
      <p>XP-powered AI DEX demo (testnet)</p>

      <h3>XP STATUS</h3>
      <ul>
        <li>Current XP: {xp.toLocaleString()}</li>
        <li>Required for next decision: 9,800</li>
      </ul>

      <h3>Refill options</h3>
      <button
        onClick={refillXP}
        style={{
          padding: "10px 16px",
          fontSize: 16,
          cursor: "pointer",
          marginRight: 8,
        }}
      >
        + Refill XP (simulate mint)
      </button>

      <button
        onClick={runAIDecision}
        style={{
          padding: "10px 16px",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        Run AI Decision
      </button>

      {decision && (
        <div
          style={{
            marginTop: 24,
            padding: 16,
            background: "#e6fffa",
            borderRadius: 8,
          }}
        >
          {decision}
        </div>
      )}

      <p style={{ marginTop: 32, color: "#666" }}>
        Demo UI – Testnet only
      </p>
    </main>
  );
}
