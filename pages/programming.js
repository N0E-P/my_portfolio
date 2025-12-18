import Head from "next/head";
import Main from "../components/programming/1-Main";
import Presentation from "../components/programming/2-Presentation";
import Contact from "../components/Contact";
import Project1 from "../components/programming/Project1";
import Project2 from "../components/programming/Project2";
import Project3 from "../components/programming/Project3";
import Project4 from "../components/programming/Project4";
import Project5 from "../components/programming/Project5";
import Project6 from "../components/programming/Project6";
import Project7 from "../components/programming/Project7";
import Project8 from "../components/programming/Project8";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Noé Pecci's Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="Noé Pecci's Portfolio" />
				<meta property="og:description" content="Software Engineer" />
				<meta property="og:image" content={"https://noe-pecci.com/profile-picture.jpg"} />
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
			<Contact />
		</div>
	);
}
