import { AiFillYoutube, AiOutlineGithub } from "react-icons/ai";

export default function Projects() {
	return (
		<div className="w-full my-20 p-2 sm:p-8 items-center">
			<div className="max-w-[1400px] m-auto p-4 sm:p-8 bg-orange-200 rounded-3xl shadow-lg shadow-gray-400">
				<h1>Project #2: My completely stupid NFTs</h1>
				<div className="xl:grid grid-cols-3 mt-2 sm:mt-5 xl:mt-10">
					<div className="col-span-2 xl:mr-8">
						<p className="py-2 text-gray-700 ">
							In the beginning of April, I took a small one-hour training to learn how
							to make my own NFTs. I created 2500 of them myself, sent their metadata
							to IPFS, chose all the parameters I wanted, and customized a dapp to
							mint them.
						</p>
						<p className="py-2 text-gray-700 ">
							However, I still haven't learned to draw. So you really{" "}
							<span className="underline">shouldn't</span> try to hire me as a
							designer, or it will be a disaster. I'm only good at programming.
						</p>
						<p className="py-2 text-gray-700 ">
							It was really fun to do this, but other than creating the images, I
							mostly took over a project that was already done. It would be even
							better to build something entirely from scratch!
						</p>
					</div>
					<div className="mt-6 xl:mt-0 sm:p-4 max-w-[550px] w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
						<div className="aspect-w-16 aspect-h-9">
							<iframe
								className="rounded-xl"
								src="https://www.youtube.com/embed/C8ArrxXsA8c"
								frameBorder="0"
								allow="autoplay; encrypted-media; picture-in-picture"
								allowFullScreen
								title="video"
							/>
						</div>
						<a
							href="https://www.youtube.com/watch?v=cLB7u0KQFIs"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<AiFillYoutube size={50} />
							<p className="px-3 py-3 text-lg">The video tutorial</p>
						</a>
						<a
							href="https://github.com/N0E-P/Kevin-s-Holidays"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<AiOutlineGithub size={50} />
							<p className="px-3 py-3 text-lg">My code on Github</p>
						</a>
						<a
							href="https://testnets.opensea.io/collection/kevins-holidays"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<img src={"projets/opensea.png"} width="50px" height="50px" alt="/" />
							<p className="px-3 py-3 text-lg">The Opensea page of the NFT</p>
						</a>
						<a
							href="https://superb-zuccutto-9f46e1.netlify.app/"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<img
								src={"projets/kevin-logo.png"}
								width="50px"
								height="50px"
								alt="/"
							/>
							<p className="px-3 py-3 text-lg">The NFT dapp</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
