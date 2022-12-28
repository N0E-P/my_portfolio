import Head from "next/head";
import Main from "../components/en/1-Main";
import Presentation from "../components/en/2-Presentation";
import Tools from "../components/en/3-Tools";
import Contact from "../components/en/4-Contact";
import Project1 from "../components/en/Project1";
import Project2 from "../components/en/Project2";
import Project3 from "../components/en/Project3";
import Project4 from "../components/en/Project4";
import Project5 from "../components/en/Project5";
import Project6 from "../components/en/Project6";
import Project7 from "../components/en/Project7";
import Project8 from "../components/en/Project8";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Noé | Blockchain Developer</title>
				<meta name="description" content="My Portfolio" />
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
			<Project7 />
			<Project8 />
			<Tools />
			<Contact />
		</div>
	);
}
