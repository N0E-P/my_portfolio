import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { SiDevpost, SiChainlink } from "react-icons/si";

export default function Projects() {
  return (
    <div className="w-full py-10 p-6 items-center  mt-12">
      <div className="max-w-[1400px] m-auto gap-8 bg-gray-300 rounded-3xl p-8 shadow-lg shadow-gray-400">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Projet #3 : Mon premier vrai projet
        </h1>
        <div className="lg:grid grid-cols-3 p-3 mt-5">
          <div className="col-span-2">
            <p className="py-2 text-gray-700">TEXT</p>
          </div>
          <div className="p-8">
            <div className="w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
              <Image
                className="rounded-xl"
                src={"/../public/projets/NFTDetector.png"}
                width="3000px"
                height="2000px"
                alt="/"
              />
              <a
                href="https://github.com/N0E-P/NFT_detector"
                className=" flex p-2 cursor-pointer hover:text-blue-700"
              >
                <AiOutlineGithub size={50} />
                <p className="px-3 py-3 ">Mon bot discord</p>
              </a>
              <a
                href="https://github.com/N0E-P/NFT_detector_dapp"
                className=" flex p-2 cursor-pointer hover:text-blue-700"
              >
                <AiOutlineGithub size={50} />
                <p className="px-3 py-3 ">Ma dapp</p>
              </a>
              <a
                href="https://devpost.com/software/nft-detector"
                className=" flex p-2 cursor-pointer hover:text-blue-700"
              >
                <SiDevpost size={50} />
                <p className="px-3 py-3 ">Ma page Devpost</p>
              </a>
              <a
                href="https://chain.link/hackathon"
                className=" flex p-2 cursor-pointer hover:text-blue-700"
              >
                <SiChainlink size={50} />
                <p className="px-3 py-3 ">Le hackaton de Chainlink</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
