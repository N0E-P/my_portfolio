import { AiOutlineGithub } from "react-icons/ai";
import { SiDevpost, SiChainlink } from "react-icons/si";

export default function Projects() {
  return (
    <div className="w-full my-20 p-2 sm:p-8 items-center">
      <div className="max-w-[1400px] m-auto p-4 sm:p-8 bg-gray-300 rounded-3xl shadow-lg shadow-gray-400">
        <h1>Projet #3 : Mon premier vrai projet</h1>
        <div className="xl:grid grid-cols-3 mt-2 sm:mt-5 xl:mt-10">
          <div className="col-span-2 xl:mr-8">
            <p className="py-2 text-gray-700 ">
              Le 10 Mai 2022, j'ai rejoins le Hackaton de Chainlink. Et j'y ai
              créé <span className="font-bold">NFT Detector</span>.
            </p>
            <p className="py-2 text-gray-700 ">
              C'est un bot Discord qui donne un role spécial aux personnes qui
              possèdent des NFTs. Ça permet de leur faire des salons privés et
              de leur donner des bonus dans le serveur Discord de cette
              collection.
            </p>
            <p className="py-2 text-gray-700 ">
              Il faut savoir que je n'avais vraiment aucune idée de comment est
              ce que je pouvais bien faire ça. Mais je trouvais l'idée sympa
              alors j'ai commencé à travailler dessus.
            </p>
            <p className="py-2 text-gray-700 ">
              J'ai donc créé un bot discord pour voir les membres des serveurs
              et leur donner des roles. J'ai fais une dapp pour faire vérifier
              son portefeuille Metamask. Et j'utilise Moralis, qui est une sorte
              de data-serveur lié à la blockchain, pour pouvoir relier le bot et
              la dapp.
            </p>
          </div>
          <div className="mt-6 xl:mt-0 sm:p-4 max-w-[550px] w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
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
              <p className="px-3 py-3 ">Mon code sur Github</p>
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
  );
}
