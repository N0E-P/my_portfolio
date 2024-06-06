import { AiOutlineGithub } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

export default function Project1() {
	return (
		<div className="w-full my-20 p-2 sm:p-8 items-center">
			<div className="max-w-[1400px] m-auto p-4 sm:p-8 bg-violet-300 rounded-3xl shadow-lg shadow-gray-400">
				<h1>Projet #1 : Le tuto le plus long de ma vie</h1>
				<div className="xl:grid grid-cols-3 mt-2 sm:mt-5 xl:mt-10">
					<div className="col-span-2 xl:mr-8">
						<p className="py-2 text-gray-700 ">
							Fin février 2022, je me suis lancé dans l'apprentissage de Solidity. Le
							petit problème, c'est que je n'ai pas juste commencé par un petit
							tutoriel comme ça... Mais par une énorme formation de{" "}
							<span className="font-bold ">16 HEURES !!!</span>
						</p>
						<p className="py-2 text-gray-700">
							C'est comme ça que j'ai passé 2 mois à réfléchir, comprendre, résoudre
							des problèmes et recopier tout ce que Patrick, le formateur, montrait.
							J'ai finalement réussi à aller jusqu'au bout du cours. Et j'en ai
							énormément appris.
						</p>
						<p className="py-2 text-gray-700 ">
							Après ça, il était temps pour moi d'utiliser mes nouvelles compétences
							et d'essayer de faire mon tout premier projet !
						</p>
					</div>
					<div className="mt-6 xl:mt-0 sm:p-4 max-w-[550px] w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
						<div className="aspect-w-16 aspect-h-9">
							<iframe
								className="rounded-xl"
								src="https://www.youtube.com/embed/M576WGiDBdQ"
								frameBorder="0"
								allow="autoplay; encrypted-media; picture-in-picture"
								allowFullScreen
								title="video"
							/>
						</div>
						<a
							href="https://github.com/N0E-P/solidity-with-python-fcc-tutorial"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<AiOutlineGithub size={50} />
							<p className="pl-2 py-3 text-lg">Mon code sur Github</p>
						</a>
						<a
							href="https://github.com/smartcontractkit/full-blockchain-solidity-course-py#table-of-contents"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<BsBook size={50} />
							<p className="pl-2 py-3  text-lg">Tout ce que j'ai appris</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
