import { AiOutlineGithub, AiOutlineLaptop } from "react-icons/ai";
import Link from "next/link";

export default function Projects() {
	return (
		<div className="w-full my-20 p-2 sm:p-8 items-center">
			<div className="max-w-[1400px] m-auto p-4 sm:p-8 bg-green-200 rounded-3xl shadow-lg shadow-gray-400">
				<h1>Project #6: My beautiful portfolio</h1>
				<div className="xl:grid grid-cols-3 mt-2 sm:mt-5 xl:mt-10">
					<div className="col-span-2 xl:mr-8">
						<p className="py-2 text-gray-700 ">
							After doing these first 5 projects, it was time for me to try to find
							work by showing what I had learned, built and accomplished. At the same
							time, I also wanted to know how to make better websites. So I decided to
							create <span className="font-bold">my portfolio</span>.
						</p>
						<p className="py-2 text-gray-700 ">
							In mid-August, I started building. I did it with React, NextJS and
							Tailwind, because I had already used them in the Solidity & Javascript
							training. I also watched a 2H30 Youtube tutorial to learn more about it.
						</p>
						<p className="py-2 text-gray-700 ">
							Once finished, it was now time to find other people to work with.
						</p>
					</div>
					<div className="mt-6 xl:mt-0 sm:p-4 max-w-[550px] w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
						<div className="aspect-w-16 aspect-h-9">
							<iframe
								className="rounded-xl"
								src="https://www.youtube.com/embed/CMx51wpd7g4"
								frameBorder="0"
								allow="autoplay; encrypted-media; picture-in-picture"
								allowFullScreen
								title="video"
							/>
						</div>
						<a
							href="https://github.com/N0E-P/my_portfolio"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<AiOutlineGithub size={50} />
							<p className="px-3 py-3 text-lg">My code on Github</p>
						</a>
						<div className="p-2 cursor-pointer hover:text-blue-700">
							<Link href="/">
								<div className=" flex ">
									<AiOutlineLaptop size={50} />
									<p className="px-3 py-3 text-lg">My portfolio</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
