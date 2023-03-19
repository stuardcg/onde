import "../styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider
      {...pageProps}
      appearance={{ variables: { fontFamily: inter.style.fontFamily } }}
    >
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  );
}

export default App;
