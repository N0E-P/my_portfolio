import { HiChevronDoubleDown } from "react-icons/hi";
import Link from "next/link";

export default function Main() {
	return (
		<div className="w-full mt-5 sm:mt-15 md:mt-10 text-center h-screen max-w-[1240px] mx-auto p-2 justify-center">
			<div className="flex justify-center">
				<Link href="/">
					<img
						className=" bg-blue-100 rounded-full m-5 shadow-lg shadow-gray-400 p-1 hover:scale-105 ease-in duration-300 "
						src={"/profile-photo.jpg"}
						alt="Noé Pecci"
						width="225"
						height="225"
					/>
				</Link>
			</div>
			<h1 className="text-gray-800">Hi, I'm Noé! 🇫🇷</h1>
			<h1 className="py-6 text-blue-700">Self-Taught Bike Mechanic</h1>
			<p className="text-center text-lg md:text-xl lg:text-2xl text-gray-700 pt-2">
				Othewise I coudn't ride, so I didn't really had the choice
			</p>
			<div className="flex justify-center mt-12">
				<Link href="/bikes#presentation">
					<div className="animate-bounce rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer">
						<HiChevronDoubleDown className="text-blue-700" size={36} />
					</div>
				</Link>
			</div>
		</div>
	);
}