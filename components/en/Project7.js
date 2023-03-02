import { AiOutlineGithub } from "react-icons/ai";
import { SiDevpost, SiChainlink } from "react-icons/si";

export default function Projects() {
	return (
		<div className="w-full my-20 p-2 sm:p-8 items-center">
			<div className="max-w-[1400px] m-auto p-4 sm:p-8 bg-sky-300 rounded-3xl shadow-lg shadow-gray-400">
				<h1>Projet #7: It's getting serious</h1>
				<div className="xl:grid grid-cols-3 mt-2 sm:mt-5 xl:mt-10">
					<div className="col-span-2 xl:mr-8">
						<p className="py-2 text-gray-700 ">
							During the Fall 2022 Chainlink Hackathon, I joined{" "}
							<span>
								<a
									href="https://www.linkedin.com/in/albertomf85"
									className="cursor-pointer text-blue-700 underline"
								>
									Alberto
								</a>
							</span>
							,{" "}
							<span>
								<a
									href="https://www.linkedin.com/in/darby-martinez"
									className="cursor-pointer text-blue-700 underline"
								>
									Darby
								</a>
							</span>
							,{" "}
							<span>
								<a
									href="https://www.linkedin.com/in/luis-pedro-pinto"
									className="cursor-pointer text-blue-700 underline"
								>
									Luís
								</a>
							</span>
							{" and "}
							<span>
								<a
									href="https://www.linkedin.com/in/hugomir"
									className="cursor-pointer text-blue-700 underline"
								>
									Hugo
								</a>
							</span>{" "}
							to build MetaCare Health. We had 1 month to develop and present our
							technology to the juries.
						</p>
						<p className="py-2 text-gray-700 ">
							MetaCare is a tool for gathering and managing all of a person's medical data in one place through a digital twin NFT linked to it.
						</p>
						<p className="py-2 text-gray-700 ">
							I built the smart contract, enabled to automatically retrieve someone's
							Google FIT data on a spreadsheet and managed the adaptation of the NFTs
							based on the users' data.
						</p>
						<p className="py-2 text-gray-700 ">
							We managed to win Chainlink's Top Quality Projects Award. I'm very proud
							to have accomplished this, even though this is only my 2nd Hackathon, and
							we don't plan to stop there!
						</p>
					</div>
					<div className="mt-6 xl:mt-0 sm:p-4 max-w-[550px] w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
						<div className="aspect-w-16 aspect-h-9">
							<iframe
								className="rounded-xl"
								src="https://www.youtube.com/embed/Q6FejUqQiUU"
								allow="autoplay; encrypted-media; picture-in-picture"
								allowFullScreen
								title="video"
							/>
						</div>
						<a
							href="https://github.com/meta-care"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<AiOutlineGithub size={50} />
							<p className="px-3 py-3 text-lg">Our code on Github</p>
						</a>
						<a
							href="https://devpost.com/software/metacare"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<SiDevpost size={50} />
							<p className="px-3 py-3 text-lg">Our Devpost page</p>
						</a>
						<a
							href="https://chain.link/hackathon"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<SiChainlink size={50} />
							<p className="px-3 py-3 text-lg">The Chainlink Hackathon</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
