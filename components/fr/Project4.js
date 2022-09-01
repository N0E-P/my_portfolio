import { AiOutlineGithub } from "react-icons/ai";
export default function Projects() {
  return (
    <div className="w-full py-10 p-6 items-center  mt-12">
      <div className="max-w-[1400px] m-auto gap-8 bg-red-200 rounded-3xl p-8 shadow-lg shadow-gray-400">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Projet #4 : J'ai réalisé mon rêve de gosse
        </h1>
        <div className="xl:grid grid-cols-3 p-3 mt-5">
          <div className="col-span-2  xl:mr-6">
            <p className="py-2 text-gray-700 sm:text-xl text-justify">
              Quand j'étais petit, je voulais avoir une voiture télécommandée en
              Lego. Sauf qu'à l'époque, je n'avais strictement aucune idée de
              comment m'y prendre.
            </p>
            <p className="py-2 text-gray-700 sm:text-xl text-justify">
              Alors bien plus tard, aux vacances d'été 2020, j'ai commencé en
              construisant toute la carrosserie et le chassis. Puis l'été
              suivant, je m'y suis remis pour organiser la partie Arduino, faire
              les calculs et commander les pièces.
            </p>
            <p className="py-2 text-gray-700 sm:text-xl text-justify">
              On arrive alors fin juin 2022. Et en cherchant un nouveau projet à
              faire, je me suis rappellé que j'avais un début de voiture
              télécommandée qui trainait dans mes placards. Alors j'ai décidé de
              me remmettre a travailler dessus, pour en finir une bonne fois
              pour toutes.
            </p>
            <p className="py-2 text-gray-700 sm:text-xl text-justify">
              La partie programmation était très rapide. Car il fallait juste
              tourner, accélérer et transmettre le signal. J'ai accroché le
              moteur, l'antenne, l'arduino et tout les autres composants...
            </p>
            <p className="py-2 text-gray-700 sm:text-xl text-justify">
              Puis j'ai finalement réussi à finir ma voiture en Lego. Maintenant
              je peux jouer avec comme un gamin, c'est génial !{" "}
              <span className="italic">
                (Sauf quand je la crash et qu'il y a des Lego qui explosent
                partout, mais ça c'est autre chose...)
              </span>
            </p>
          </div>
          <div className="mt-6 xl:mt-0 sm:p-4 max-w-[550px] w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <div class="aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-xl"
                src="https://www.youtube.com/embed/4BGRAA7IIhA"
                frameborder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowfullscreen
                title="video"
              />
            </div>
            <a
              href="https://github.com/N0E-P/RC_Car"
              className=" flex p-2 cursor-pointer hover:text-blue-700"
            >
              <AiOutlineGithub size={50} />
              <p className="px-3 py-3 ">Mon code sur Github</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
