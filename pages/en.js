import Head from "next/head";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";

export default function Home() {
  return (
    <div className="items-center justify-center">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>English version in construction...</h1>

      <Link href="/">
        <div className="flex py-6 px-2 text-blue-700 cursor-pointer">
          <AiOutlineLink size={25} />
          <p>Go back to French version</p>
        </div>
      </Link>
      <img
        className="rounded-xl"
        src={"me/lego.jpg"}
        width="2292px"
        height="2788px"
        alt="/"
      />
    </div>
  );
}
