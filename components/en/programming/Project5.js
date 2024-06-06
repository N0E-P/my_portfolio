import { AiOutlineGithub } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

export default function Projects() {
	return (
		<div className="w-full my-20 p-2 sm:p-8 items-center">
			<div className="max-w-[1400px] m-auto p-4 sm:p-8 bg-yellow-200 rounded-3xl shadow-lg shadow-gray-400">
				<h1>Project #5: Patrick is back!</h1>
				<div className="xl:grid grid-cols-3 mt-2 sm:mt-5 xl:mt-10">
					<div className="col-span-2 xl:mr-8">
						<p className="py-2 text-gray-700 ">
							Patrick Colins is the genius who did the 16H training I took. And on May
							26, 2022, he's sending out a new gigantic training on Solidity with
							Javascript, of <span className="font-bold">32 HOURS!!!</span>
						</p>
						<p className="py-2 text-gray-700 ">
							I knew that it would take me a long time to follow it. But I also knew
							that if I really wanted to become a developer, I had to know how to use
							Javascript.
						</p>
						<p className="py-2 text-gray-700 ">
							So I started at the beginning of July, and a month and a half of hard
							work later, I finally finished this endless course. Moreover, to prove
							that we had finished it, we had to use all the knowledge of the course
							to mint 5 NFT as puzzles. It was far from being simple, but once
							finished, I was damn proud of myself!
						</p>
						<p className="py-4 text-gray-700 italic">
							<span className="underline">Fun fact:</span> As I'm writing this, I am one
							of only 40 people in the world to have finished the training and have
							these 5 NFTs. Now I'm really confident in the business!{" "}
							<span className=" not-italic">😁</span>
						</p>
					</div>
					<div className="mt-6 xl:mt-0 sm:p-4 max-w-[550px] w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
						<div className="aspect-w-16 aspect-h-9">
							<iframe
								className="rounded-xl"
								src="https://www.youtube.com/embed/gyMwXuJrbJQ"
								frameBorder="0"
								allow="autoplay; encrypted-media; picture-in-picture"
								allowFullScreen
								title="video"
							/>
						</div>
						<a
							href="https://stratosnft.io/0x7b1A2195862985203AEE71132AcDebBa22557D37"
							className=" my-2"
						>
							<img
								className="rounded-xl"
								src={"projets/NFTs.png"}
								width="1462px"
								height="423px"
								alt="/"
							/>
						</a>
						<a
							href="https://github.com/N0E-P/solidity-with-javascript-fcc-tutorial/"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<AiOutlineGithub size={50} />
							<p className="px-3 py-3 text-lg">My code on Github</p>
						</a>
						<a
							href="https://github.com/smartcontractkit/full-blockchain-solidity-course-js#table-of-contents"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<BsBook size={50} />
							<p className="px-3 py-3 text-lg">Everything I've learned</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
