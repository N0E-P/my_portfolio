import Link from "next/link";

export default function Presentation() {
	// année actuelle
	const year = new Date().getFullYear();
	const experience = year - 2022;

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
								I've been a software engineer for over {experience} years now. I've
								worked on many projects, including websites, software and
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
					<a href="https://pecci-bikes.com" target="_blank" rel="noreferrer">
						<div className="p-8 cursor-pointer bg-sky-600 rounded-3xl shadow-lg shadow-gray-400 lg:ml-6 mt-8 lg:mt-0  hover:scale-105 ease-in duration-300">
							<h2 className="text-center mb-5 max-w-[300px] sm:max-w-[1400px] m-auto text-white underline">
								Bikes
							</h2>
							<p className=" text-white text-lg">
								I like to mess arround and get my hands dirty with bikes. I often
								clean, modify and sell them. Click here to see my dedicated website
								with all the work I've done.
								<br />
								<br />
								<br />
							</p>
							<div className="mt-6 max-w-[450px] w-full h-auto m-auto">
								<img
									className="rounded-xl"
									src={"/index/bike-mechanics.png"}
									width="2754px"
									height="1836px"
									alt="/"
								/>
							</div>
						</div>
					</a>
					<Link href="/sports">
						<div className="p-8 cursor-pointer bg-sky-600 rounded-3xl shadow-lg shadow-gray-400 lg:mr-6 mt-8 lg:mt-12 hover:scale-105 ease-in duration-300">
							<h2 className="text-center mb-5 max-w-[300px] sm:max-w-[1400px] m-auto text-white underline">
								Sports
							</h2>
							<p className=" text-white text-lg">
								I've always liked individual sports. I've been passionate by track &
								field for over 10 years, and I'm always trying new stuff. Click here
								to learn more.
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
					<Link href="/business">
						<div className="p-8 cursor-pointer bg-sky-600 rounded-3xl shadow-lg shadow-gray-400 lg:ml-6 mt-8 lg:mt-12  hover:scale-105 ease-in duration-300">
							<h2 className="text-center mb-5 max-w-[300px] sm:max-w-[1400px] m-auto text-white underline">
								Business
							</h2>
							<p className=" text-white text-lg">
								I've been making shitty Youtube channels and trying to build
								businesses since high school. But now it is time to get serious, to
								work hard and to get my hands dirty. More info here.
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
					</Link>
				</div>
			</div>
		</div>
	);
}
