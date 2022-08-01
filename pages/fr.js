import Head from "next/head";
import Header from "../components/fr/Header";
import Presentation from "../components/fr/Presentation";
import Crypto from "../components/fr/Crypto";
import Projects from "../components/fr/Projects";
import Tools from "../components/fr/Tools";
import Conclusion from "../components/fr/Conclusion";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Noé | Développeur Solidity</title>
        <meta name="description" content="Mon Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Presentation />
      <Crypto />
      <Projects />
      <Tools />
      <Conclusion />
    </div>
  );
}
