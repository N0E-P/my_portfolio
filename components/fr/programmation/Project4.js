import { AiOutlineGithub } from "react-icons/ai";
export default function Projects() {
	return (
		<div className="w-full my-20 p-2 sm:p-8 items-center">
			<div className="max-w-[1400px] m-auto p-4 sm:p-8 bg-red-200 rounded-3xl shadow-lg shadow-gray-400">
				<h1>Projet #4 : J'ai réalisé mon rêve de gosse</h1>
				<div className="xl:grid grid-cols-3 mt-2 sm:mt-5 xl:mt-10">
					<div className="col-span-2 xl:mr-8">
						<p className="py-2 text-gray-700 ">
							Quand j'étais petit, je voulais absolument avoir une voiture
							télécommandée en Lego. Sauf qu'à l'époque, je n'avais strictement aucune
							idée de comment m'y prendre.
						</p>
						<p className="py-2 text-gray-700 ">
							Alors bien plus tard, aux vacances d'été 2020, j'ai commencé en
							construisant toute la carrosserie et le châssis. Puis l'été suivant, je
							m'y suis remis pour organiser la partie Arduino, faire les calculs et
							commander les pièces.
						</p>
						<p className="py-2 text-gray-700 ">
							On arrive alors fin juin 2022. Et en cherchant un nouveau projet à
							faire, je me suis rappelé que j'avais un début de voiture télécommandée
							qui traînait dans mes placards. Alors, j'ai décidé de me remettre à
							travailler dessus, pour en finir une bonne fois pour toutes.
						</p>
						<p className="py-2 text-gray-700 ">
							J'ai tout programmé et assemblé, puis j'ai finalement réussi à finir ma
							voiture en Lego. Maintenant, je peux jouer avec comme un gamin, c'est
							génial !{" "}
							<span className="italic text-xs sm:text-sm xl:text-lg">
								(Sauf quand je l'explose à fond contre un mur. Mais ça, c'est autre
								chose...)
							</span>
						</p>
					</div>
					<div className="mt-6 xl:mt-0 sm:p-4 max-w-[550px] w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
						<div className="aspect-w-16 aspect-h-9">
							<iframe
								className="rounded-xl"
								src="https://www.youtube.com/embed/4BGRAA7IIhA"
								frameBorder="0"
								allow="autoplay; encrypted-media; picture-in-picture"
								allowFullScreen
								title="video"
							/>
						</div>
						<a
							href="https://github.com/N0E-P/RC_Car"
							className=" flex p-2 cursor-pointer hover:text-blue-700"
						>
							<AiOutlineGithub size={50} />
							<p className="px-3 py-3 text-lg">Mon code sur Github</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
