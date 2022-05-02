import Head from "next/head";
import Main from "../components/Main/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SCINET</title>
        <meta name="description" content="Science, decentralized." />
        <link rel="icon" href="/flask.ico" />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
          media="screen"
        /> */}
        <meta
          key="description"
          name="description"
          content="SCINET - Science, decentralized"
        />
        <meta
          key="keywords"
          name="keywords"
          content="SCINET, science, decentralized, blockchain, ICP, research, invest, monetize, data, crypto, currency, SCI"
        />
        <meta key="subject" name="subject" content="SCINET" />
        <meta key="robots" name="robots" content="index,follow" />
        <meta key="og_type" property="og:type" content="website" />
        <meta key="og_title" property="og:title" content="SCINET" />
        <meta
          key="og_description"
          property="og:description"
          content="SCINET is an online platform for decentralized science. Invest, research, and monetize all on the blockchain."
        />
        <meta key="og_site_name" property="og:site_name" content="SCINET" />
        <meta key="og_url" property="og:url" content="https://scinet.one/" />
        <meta
          key="og_image"
          property="og:image"
          content="https://www.scinet.one/banner.png"
        />
        <meta key="twitter_card" name="twitter:card" content="summary" />
        <meta key="twitter_site" name="twitter:site" content="SCINET" />
        <meta
          key="twitter_image_url"
          name="twitter:image"
          content="https://www.scinet.one/banner.png"
        />
        <meta
          key="twitter_description"
          name="twitter:description"
          content="SCINET is an online platform for decentralized science. Invest, research, and monetize all on the blockchain."
        />
        <meta
          key="scaling"
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <main>
        <Main />
      </main>
    </div>
  );
}
