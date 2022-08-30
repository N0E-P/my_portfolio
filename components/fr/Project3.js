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
          <div className="col-span-2  lg:mr-6">
            <p className="py-2 text-gray-700 sm:text-xl text-justify">
NFT Detector

1er Mai : vacances car plus de cours, donc beaucoup plus simple pour pouvoir travailler sur solidity, je m’y suis mis a plein temps

bot discord + dapp, avec moralis

commencé le 10 mai


</p>
<p className="py-2 text-gray-700 sm:text-xl text-justify">

Lien devpost pour le hackaton chailink et nft detector

24 mai encore avec discord.py changé pour discord.js

Fin du concours lundi 6 juin, mais j'étais pas pret, j'avais pas fini Je suis resté éveillé toute la nuit jusqu'a 7H le lendemain matin pour travailler dessus


</p>
          </div>
          <div className="sm:p-4">
            <div className="w-full mt-3 bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
              <div class="aspect-w-16 aspect-h-9">
                <iframe
                  className="rounded-xl"
                  src="https://www.youtube.com/embed/-mkfKEfMSL4"
                  frameborder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowfullscreen
                  title="video"
                />
              </div>
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
