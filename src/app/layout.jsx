import "./globals.css";

export const metadata = {
  title: "Sanjar",
  description: "Sanjar Kamaliddinov's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
