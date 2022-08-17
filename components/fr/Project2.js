import Image from "next/image";
import { AiFillYoutube, AiOutlineGithub } from "react-icons/ai";

export default function Projects() {
  return (
    <div className="w-full py-10 p-6 items-center ">
      <div className="max-w-[1400px] m-auto gap-8 bg-orange-200 rounded-3xl p-8 shadow-lg shadow-gray-400">
        <h1 className="text-center">
          Projet #2 : J'ai fais des NFTs complètement débiles
        </h1>
        <div className="md:grid grid-cols-3 p-6">
          <div className="col-span-2">
            <p className="py-2 text-gray-700">ceci est un texte</p>
          </div>
          <div className="p-8">
            <div className="w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
              <iframe
                className="rounded-xl"
                src="https://www.youtube.com/embed/u4aM2DMDH20"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
                width="400px"
                height="225px"
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
      </div>
    </div>
  );
}