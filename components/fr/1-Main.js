import { useState, useEffect } from "react";
import { HiChevronDoubleDown } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export default function Main() {
	const [changingText, changeText] = useState(
		"La raison pour laquelle je suis devenimu développeur alors que j'étais en fac de sport."
	);
	var words = [
		"Les projets que j'ai conçus, avec toutes les galères que j'ai traversées.",
		"Mes aventures dans les cryptos, et les erreurs stupides que j'ai fait.",
		"Toutes mes compétences en programmation, et les outils que j'ai appris à utiliser.",
		"La raison pour laquelle je suis devenu développeur, alors que j'étais en fac de sport.",
	];
	var number = 0;

	useEffect(() => {
		const interval = setInterval(() => {
			changeText(words[number]);
			if (number < 3) {
				number = number + 1;
			} else {
				number = 0;
			}
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<div className="flex max-w-[1500px] m-auto justify-between items-center h-full">
				<Link href="/fr">
					<img
						className=" bg-blue-100 rounded-full m-2 mt-4 sm:m-5 shadow-lg shadow-gray-400 p-1 hover:scale-105 ease-in duration-300"
						src={"me/profile-photo.jpg"}
						alt="Noé Pecci"
						width="200"
						height="200"
					/>
				</Link>
				<div className="sm:flex ">
					<Link href="/fr#contact">
						<div className="bg-blue-100 m-3 justify-center hidden sm:flex rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
							<AiOutlineMail size={50} className="pl-2" />
							<p className="pl-3 py-2 font-bold text-2xl hidden lg:flex">
								Contactez-moi !
							</p>
							<span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500">
								<span className="relative animate-ping inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
							</span>
						</div>
					</Link>
					<Link href="/fr">
						<img
							className="m-4 rounded-xl hover:scale-110 ease-in duration-300 cursor-pointer ml-5"
							src={"flags/fr.png"}
							alt="Français"
							width="100"
							height="75"
						/>
					</Link>
					<Link href="/">
						<img
							className="m-4 sm:mr-8 rounded-xl hover:scale-110 ease-in duration-300 cursor-pointer "
							src={"flags/en.png"}
							alt="English"
							width="110"
							height="75"
						/>
					</Link>
				</div>
			</div>
			<div className="w-full mt-5 sm:mt-15 md:mt-10 text-center h-screen max-w-[1240px] mx-auto p-2 justify-center">
				<h1 className="text-gray-800">Bien le bonjour, je suis Noé !</h1>
				<h1 className="py-6 text-blue-700">Développeur Backend en</h1>
				<h1 className="text-gray-800">Javascript & Solidity</h1>
				<div className="py-7">
					<p className="py-2 text-gray-700 text-center text-lg md:text-xl lg:text-2xl ">
						J’ai fait ce portfolio pour présenter :
					</p>
					<p className=" px-2 text-blue-700 text-center text-lg md:text-xl lg:text-2xl  ">
						{changingText}
					</p>
				</div>
				<div className="flex justify-center mt-12">
					<Link href="/fr#presentation">
						<div className="animate-bounce rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer">
							<HiChevronDoubleDown className="text-blue-700" size={36} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
