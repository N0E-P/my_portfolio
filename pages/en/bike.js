import Head from "next/head";
import Main from "../../components/en/programming/1-Main";
import Presentation from "../../components/en/programming/2-Presentation";
import Tools from "../../components/en/programming/3-Tools";
import Contact from "../../components/en/programming/4-Contact";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Noé's Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="Noé's Portfolio" />
				<meta property="og:description" content="Javascript & Solidity Developer" />
				<meta property="og:image" content={"https://noe-pecci.com/me/profile-photo.jpg"} />
			</Head>
			<Main />
			<Presentation />
			<Tools />
			<Contact />
		</div>
	);
}
