import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-container">
      <Head>
        <title>Whatsapp</title>
        <meta name="description" content="Whatsapp using next.js" />
        <link rel="icon" href="/assets/icons/favicon.ico" />
      </Head>
      <div className="chat-box">
        <Image
          src="/assets/images/whatsapp-home.jpg"
          width={250}
          height={250}
          quality={100}
        />
        <h2>keep your phone connected</h2>
        <p>
          Whatsapp connects to your phone to sync messages. To reduce data usage
          connect to wifi
        </p>
      </div>
    </div>
  );
}
