import Head from "next/head";
import Main from "../../components/fr/programmation/1-Main";
import Contact from "../../components/fr/programmation/4-Contact";
import Project1 from "../../components/fr/programmation/Project1";
import Project2 from "../../components/fr/programmation/Project2";

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
			<Project1 />
			<Project2 />
			<Contact />
		</div>
	);
}
