import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default App;
