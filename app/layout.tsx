export const metadata = {
  title: "XP DEX Demo",
  description: "XP-powered AI DEX demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
