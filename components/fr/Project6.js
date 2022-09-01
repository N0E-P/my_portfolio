import { AiOutlineGithub, AiOutlineLaptop } from "react-icons/ai";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="w-full py-10 p-6 items-center mt-12 ">
      <div className="max-w-[1400px] m-auto gap-8 bg-green-200 rounded-3xl p-8 shadow-lg shadow-gray-400">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Projet #6 : Mon magnifique portfolio
        </h1>
        <div className="xl:grid grid-cols-3 p-3 mt-5">
          <div className="col-span-2  xl:mr-6">
            <p className="py-2 text-gray-700 sm:text-xl text-justify">
              Après avoir fais ces 5 premiers projets, il était temps pour moi
              d'essayer de trouver du travail en montrant ce que j'avais appris,
              construis et accomplis. En même temps, j'avais aussi envie de
              savoir mieux faire des sites web. Alors j'ai décidé de créer mon
              portfolio.
            </p>
            <p className="py-2 text-gray-700 sm:text-xl text-justify">
              Mi-août, j'ai commencé la construction. Je l'ai fais avec React,
              NextJS et Tailwind car je les avais déjà utilisé dans la formation
              Solidity & Javascript. J'ai aussi regardé un tutoriel Youtube de
              2H30 pour en apprendre plus dessus.
            </p>
            <p className="py-2 text-gray-700 sm:text-xl text-justify">
              Une fois terminé, il était désormais l'heure d'aller rechercher
              des entreprises qui apprécierais m'embaucher.
            </p>
          </div>
          <div className="mt-6 xl:mt-0 sm:p-4 max-w-[550px] w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <img
              src={"projets/portfolio.png"}
              width="1891px"
              height="973px"
              alt="/"
            />
            <a
              href="https://github.com/N0E-P/my_portfolio"
              className=" flex p-2 cursor-pointer hover:text-blue-700"
            >
              <AiOutlineGithub size={50} />
              <p className="px-3 py-3 ">Mon code sur Github</p>
            </a>
            <div className="p-2 cursor-pointer hover:text-blue-700">
              <Link href="/">
                <div className=" flex ">
                  <AiOutlineLaptop size={50} />
                  <p className="px-3 py-3 ">Mon portfolio</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
