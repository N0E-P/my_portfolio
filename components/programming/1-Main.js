import { useState, useEffect } from "react";
import { HiChevronDoubleDown } from "react-icons/hi";
import Link from "next/link";

export default function Main() {
	const [changingText, changeText] = useState(
		"The reason I became a software engineer while I was in sports college."
	);
	var words = [
		"The projects I designed, with all the problems I went through.",
		"My adventures in cryptos, and the stupid mistakes I made.",
		"All my programming skills, and the tools I learned to use.",
		"The reason I became a software engineer while I was in sports college.",
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
		<div className="w-full mt-5 sm:mt-15 md:mt-10 text-center h-screen max-w-[1240px] mx-auto p-2 justify-center">
			<div className="flex justify-center">
				<Link href="/">
					<img
						className="cursor-pointer bg-blue-100 rounded-full m-5 shadow-lg shadow-gray-400 p-1 hover:scale-105 ease-in duration-300 "
						src={"/profile-photo.jpg"}
						alt="Noé Pecci"
						width="225"
						height="225"
					/>
				</Link>
			</div>
			<h1 className="text-gray-800">Hi, I'm Noé! 🇫🇷</h1>
			<h1 className="py-6 text-blue-700">Versatile Software Engineer</h1>
			<div>
				<p className="py-2 text-gray-700 text-center text-lg md:text-xl lg:text-2xl ">
					I made this portfolio to showcase:
				</p>
				<p className=" px-2 text-blue-700 text-center text-lg md:text-xl lg:text-2xl  ">
					{changingText}
				</p>
			</div>
			<div className="flex justify-center mt-12">
				<Link href="/programming#presentation">
					<div className="animate-bounce rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer">
						<HiChevronDoubleDown className="text-blue-700" size={36} />
					</div>
				</Link>
			</div>
		</div>
	);
}
