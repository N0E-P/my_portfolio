import { AiOutlineGithub, AiOutlineLaptop } from "react-icons/ai";
import Link from "next/link";

export default function Projects() {
	return (
		<div className="w-full my-20 p-2 sm:p-8 items-center">
			<div className="max-w-[1400px] m-auto p-4 sm:p-8 bg-green-200 rounded-3xl shadow-lg shadow-gray-400">
				<h1>Projet #6 : Mon magnifique portfolio</h1>
				<div className="xl:grid grid-cols-3 mt-2 sm:mt-5 xl:mt-10">
					<div className="col-span-2 xl:mr-8">
						<p className="py-2 text-gray-700 ">
							Après avoir fait ces 5 premiers projets, il était temps pour moi
							d'essayer de trouver du travail en montrant ce que j'avais appris,
							construis et accomplis. En même temps, j'avais aussi envie de savoir
							mieux faire des sites web. Alors j'ai décidé de créer{" "}
							<span className="font-bold">mon portfolio</span>.
						</p>
						<p className="py-2 text-gray-700 ">
							Mi-août, j'ai commencé la construction. Je l'ai fait avec React, NextJS
							et Tailwind, car je les avais déjà utilisés dans la formation Solidity &
							Javascript. J'ai aussi regardé un tutoriel Youtube de 2H30 pour en
							apprendre plus dessus.
						</p>
						<p className="py-2 text-gray-700 ">
							Une fois terminé, il était désormais l'heure d'aller trouver d'autres
							personnes avec qui travailler.
						</p>
					</div>
					<div className="mt-6 xl:mt-0 sm:p-4 max-w-[550px] w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
						<div className="aspect-w-16 aspect-h-9">
							<iframe
								className="rounded-xl"
								src="https://www.youtube.com/embed/CMx51wpd7g4"
								frameBorder="0"
								allow="autoplay; encrypted-media; picture-in-picture"
								allowFullScreen
								title="video"
							/>
						</div>
						<a
							href="https://github.com/N0E-P/my_portfolio"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<AiOutlineGithub size={50} />
							<p className="px-3 py-3 text-lg">Mon code sur Github</p>
						</a>
						<div className="p-2 cursor-pointer hover:text-blue-700">
							<Link href="/fr">
								<div className=" flex ">
									<AiOutlineLaptop size={50} />
									<p className="px-3 py-3 text-lg">Mon portfolio</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
