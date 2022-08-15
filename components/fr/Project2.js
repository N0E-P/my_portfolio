import Image from "next/image";
import { AiFillYoutube, AiOutlineGithub } from "react-icons/ai";

export default function Projects() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1>Projet #2 : mes NFTs débiles</h1>
          <p className="py-2 text-gray-700">ceci est un texte</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={"/../public/projets/kevin.png"}
            width="2000px"
            height="2000px"
            alt="/"
          />
          <a
            href="https://www.youtube.com/watch?v=cLB7u0KQFIs"
            className=" flex p-2 cursor-pointer hover:text-blue-700"
          >
            <AiFillYoutube size={50} />
            <p className="px-3 py-3 ">Le tutoriel vidéo</p>
          </a>
          <a
            href="https://github.com/N0E-P/Kevin-s-Holidays"
            className=" flex p-2 cursor-pointer hover:text-blue-700"
          >
            <AiOutlineGithub size={50} />
            <p className="px-3 py-3 ">Mon code sur Github</p>
          </a>
          <a
            href="https://testnets.opensea.io/collection/kevins-holidays"
            className=" flex p-2 cursor-pointer hover:text-blue-700"
          >
            <Image
              src={"/../public/projets/opensea.png"}
              width="50px"
              height="50px"
              alt="/"
            />
            <p className="px-3 py-3 ">La page Opensea des NFT</p>
          </a>
          <a
            href="https://superb-zuccutto-9f46e1.netlify.app/"
            className=" flex p-2 cursor-pointer hover:text-blue-700"
          >
            <Image
              src={"/../public/projets/kevin-logo.png"}
              width="50px"
              height="50px"
              alt="/"
            />
            <p className="px-3 py-3 ">La dapp des NFT</p>
          </a>
        </div>
      </div>
    </div>
  );
}
