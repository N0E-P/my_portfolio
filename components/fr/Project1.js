import { AiOutlineGithub } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

export default function Project1() {
  return (
    <div className="w-full py-10 p-6 items-center mt-12">
      <div className="max-w-[1400px] m-auto gap-8 bg-violet-300 rounded-3xl p-8 shadow-lg shadow-gray-400">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Projet #1 : Le tuto le plus long de ma vie
        </h1>
        <div className="xl:grid grid-cols-3 p-3 mt-5">
          <div className="col-span-2  xl:mr-6">
            <p className="py-2 text-gray-700 text-md sm:text-xl text-justify">
              Fin février 2022, je me suis lancé dans l'apprentissage de
              Solidity. Le petit problème, c'est que je n'ai pas juste commencé
              par un petit tutoriel comme ça... Mais par une gigantesque
              formation de <span className="font-bold ">16 HEURES !!!</span>
            </p>
            <p className="py-2 text-gray-700 text-md sm:text-xl text-justify">
              C'est comme ça que j'ai passé 2 mois à réfléchir, comprendre,
              résoudre des problèmes et recopier tout ce que Patrick, le
              formateur, montrait. J'ai finalement réussi à aller jusqu'au bout
              du cours. Et j'en ai énormément appris.
            </p>
            <p className="py-2 text-gray-700 text-md sm:text-xl text-justify">
              Après ça, il était temps pour moi d'utiliser mes nouvelles
              compétences et d'essayer de faire mon tout premier projet !
            </p>
          </div>
          <div className="mt-6 xl:mt-0 sm:p-4 max-w-[550px] w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <div class="aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-xl"
                src="https://www.youtube.com/embed/M576WGiDBdQ"
                frameborder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowfullscreen
                title="video"
              />
            </div>
            <a
              href="https://github.com/N0E-P/solidity-with-python-fcc-tutorial"
              className=" flex p-2 cursor-pointer hover:text-blue-700"
            >
              <AiOutlineGithub size={50} />
              <p className="pl-2 py-3 ">Mon code sur Github</p>
            </a>
            <a
              href="https://github.com/smartcontractkit/full-blockchain-solidity-course-py#table-of-contents"
              className=" flex p-2 cursor-pointer hover:text-blue-700"
            >
              <BsBook size={50} />
              <p className="pl-2 py-3 ">Tout ce que j'ai appris</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
