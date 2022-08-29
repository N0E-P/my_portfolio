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
        className="m-4 rounded-xl hover:scale-110 ease-in duration-300 cursor-pointer ml-5"
        src={"me/lego.JPG"}
        alt="Français"
        width="100"
        height="75"
      />
    </div>
  );
}
