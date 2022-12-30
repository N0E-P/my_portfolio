import { AiOutlineGithub } from "react-icons/ai";
import { SiDevpost, SiChainlink } from "react-icons/si";

export default function Projects() {
	return (
		<div className="w-full my-20 p-2 sm:p-8 items-center">
			<div className="max-w-[1400px] m-auto p-4 sm:p-8 bg-sky-300 rounded-3xl shadow-lg shadow-gray-400">
				<h1>Projet #7 : Ça devient sérieux</h1>
				<div className="xl:grid grid-cols-3 mt-2 sm:mt-5 xl:mt-10">
					<div className="col-span-2 xl:mr-8">
						<p className="py-2 text-gray-700 ">
							Pendant le Chainlink Hackathon d'automne 2022, j'ai rejoint{" "}
							<span>
								<a
									href="https://www.linkedin.com/in/albertomf85"
									className="cursor-pointer text-blue-700 underline"
								>
									Alberto
								</a>
							</span>
							,{" "}
							<span>
								<a
									href="https://www.linkedin.com/in/darby-martinez"
									className="cursor-pointer text-blue-700 underline"
								>
									Darby
								</a>
							</span>
							,{" "}
							<span>
								<a
									href="https://www.linkedin.com/in/luis-pedro-pinto"
									className="cursor-pointer text-blue-700 underline"
								>
									Luìs
								</a>
							</span>
							{" et "}
							<span>
								<a
									href="https://www.linkedin.com/in/hugomir"
									className="cursor-pointer text-blue-700 underline"
								>
									Hugo
								</a>
							</span>{" "}
							pour concevoir MetaCare Health. Nous avions 1 mois pour mettre au point
							et présenter notre technologie aux jurys.
						</p>
						<p className="py-2 text-gray-700 ">
							MetaCare est un outil permettant de récupérer et de gérer toutes des données médicales d'une personne à un seul endroit grâce à un NFT spécial qui lui est lié.
						</p>
						<p className="py-2 text-gray-700 ">
							J'ai construit le smart contract, permis d'automatiquement récupérer les
							données google FIT de quelqu'un sur un spreadsheet et j'ai géré
							l'adaptation des NFTs en fonction des données des utilisateurs.
						</p>
						<p className="py-2 text-gray-700 ">
							Nous avons réussi à gagner le prix des Top Quality Projects de
							Chainlink. Je suis très fier d'avoir accompli ça alors que c'est
							seulement mon 2ème Hackathon, et on ne compte pas s'arrêter en si bon
							chemin !
						</p>
					</div>
					<div className="mt-6 xl:mt-0 sm:p-4 max-w-[550px] w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
						<div className="aspect-w-16 aspect-h-9">
							<iframe
								className="rounded-xl"
								src="https://www.youtube.com/embed/Q6FejUqQiUU"
								allow="autoplay; encrypted-media; picture-in-picture"
								allowFullScreen
								title="video"
							/>
						</div>
						<a
							href="https://github.com/meta-care"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<AiOutlineGithub size={50} />
							<p className="px-3 py-3 text-lg">Notre code sur Github</p>
						</a>
						<a
							href="https://devpost.com/software/metacare"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<SiDevpost size={50} />
							<p className="px-3 py-3 text-lg">Notre page Devpost</p>
						</a>
						<a
							href="https://chain.link/hackathon"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<SiChainlink size={50} />
							<p className="px-3 py-3 text-lg">Le Hackathon de Chainlink</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
