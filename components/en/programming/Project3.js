import { AiOutlineGithub } from "react-icons/ai";
import { SiDevpost, SiChainlink } from "react-icons/si";

export default function Projects() {
	return (
		<div className="w-full my-20 p-2 sm:p-8 items-center">
			<div className="max-w-[1400px] m-auto p-4 sm:p-8 bg-gray-300 rounded-3xl shadow-lg shadow-gray-400">
				<h1>Project #3: My first real project</h1>
				<div className="xl:grid grid-cols-3 mt-2 sm:mt-5 xl:mt-10">
					<div className="col-span-2 xl:mr-8">
						<p className="py-2 text-gray-700 ">
							On May 10, 2022, I joined the Chainlink Hackathon. And I created{" "}
							<span className="font-bold">NFT Detector</span>.
						</p>
						<p className="py-2 text-gray-700 ">
							This is a Discord bot that gives a special role to people who own NFTs.
							It allows you to make private channels for them and to give them bonuses
							in the Discord server of this collection.
						</p>
						<p className="py-2 text-gray-700 ">
							At first, I had no idea how I could do this. But I thought it was a nice
							idea, so I started working on it.
						</p>
						<p className="py-2 text-gray-700 ">
							I created a bot discord to see the server members and give them roles. I
							made a dapp to check the Metamask wallets. And I use Moralis, which is a
							data-server linked to the blockchain, to be able to link the bot and the
							dapp.
						</p>
					</div>
					<div className="mt-6 xl:mt-0 sm:p-4 max-w-[550px] w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
						<div className="aspect-w-16 aspect-h-9">
							<iframe
								className="rounded-xl"
								src="https://www.youtube.com/embed/CtRAErZ1jPE"
								frameBorder="0"
								allow="autoplay; encrypted-media; picture-in-picture"
								allowFullScreen
								title="video"
							/>
						</div>
						<a
							href="https://github.com/N0E-P/NFT_detector"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<AiOutlineGithub size={50} />
							<p className="px-3 py-3 text-lg">My code on Github</p>
						</a>

						<a
							href="https://devpost.com/software/nft-detector"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<SiDevpost size={50} />
							<p className="px-3 py-3 text-lg">My Devpost page</p>
						</a>
						<a
							href="https://chain.link/hackathon/hackathon-spring-2022"
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
