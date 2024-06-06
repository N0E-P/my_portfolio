import Head from "next/head";
import Main from "../../components/en/bike/1-Main";
import Presentation from "../../components/en/bike/2-Presentation";
import Tools from "../../components/en/bike/3-Tools";
import Contact from "../../components/en/Contact";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Noé's Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="Noé's Portfolio" />
				<meta property="og:description" content="Bike Mechanic" />
				<meta property="og:image" content={"https://noe-pecci.com/me/profile-photo.jpg"} />
			</Head>
			<Main />
			<Presentation />
			<Tools />
			<Contact />
		</div>
	);
}
