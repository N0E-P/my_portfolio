import { AiFillYoutube, AiOutlineGithub } from "react-icons/ai";

export default function Projects() {
	return (
		<div className="w-full my-20 p-2 sm:p-8 items-center">
			<div className="max-w-[1400px] m-auto p-4 sm:p-8 bg-orange-200 rounded-3xl shadow-lg shadow-gray-400">
				<h1>Projet #2 : Mes NFT complètement débiles</h1>
				<div className="xl:grid grid-cols-3 mt-2 sm:mt-5 xl:mt-10">
					<div className="col-span-2 xl:mr-8">
						<p className="py-2 text-gray-700 ">
							Début avril, j’ai suivi une petite formation d'une heure pour apprendre
							à faire ses propres NFT. J'en ai créé 2500 moi-même, j'ai envoyé leur
							metadata sur IPFS, j'ai choisi tous les paramètres que je voulais, et
							j'ai personnalisé une dapp pour pouvoir les minter.
						</p>
						<p className="py-2 text-gray-700 ">
							Par contre, je n'ai toujours pas appris à dessiner. Donc il ne faut{" "}
							<span className="underline">vraiment pas</span> essayer de m’engager en
							temps de dessinateur, sinon ça va être un désastre. Je ne suis bon qu’en
							programmation.
						</p>
						<p className="py-2 text-gray-700 ">
							C'était très sympa de faire ça, mais à part créer les images, j'ai
							surtout repris un projet qui a déjà été fait. Ce serait encore mieux de
							construire quelque chose entièrement à partir de 0 !
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
							<p className="px-3 py-3 text-lg">Le tutoriel vidéo</p>
						</a>
						<a
							href="https://github.com/N0E-P/Kevin-s-Holidays"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<AiOutlineGithub size={50} />
							<p className="px-3 py-3 text-lg">Mon code sur Github</p>
						</a>
						<a
							href="https://testnets.opensea.io/collection/kevins-holidays"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<img src={"projets/opensea.png"} width="50px" height="50px" alt="/" />
							<p className="px-3 py-3 text-lg">La page Opensea des NFT</p>
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
							<p className="px-3 py-3 text-lg">La dapp des NFT</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
