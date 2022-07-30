import Link from "next/link"

export default function Footer() {
	return (
		<div>
			<Link href="https://github.com/N0E-P/">
				<img src={"social-networks/github.png"} alt="Github" width="60" height="60"></img>
			</Link>{" "}
			github.com/N0E-P{" "}
			<Link href="https://www.linkedin.com/">
				<img
					src={"social-networks/linkedin.png"}
					alt="Linkedin"
					width="60"
					height="60"
				></img>
			</Link>{" "}
			linkedin.com{" "}
			<img src={"social-networks/telegram.png"} alt="Telegram" width="60" height="60"></img>{" "}
			@N0E_P <img src={"social-networks/gmail.png"} alt="Mail" width="60" height="60"></img>{" "}
			pecci.noe@gmail.com{" "}
		</div>
	)
}
