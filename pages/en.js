import Head from "next/head"
import styles from "../styles/Home.module.css"
import Header from "../components/en/Header"
import Main from "../components/en/Main"

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>My Portfolio</title>
				<meta name="description" content="My Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Main />
		</div>
	)
}
