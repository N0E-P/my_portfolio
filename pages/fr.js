import Head from "next/head";
import Main from "../components/fr/1-Main";
import Presentation from "../components/fr/2-Presentation";
import Tools from "../components/fr/3-Tools";
import Contact from "../components/fr/4-Contact";
import Project1 from "../components/fr/Project1";
import Project2 from "../components/fr/Project2";
import Project3 from "../components/fr/Project3";
import Project4 from "../components/fr/Project4";
import Project5 from "../components/fr/Project5";
import Project6 from "../components/fr/Project6";
import Project7 from "../components/fr/Project7";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Portfolio de Noé</title>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="Portfolio de Noé" /> 
				<meta property="og:description" content="Développeur Javascript & Solidity" />
				<meta property="og:image" content={"https://noe-pecci.com/me/profile-photo.jpg"}/>
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
			<Tools />
			<Contact />
		</div>
	);
}
