import Image from "next/image";
import { AiFillYoutube, AiOutlineGithub } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

export default function Project1() {
  return (
    <div className="w-full py-10 p-6 items-center mt-12">
      <div className="max-w-[1400px] m-auto gap-8 bg-violet-300 rounded-3xl p-8 shadow-lg shadow-gray-400">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Projet #1 : Le tuto le plus long de ma vie
        </h1>
        <div className="lg:grid grid-cols-3 p-3 mt-5">
          <div className="col-span-2  lg:mr-6">
            <p className="py-2 text-gray-700 text-md sm:text-xl text-justify">
              Fin février 2022, j'ai décidé d'apprendre à programmer en
              Solidity. Pour pouvoir créer des smart contracts et interagir avec
              la blockchain.
            </p>
            <p className="py-2 text-gray-700 text-md sm:text-xl text-justify">
              Le petit problème, c'est que je ne me suis pas juste lancé dans un
              petit tutoriel comme ça... Mais dans une énorme formation de 16
              HEURES !!! Je ne savais vraiment pas dans quoi je m'embarquais...
            </p>
            <p className="py-2 text-gray-700 text-md sm:text-xl text-justify">
              C'est comme ça que j'ai passé 2 mois à réfléchir, comprendre,
              résoudre des problèmes et recopier tout ce que Patrick, le
              formateur, montrait.
            </p>
            <p className="py-2 text-gray-700 text-md sm:text-xl text-justify">
              J'ai finalement réussi à suivre ces 16 heures interminables de
              cours. Et j'en ai beaucoup appris ! On a commencé en écrivant 3
              lignes de code pour s'amuser sur Remix, et on a fini par
              construire toute une Dapp entièrement fonctionnelle. Tout ça en
              passant évidemment par apprendre à créer n'importe quel smart
              contracts, à faire des tests et à utiliser Python pour créer des
              projets plus facilement.
            </p>
            <p className="py-2 text-gray-700 text-md sm:text-xl text-justify">
              Après ça, il était temps pour moi d'essayer de me mettre à faire
              mon propre projet !
            </p>
          </div>
          <div className="sm:p-4">
            <div className="w-full mt-3 bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
              <Image
                className="rounded-xl"
                src={"/../public/projets/solidity-python.jpg"}
                width="1920px"
                height="1080px"
                alt="/"
              />
              <a
                href="https://www.youtube.com/watch?v=M576WGiDBdQ"
                className=" flex p-2 cursor-pointer hover:text-blue-700"
              >
                <AiFillYoutube size={50} />
                <p className="pl-2 py-3">Le tutoriel vidéo</p>
              </a>
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
    </div>
  );
}
