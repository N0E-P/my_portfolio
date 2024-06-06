import Head from "next/head";
import Main from "../../components/fr/programmation/1-Main";
import Presentation from "../../components/fr/programmation/2-Presentation";
import Tools from "../../components/fr/programmation/3-Tools";
import Contact from "../../components/fr/programmation/4-Contact";

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
			<Tools />
			<Contact />
		</div>
	);
}
