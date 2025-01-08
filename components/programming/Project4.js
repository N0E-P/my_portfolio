import { AiOutlineGithub } from "react-icons/ai";
export default function Projects() {
	return (
		<div className="w-full my-20 p-2 sm:p-8 items-center">
			<div className="max-w-[1400px] m-auto p-4 sm:p-8 bg-green-200 rounded-3xl shadow-lg shadow-gray-400">
				<h1>Project #4: I realized my childhood dream</h1>
				<div className="xl:grid grid-cols-3 mt-2 sm:mt-5 xl:mt-10">
					<div className="col-span-2 xl:mr-8">
						<p className="py-2 text-gray-700 ">
							When I was a kid, I really wanted to have a remote-controlled Lego car.
							Except that back then, I just had no idea how to make it.
						</p>
						<p className="py-2 text-gray-700 ">
							So much later, during the summer holidays of 2020, I started to build
							the whole body and chassis. The following summer, I went back to
							organize the Arduino part, did the calculations and ordered the parts.
						</p>
						<p className="py-2 text-gray-700 ">
							We arrive then at the end of June 2022. And while I was looking for a
							new project to do, I remembered that I had the beginnings of a remote
							control car lying around in my closet. So I decided to start working on
							it again, to finish it once and for all.
						</p>
						<p className="py-2 text-gray-700 ">
							I programmed and assembled everything and finally finished my car in
							Lego. Now I can play with it like a kid, it's amazing!{" "}
							<span className="italic text-xs sm:text-sm xl:text-lg">
								(Except when I smash it up against a wall, but that's another
								question...)
							</span>
						</p>
					</div>
					<div className="mt-6 xl:mt-0 sm:p-4 max-w-[550px] w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
						<div className="aspect-w-16 aspect-h-9">
							<iframe
								className="rounded-xl"
								src="https://www.youtube.com/embed/4BGRAA7IIhA"
								frameBorder="0"
								allow="autoplay; encrypted-media; picture-in-picture"
								allowFullScreen
								title="video"
							/>
						</div>
						<a
							href="https://github.com/N0E-P/RC_Car"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<AiOutlineGithub size={50} />
							<p className="px-3 py-3 text-lg">My code on Github</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
