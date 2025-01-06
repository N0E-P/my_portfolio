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
						<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:mr-6  hover:scale-105 ease-in duration-300">
							<h2 className="text-center mb-5 max-w-[300px] sm:max-w-[1400px] m-auto text-white">
								Programming
							</h2>
							<p className=" text-white text-lg">
								I've been a Software Engineer for over {experience} years now. I've
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
					<Link href="/bikes">
						<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:ml-6 mt-8 lg:mt-0  hover:scale-105 ease-in duration-300">
							<h2 className="text-center mb-5 max-w-[300px] sm:max-w-[1400px] m-auto text-white">
								Bike Mechanic
							</h2>
							<p className=" text-white text-lg">
								I've been tinkering with bikes since I was a kid. I've always done
								my own repairs, adjustments and assemblies. I've learned how to do a
								lot of other things since then. All the details are here.
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
					</Link>
					<Link href="/sport">
						<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:mr-6 mt-8 lg:mt-12  hover:scale-105 ease-in duration-300">
							<h2 className="text-center mb-5 max-w-[300px] sm:max-w-[1400px] m-auto text-white">
								Sports
							</h2>
							<p className=" text-white text-lg">
								I've always liked individual sports. I've been passionate by Track
								and Field for over 10 years now. I tried a bunch of things and I'm
								now focusing on long distance cycling. Click here to know more.
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
						<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:ml-6 mt-8 lg:mt-12  hover:scale-105 ease-in duration-300">
							<h2 className="text-center mb-5 max-w-[300px] sm:max-w-[1400px] m-auto text-white">
								Business
							</h2>
							<p className=" text-white text-lg">
								Since high school, I've made shitty Youtube channels and half-tried
								to setup wacky businesses. But now it's time to get serious, to work
								hard and to get my hands dirty. More infos here.
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
