import Link from "next/link";

export default function Presentation() {
	// année actuelle
	const year = new Date().getFullYear();
	const experience = year - 2022;

	return (
		<div id="presentation" className="w-full p-4 items-center">
			<div className="max-w-[1400px] m-auto ">
				<div className="lg:grid grid-cols-2">
					<Link href="/programming">
						<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:mr-6  hover:scale-105 ease-in duration-300">
							<h2 className="text-center mb-5 max-w-[300px] sm:max-w-[1400px] m-auto text-white">
								Programming
							</h2>
							<p className=" text-white text-lg">
								I've been a developer for over {experience} years now. I've worked
								on many projects, including websites, software and electronics. For
								more information on my background, click here.
							</p>
							<div className="mt-6 max-w-[450px] w-full h-auto m-auto ">
								<img
									className="rounded-xl"
									src="/me/prog.jpg"
									width="2769px"
									height="1846px"
									alt="/"
								/>
							</div>
						</div>
					</Link>
					<Link href="/bike">
						<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:ml-6 mt-8 lg:mt-0  hover:scale-105 ease-in duration-300">
							<h2 className="text-center mb-5 max-w-[300px] sm:max-w-[1400px] m-auto text-white">
								Bike
							</h2>
							<p className=" text-white text-lg">
								I've been tinkering with bikes since I was a kid. I've always done
								my own repairs, adjustments and assemblies. I've learned to do a lot
								of other things since then. All the details are here.
							</p>
							<div className="mt-6 max-w-[450px] w-full h-auto m-auto">
								<img
									className="rounded-xl"
									src={"/me/velo.jpg"}
									width="4512px"
									height="3008px"
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
