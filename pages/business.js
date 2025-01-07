import Head from "next/head";
import Main from "../components/business/1-Main";
import Contact from "../components/Contact";
import Presentation from "../components/business/2-Presentation";
import Businesses from "../components/business/3-Businesses";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Noé's Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="Noé's Portfolio" />
				<meta property="og:description" content="Aspiring entrepreneur" />
				<meta property="og:image" content={"https://noe-pecci.com/profile-photo.jpg"} />
			</Head>
			<Main />
			<Presentation />
			<Businesses />
			<Contact />
		</div>
	);
}
