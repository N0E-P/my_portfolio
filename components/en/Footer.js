import Link from "next/link"

export default function Header() {
	return (
		<div>
			<div>
				<Link href="https://github.com/N0E-P/">
					<img src={"github.png"} alt="Github" width="60" height="60"></img>
				</Link>{" "}
				<Link href="https://www.linkedin.com/">
					<img src={"linkedin.png"} alt="Linkedin" width="60" height="60"></img>
				</Link>{" "}
				<img src={"telegram.png"} alt="Telegram" width="60" height="60"></img> @N0E_P{" "}
				<img src={"gmail.png"} alt="Mail" width="60" height="60"></img> pecci.noe@gmail.com{" "}
			</div>
		</div>
	)
}
