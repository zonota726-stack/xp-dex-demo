"use client";

import { useState } from "react";

export default function Home() {
  const [xp, setXp] = useState(3200);
  const requiredXp = 9800;

  // 仮：XP補充（ボタン押下でXP増えるだけ）
  const handleRefill = () => {
    setXp((prev) => prev + 1000);
  };

  // MetaMask 接続
  const connectWallet = async () => {
    if (!(window as any).ethereum) {
      alert("MetaMask not found");
      return;
    }

    const accounts = await (window as any).ethereum.request({
      method: "eth_requestAccounts",
    });

    alert("Connected wallet:\n" + accounts[0]);
  };

  const aiDecision =
    xp >= requiredXp
      ? "BUY XP/USDC (Confidence: High)"
      : "WAIT (Not enough XP)";

  return (
    <main style={{ padding: 24, maxWidth: 640 }}>
      <h1>XP DEX Demo</h1>
      <p>XP-powered AI DEX demo (testnet)</p>

      <h3>XP STATUS</h3>
      <ul>
        <li>Current XP: {xp.toLocaleString()}</li>
        <li>Required for next decision: {requiredXp.toLocaleString()}</li>
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

      <button
        onClick={connectWallet}
        style={{
          marginTop: 20,
          padding: "10px 16px",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        Connect Wallet (MetaMask)
      </button>

      <h3 style={{ marginTop: 32 }}>AI DECISION</h3>
      <div
        style={{
          background: "#eafff5",
          border: "1px solid #9de0c5",
          padding: 16,
          borderRadius: 8,
        }}
      >
        🤖 AI Decision: {aiDecision}
      </div>

      <p style={{ marginTop: 24, color: "#666" }}>
        Demo UI – Testnet only
      </p>
    </main>
  );
}
