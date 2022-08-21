import Head from "next/head";
import Main from "../components/fr/Main";
import Presentation from "../components/fr/Presentation";
import Project1 from "../components/fr/Project1";
import Project2 from "../components/fr/Project2";
import Project3 from "../components/fr/Project3";
import Project4 from "../components/fr/Project4";
import Project5 from "../components/fr/Project5";
import Project6 from "../components/fr/Project6";
import Tools from "../components/fr/Tools";
import Contact from "../components/fr/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Noé | Développeur Solidity</title>
        <meta name="description" content="Mon Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Presentation />
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
      <Project5 />
      <Project6 />
      <Tools />
      <Contact />
    </div>
  );
}
