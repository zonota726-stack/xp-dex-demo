"use client";

import { useState } from "react";

export default function Home() {
  // XP状態
  const [xp, setXp] = useState(3200);

  // AI判断結果
  const [decision, setDecision] = useState<string | null>(null);

  // XP補充（DEXリフィル）
  const handleRefill = () => {
    setXp((prev) => prev + 1000);
  };

  // AI判断（XP消費）
  const handleAIDecision = () => {
    if (xp < 9800) return;

    // XPを消費
    setXp(0);

    // AIの判断（デモ）
    setDecision("BUY XP/USDC");
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

      {/* XPが足りたらAI判断ボタン表示 */}
      {xp >= 9800 && !decision && (
        <button
          onClick={handleAIDecision}
          style={{
            padding: "12px 20px",
            marginTop: 16,
            fontSize: 16,
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          🤖 Use XP to get AI Decision
        </button>
      )}

      {/* AI判断結果 */}
      {decision && (
        <div
          style={{
            marginTop: 24,
            padding: 16,
            borderRadius: 8,
            background: "#e6fffa",
          }}
        >
          🤖 AI Decision: {decision} (Confidence: High)
        </div>
      )}

      <p style={{ marginTop: 24, color: "#666" }}>
        Demo UI – Testnet only
      </p>
    </main>
  );
}
