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
			<h1 className="text-gray-800">
				Hi, I'm <span className="text-blue-700">Noé!</span> 🇫🇷
			</h1>
			<h1 className="py-6">
				<span className="text-blue-700">Businessman </span> & Software Engineer
			</h1>
			<h1 className="pb-8">
				Bike Mechanic & <span className="text-blue-700">Cyclist</span>
			</h1>
			<p className="text-gray-700 text-center text-lg md:text-xl lg:text-2xl ">
				(I know, it's completely unrelated)
			</p>
			<div className="flex justify-center mt-12">
				<Link href="/#presentation">
					<div className="animate-bounce rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer">
						<HiChevronDoubleDown className="text-blue-700" size={36} />
					</div>
				</Link>
			</div>
		</div>
	);
}
