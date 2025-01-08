import Head from "next/head";
import Main from "../components/sports/1-Main";
import Contact from "../components/Contact";
import Sports from "../components/sports/2-Sports";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Noé's Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="Noé's Portfolio" />
				<meta property="og:description" content="Cyclist and Track & Field Athlete" />
				<meta property="og:image" content={"https://noe-pecci.com/profile-photo.jpg"} />
			</Head>
			<Main />
			<Sports />
			<Contact />
		</div>
	);
}
