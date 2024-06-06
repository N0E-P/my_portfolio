import Head from "next/head";
import Main from "../../components/fr/index/1-Main";
import Contact from "../../components/fr/Contact";
import Presentation from "../../components/fr/index/2-Presentation";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Portfolio de Noé</title>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="Portfolio de Noé" />
				<meta property="og:description" content="Développeur & Mécano Vélo" />
				<meta property="og:image" content={"https://noe-pecci.com/me/profile-photo.jpg"} />
			</Head>
			<Main />
			<Presentation />
			<Contact />
		</div>
	);
}
