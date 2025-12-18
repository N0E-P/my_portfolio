import Head from "next/head";
import Main from "../components/index/1-Main";
import Contact from "../components/Contact";
import Presentation from "../components/index/2-Presentation";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Noé Pecci's Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="Noé Pecci's Portfolio" />
				<meta
					property="og:description"
					content="Content Creator, Strategist, Bike Mechanic & Software Engineer"
				/>
				<meta property="og:image" content={"https://noe-pecci.com/profile-photo.jpg"} />
			</Head>
			<Main />
			<Presentation />
			<Contact />
		</div>
	);
}
