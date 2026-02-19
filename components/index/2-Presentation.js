import Link from "next/link";

export default function Presentation() {
	// année actuelle
	const year = new Date().getFullYear();
	const programmingXp = year - 2022;
	const videosXp = year - 2019;

	return (
		<div id="presentation" className="w-full p-4 items-center">
			<div className="max-w-[1400px] m-auto ">
				<div className="lg:grid grid-cols-2 px-4">
					<Link href="/programming">
						<div className="p-8 cursor-pointer bg-sky-600 rounded-3xl shadow-lg shadow-gray-400 lg:mr-6  hover:scale-105 ease-in duration-300">
							<h2 className="text-center mb-5 max-w-[300px] sm:max-w-[1400px] m-auto text-white underline">
								Programming
							</h2>
							<p className=" text-white text-lg">
								I've been a software engineer for over {programmingXp} years now.
								I've worked on many projects, including websites, software and
								electronics. For more information on my background, click here.
							</p>
							<div className="mt-6 max-w-[450px] w-full h-auto m-auto ">
								<img
									className="rounded-xl"
									src="/index/prog.jpg"
									width="2769px"
									height="1846px"
									alt="/"
								/>
							</div>
						</div>
					</Link>
					<Link href="/sports">
						<div className="p-8 cursor-pointer bg-sky-600 rounded-3xl shadow-lg shadow-gray-400 lg:ml-6 mt-8 lg:mt-0  hover:scale-105 ease-in duration-300">
							<h2 className="text-center mb-5 max-w-[300px] sm:max-w-[1400px] m-auto text-white underline">
								Sports
							</h2>
							<p className=" text-white text-lg">
								I've always liked individual sports and I've been passionate by
								track & field for over 10 years. I'm also trying new activities very
								frequently. More infos on them here.
							</p>
							<div className="mt-6 max-w-[450px] w-full h-auto m-auto">
								<img
									className="rounded-xl"
									src={"/index/velo.jpg"}
									width="4512px"
									height="3008px"
									alt="/"
								/>
							</div>
						</div>
					</Link>
					<a
						href="https://www.instagram.com/pecci.bikes"
						target="_blank"
						rel="noreferrer"
					>
						<div className="p-8 cursor-pointer bg-sky-600 rounded-3xl shadow-lg shadow-gray-400 lg:mr-6 mt-8 lg:mt-12 hover:scale-105 ease-in duration-300">
							<h2 className="text-center mb-5 max-w-[300px] sm:max-w-[1400px] m-auto text-white underline">
								Videos
							</h2>
							<p className=" text-white text-lg">
								It's been {videosXp} years since I've started making Youtube videos,
								and it was crap. But I've finally started creating short-form
								content, which has been working really well. Click here to get to my
								Instagram page.
							</p>
							<div className="mt-6 max-w-[450px] w-full h-auto m-auto">
								<img
									className="rounded-xl"
									src={"/index/business.png"}
									width="4500px"
									height="3000px"
									alt="/"
								/>
							</div>
						</div>
					</a>

					<a href="https://pecci-bikes.com" target="_blank" rel="noreferrer">
						<div className="p-8 cursor-pointer bg-sky-600 rounded-3xl shadow-lg shadow-gray-400 lg:ml-6 mt-8 lg:mt-12 hover:scale-105 ease-in duration-300">
							<h2 className="text-center mb-5 max-w-[300px] sm:max-w-[1400px] m-auto text-white underline">
								Bikes
							</h2>
							<p className=" text-white text-lg">
								I like to mess around and get my hands dirty with bikes. I often
								clean, modify and sell them. Click here to see my dedicated website
								with all the work I've done.
							</p>
							<div className="mt-6 max-w-[450px] w-full h-auto m-auto">
								<img
									className="rounded-xl"
									src={"/index/bike.jpg"}
									width="3375px"
									height="2250px"
									alt="/"
								/>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
