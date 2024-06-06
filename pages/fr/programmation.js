import Head from "next/head";
import Main from "../../components/fr/programmation/1-Main";
import Presentation from "../../components/fr/programmation/2-Presentation";
import Tools from "../../components/fr/programmation/3-Tools";
import Contact from "../../components/fr/Contact";
import Project1 from "../../components/fr/programmation/Project1";
import Project2 from "../../components/fr/programmation/Project2";
import Project3 from "../../components/fr/programmation/Project3";
import Project4 from "../../components/fr/programmation/Project4";
import Project5 from "../../components/fr/programmation/Project5";
import Project6 from "../../components/fr/programmation/Project6";
import Project7 from "../../components/fr/programmation/Project7";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Portfolio de Noé</title>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="Portfolio de Noé" />
				<meta property="og:description" content="Développeur Javascript & Solidity" />
				<meta property="og:image" content={"https://noe-pecci.com/me/profile-photo.jpg"} />
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
