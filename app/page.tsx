"use client";

import { useState } from "react";

export default function Home() {
  const [xp, setXp] = useState(3200);
  const [account, setAccount] = useState<string | null>(null);

  // MetaMask 接続
  const connectWallet = async () => {
    if (!(window as any).ethereum) {
      alert("MetaMask not found");
      return;
    }

    const accounts = await (window as any).ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);
  };

  // XP補充（仮）
  const handleRefill = () => {
    setXp((prev) => prev + 1000);
  };

  const canDecide = xp >= 9800;

  return (
    <main style={{ padding: 20 }}>
      <h1>XP DEX Demo</h1>
      <p>XP-powered AI DEX demo (testnet)</p>

      {/* Wallet */}
      <h3>Wallet</h3>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <button onClick={connectWallet}>Connect MetaMask</button>
      )}

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

      {canDecide && account && (
        <>
          <h3>AI DECISION</h3>
          <div
            style={{
              background: "#e8fffb",
              padding: 16,
              borderRadius: 8,
              marginTop: 12,
            }}
          >
            🤖 AI Decision: BUY XP/USDC (Confidence: High)
          </div>
        </>
      )}

      {!account && (
        <p style={{ marginTop: 16, color: "#c00" }}>
          ※ Connect wallet to unlock AI decision
        </p>
      )}

      <p style={{ marginTop: 24, color: "#666" }}>
        Demo UI – Testnet only
      </p>
    </main>
  );
}
