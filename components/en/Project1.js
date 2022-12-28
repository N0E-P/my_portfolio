import { AiOutlineGithub } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

export default function Project1() {
	return (
		<div className="w-full my-20 p-2 sm:p-8 items-center">
			<div className="max-w-[1400px] m-auto p-4 sm:p-8 bg-violet-300 rounded-3xl shadow-lg shadow-gray-400">
				<h1>Project #1: The longest tutorial of my life</h1>
				<div className="xl:grid grid-cols-3 mt-2 sm:mt-5 xl:mt-10">
					<div className="col-span-2 xl:mr-8">
						<p className="py-2 text-gray-700 ">
							At the end of February 2022, I started learning Solidity. The little
							problem is that I didn't just start with a little tutorial... But with a
							huge <span className="font-bold ">16 HOURS TRAINING!!!</span>
						</p>
						<p className="py-2 text-gray-700">
							That's how I spent 2 months thinking, understanding, solving problems
							and copying everything that Patrick, the trainer, was showing. I finally
							managed to get to the end of the course. And I learned a ton from it.
						</p>
						<p className="py-2 text-gray-700 ">
							After that, it was time for me to use my new skills and try my first
							ever project!
						</p>
					</div>
					<div className="mt-6 xl:mt-0 sm:p-4 max-w-[550px] w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
						<div className="aspect-w-16 aspect-h-9">
							<iframe
								className="rounded-xl"
								src="https://www.youtube.com/embed/M576WGiDBdQ"
								frameBorder="0"
								allow="autoplay; encrypted-media; picture-in-picture"
								allowFullScreen
								title="video"
							/>
						</div>
						<a
							href="https://github.com/N0E-P/solidity-with-python-fcc-tutorial"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<AiOutlineGithub size={50} />
							<p className="pl-2 py-3 text-lg">My code on Github</p>
						</a>
						<a
							href="https://github.com/smartcontractkit/full-blockchain-solidity-course-py#table-of-contents"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<BsBook size={50} />
							<p className="pl-2 py-3  text-lg">Everything I've learned</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
