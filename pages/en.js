import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="items-center justify-center">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>English version in construction...</h1>
      <div className="flex py-4 px-2">
        <Link href="/">
          <img src={"flags/fr.png"} alt="Français" width="60" height="40"></img>
        </Link>
        <Link href="/en">
          <img src={"flags/en.png"} alt="English" width="60" height="40"></img>
        </Link>
      </div>
    </div>
  );
}
