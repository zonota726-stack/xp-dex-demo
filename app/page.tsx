"use client";

import { useState } from "react";

export default function Home() {
  const [xp, setXp] = useState(3200);
  const [account, setAccount] = useState<string | null>(null);
  const [decision, setDecision] = useState<string | null>(null);

  // ウォレット接続
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

  // XP補充（デモ）
  const handleRefill = () => {
    setXp((prev) => prev + 1000);
  };

  // AI判断（XP消費）
  const runAIDecision = () => {
    if (xp < 9800) {
      alert("Not enough XP");
      return;
    }

    const options = [
      "BUY XP/USDC",
      "SELL XP/USDC",
      "HOLD",
    ];
    const picked =
      options[Math.floor(Math.random() * options.length)];

    setXp((prev) => prev - 9800);
    setDecision(picked);
  };

  return (
    <main style={{ padding: 24 }}>
      <h1>XP DEX Demo</h1>
      <p>XP-powered AI DEX demo (testnet)</p>

      {/* Wallet */}
      <section style={{ marginTop: 24 }}>
        <h3>Wallet</h3>
        {account ? (
          <p>
            Connected:{" "}
            <b>
              {account.slice(0, 6)}...
              {account.slice(-4)}
            </b>
          </p>
        ) : (
          <button onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </section>

      {/* XP Status */}
      <section style={{ marginTop: 24 }}>
        <h3>XP STATUS</h3>
        <ul>
          <li>Current XP: {xp.toLocaleString()}</li>
          <li>Required: 9,800</li>
        </ul>
      </section>

      {/* Refill */}
      <section style={{ marginTop: 24 }}>
        <h3>Refill options</h3>
        <button onClick={handleRefill}>
          Instant refill via DEX (XP/USDC)
        </button>
      </section>

      {/* AI Decision */}
      <section style={{ marginTop: 24 }}>
        <button
          onClick={runAIDecision}
          disabled={!account}
        >
          Run AI Decision
        </button>

        {decision && (
          <div
            style={{
              marginTop: 16,
              padding: 16,
              background: "#e6fffa",
              borderRadius: 8,
            }}
          >
            🤖 AI Decision: <b>{decision}</b>
          </div>
        )}
      </section>

      <p style={{ marginTop: 32, color: "#666" }}>
        Demo UI – Testnet only
      </p>
    </main>
  );
}
