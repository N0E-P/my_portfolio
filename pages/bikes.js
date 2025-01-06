import Head from "next/head";
import Main from "../components/bike/1-Main";
import Presentation from "../components/bike/2-Presentation";
import Bikes from "../components/bike/3-Bikes";
import Contact from "../components/Contact";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Noé's Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="Noé's Portfolio" />
				<meta property="og:description" content="Bike Mechanic" />
				<meta property="og:image" content={"https://noe-pecci.com/profile-photo.jpg"} />
			</Head>
			<Main />
			<Presentation />
			<Bikes />
			<Contact />
		</div>
	);
}
