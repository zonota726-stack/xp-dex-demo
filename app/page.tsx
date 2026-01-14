'use client';
export default function Home() {
  const handleRefill = () => {
    alert("DEX refill triggered (testnet mock)");
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>XP DEX Demo</h1>
      <p>XP-powered AI DEX demo (testnet)</p>

      <h3>XP STATUS</h3>
      <ul>
        <li>Current XP: 3,200</li>
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
