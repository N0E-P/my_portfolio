import Head from "next/head"
import styles from "../styles/Home.module.css"
import Link from "next/link"

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>My Portfolio</title>
				<meta name="description" content="My Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Link href="/">
				<img src={"flags/fr.png"} alt="Français" width="60" height="40"></img>
			</Link>{" "}
			<Link href="/en">
				<img src={"flags/en.png"} alt="English" width="60" height="40"></img>
			</Link>
			<h1>Version anglaise en cours de construction...</h1>
		</div>
	)
}
