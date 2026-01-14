export default function Home() {
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
        <li>Instant refill via DEX (XP/USDC)</li>
      </ul>

      <p style={{ marginTop: 24, color: "gray" }}>
        Demo UI – Testnet only
      </p>
    </main>
  );
}
