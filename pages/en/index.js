import Head from "next/head";
import Main from "../../components/en/programming/1-Main";
import Contact from "../../components/en/programming/4-Contact";
import Project1 from "../../components/en/programming/Project1";
import Project2 from "../../components/en/programming/Project2";

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
			<Project1 />
			<Project2 />
			<Contact />
		</div>
	);
}
