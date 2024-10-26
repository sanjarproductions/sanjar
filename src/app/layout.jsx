import "./globals.css";
import Script from 'next/script';

export const metadata = {
  title: "Sanjar",
  description: "Sanjar Kamaliddinov's personal website",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Sanjar" />
        <meta property="og:description" content="Sanjar Kamaliddinov's personal website" />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:url" content="https://sanjar.vercel.app/" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-01DP4M8CZT"
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-01DP4M8CZT');
          `}
        </Script>
      </body>
    </html>
  );
}