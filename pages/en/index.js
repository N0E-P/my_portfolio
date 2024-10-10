import Head from "next/head";
import Main from "../../components/en/index/1-Main";
import Contact from "../../components/en/Contact";
import Presentation from "../../components/en/index/2-Presentation";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Noé's Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="Noé's Portfolio" />
				<meta property="og:description" content="Bike Mechanic & Developer" />
				<meta property="og:image" content={"https://noe-pecci.com/me/profile-photo.jpg"} />
			</Head>
			<Main />
			<Presentation />
			<Contact />
		</div>
	);
}
