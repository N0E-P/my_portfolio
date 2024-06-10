import Head from "next/head";
import Main from "../../components/en/programming/1-Main";
import Presentation from "../../components/en/programming/2-Presentation";
import Tools from "../../components/en/programming/3-Tools";
import Contact from "../../components/en/Contact";
import Project1 from "../../components/en/programming/Project1";
import Project2 from "../../components/en/programming/Project2";
import Project3 from "../../components/en/programming/Project3";
import Project4 from "../../components/en/programming/Project4";
import Project5 from "../../components/en/programming/Project5";
import Project6 from "../../components/en/programming/Project6";
import Project7 from "../../components/en/programming/Project7";
import Project8 from "../../components/en/programming/Project8";

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
			<Project1 />
			<Project2 />
			<Project3 />
			<Project4 />
			<Project5 />
			<Project6 />
			<Project7 />
			<Project8 />
			<Tools />
			<Contact />
		</div>
	);
}
