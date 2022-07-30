import Link from "next/link"

export default function Header() {
	return (
		<div>
			Portfolio of Noé Pecci - Solidity Developper{" "}
			<Link href="https://github.com/N0E-P/">
				<img src={"github.png"} alt="Github" width="60" height="60"></img>
			</Link>{" "}
			<Link href="https://www.linkedin.com/">
				<img src={"linkedin.png"} alt="Linkedin" width="60" height="60"></img>
			</Link>{" "}
			<img src={"telegram.png"} alt="Telegram" width="60" height="60"></img> @N0E_P{" "}
			<Link href="/">
				<img src={"gmail.png"} alt="Mail" width="60" height="60"></img>
			</Link>{" "}
			pecci.noe@gmail.com{" "}
			<Link href="/">
				<img src={"fr.png"} alt="Français" width="60" height="40"></img>
			</Link>{" "}
			<Link href="/en">
				<img src={"en.png"} alt="English" width="60" height="40"></img>
			</Link>
		</div>
	)
}
