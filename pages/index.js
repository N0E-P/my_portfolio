import styles from "../styles/Home.module.css"
import Head from "next/head"
import Header from "../components/fr/Header"
import Presentation from "../components/fr/Presentation"
import Crypto from "../components/fr/Crypto"
import Projects from "../components/fr/Projects"
import Tools from "../components/fr/Tools"
import Conclusion from "../components/fr/Conclusion"
import Footer from "../components/fr/Footer"

export default function Home() {
	return (
		<div className={styles.container}>
			<h1 className="text-3xl font-bold underline">oui</h1>
			<Head>
				<title>Mon Portfolio</title>
				<meta name="description" content="Mon Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Presentation />
			<Crypto />
			<Projects />
			<Tools />
			<Conclusion />
			<Footer />
		</div>
	)
}
