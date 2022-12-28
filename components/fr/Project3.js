import { AiOutlineGithub } from "react-icons/ai";
import { SiDevpost, SiChainlink } from "react-icons/si";

export default function Projects() {
	return (
		<div className="w-full my-20 p-2 sm:p-8 items-center">
			<div className="max-w-[1400px] m-auto p-4 sm:p-8 bg-gray-300 rounded-3xl shadow-lg shadow-gray-400">
				<h1>Projet #3 : Mon premier vrai projet</h1>
				<div className="xl:grid grid-cols-3 mt-2 sm:mt-5 xl:mt-10">
					<div className="col-span-2 xl:mr-8">
						<p className="py-2 text-gray-700 ">
							Le 10 mai 2022, j'ai rejoint le Hackathon de Chainlink. Et j'y ai créé{" "}
							<span className="font-bold">NFT Detector</span>.
						</p>
						<p className="py-2 text-gray-700 ">
							C'est un bot Discord qui donne un rôle spécial aux personnes qui
							possèdent des NFT. Ça permet de leur faire des salons privés et de leur
							donner des bonus dans le serveur Discord de cette collection.
						</p>
						<p className="py-2 text-gray-700 ">
							Il faut savoir qu'au début, je n'avais aucune idée de comment est-ce-que
							je pouvais bien faire ça. Mais je trouvais l'idée sympa, alors j'ai
							commencé à travailler dessus.
						</p>
						<p className="py-2 text-gray-700 ">
							J'ai créé un bot discord pour voir les membres des serveurs et leur
							donner des rôles. J'ai fait une dapp pour vérifier les portefeuilles
							Metamask. Et j'utilise Moralis, qui est un data-serveur lié à la
							blockchain, pour pouvoir relier le bot et la dapp.
						</p>
					</div>
					<div className="mt-6 xl:mt-0 sm:p-4 max-w-[550px] w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
						<div className="aspect-w-16 aspect-h-9">
							<iframe
								className="rounded-xl"
								src="https://www.youtube.com/embed/CtRAErZ1jPE"
								frameBorder="0"
								allow="autoplay; encrypted-media; picture-in-picture"
								allowFullScreen
								title="video"
							/>
						</div>
						<a
							href="https://github.com/N0E-P/NFT_detector"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<AiOutlineGithub size={50} />
							<p className="px-3 py-3 text-lg">Mon code sur Github</p>
						</a>

						<a
							href="https://devpost.com/software/nft-detector"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<SiDevpost size={50} />
							<p className="px-3 py-3 text-lg">Ma page Devpost</p>
						</a>
						<a
							href="https://chain.link/hackathon/hackathon-spring-2022"
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
