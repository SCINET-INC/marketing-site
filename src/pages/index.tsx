import Head from "next/head";
import Main from "../components/Main/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SCINET</title>
        <meta name="description" content="Science, decentralized." />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
          media="screen"
        />
      </Head>
      <main>
        <Main />
      </main>
    </div>
  );
}
