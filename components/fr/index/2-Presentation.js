import Link from "next/link";

export default function Presentation() {
	// année actuelle
	const year = new Date().getFullYear();
	const experience = year - 2022;

	return (
		<div id="presentation" className="w-full p-4 items-center">
			<div className="max-w-[1400px] m-auto ">
				<div className="lg:grid grid-cols-2">
					<Link href="/fr/programmation">
						<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:mr-6  hover:scale-105 ease-in duration-300">
							<h2 className="text-center mb-5 max-w-[300px] sm:max-w-[1400px] m-auto text-white">
								Programmation
							</h2>
							<p className=" text-white text-lg">
								Je suis développeur depuis maintenant plus de {experience} ans. J'ai
								réalisé de nombreux projets, notamment des sites web, des logiciels
								et de l'électronique. Plus d'informations sur mon parcours en
								cliquant ici.
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
					<Link href="/fr/velo">
						<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:ml-6 mt-8 lg:mt-0  hover:scale-105 ease-in duration-300">
							<h2 className="text-center mb-5 max-w-[300px] sm:max-w-[1400px] m-auto text-white">
								Vélo
							</h2>
							<p className=" text-white text-lg">
								Je bricole sur des vélos depuis que je suis petit. J'ai toujours
								fait mes propres réparations, réglages et montages moi-même. J'ai
								appris à faire beaucoup d'autres choses depuis. Tous les détails
								sont ici.
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
