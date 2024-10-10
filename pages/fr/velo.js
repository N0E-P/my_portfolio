import Head from "next/head";
import Main from "../../components/fr/velo/1-Main";
import Presentation from "../../components/fr/velo/2-Presentation";
import Bikes from "../../components/fr/velo/3-Bikes";
import Contact from "../../components/fr/Contact";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Portfolio de Noé</title>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="Portfolio de Noé" />
				<meta property="og:description" content="Mécano Vélo" />
				<meta property="og:image" content={"https://noe-pecci.com/me/profile-photo.jpg"} />
			</Head>
			<Main />
			<Presentation />
			<Bikes />
			<Contact />
		</div>
	);
}
