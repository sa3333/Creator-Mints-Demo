import { ThirdwebProvider, paperWallet } from "@thirdweb-dev/react";
import Head from "next/head";
import { domainName } from "../const/yourDetails";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }) {
  

  
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      supportedWallets={[
        paperWallet({
          paperClientId: process.env.NEXT_PUBLIC_clientId
        })
      ]}
      authConfig={{
        domain: domainName,
        authUrl: "/api/auth",
      }}
    >
      <Head>
        <title>Creator Mints Demo</title>
        <link rel="favicon" href="../public/favicon.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn how to use the thirdweb Auth SDK to create an NFT Gated Website"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
