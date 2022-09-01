import { AiOutlineGithub } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

export default function Projects() {
  return (
    <div className="w-full my-20 p-2 sm:p-8 items-center">
      <div className="max-w-[1400px] m-auto p-4 sm:p-8 bg-yellow-200 rounded-3xl shadow-lg shadow-gray-400">
        <h1>Projet #5 : Patrick est de retour !</h1>
        <div className="xl:grid grid-cols-3 mt-2 sm:mt-5 xl:mt-10">
          <div className="col-span-2 xl:mr-8">
            <p className="py-2 text-gray-700 ">
              Patrick Colins, c'est le génie qui a fait la formation de 16H que
              j'ai suivi. Et le 26 Mai 2022, il envoie une nouvelle formation
              monstrueuse sur Solidity avec Javascript, de{" "}
              <span className="font-bold">32 HEURES !!!</span>
            </p>
            <p className="py-2 text-gray-700 ">
              Je savais que ça me prendrais un temps fou de la suivre. Mais je
              savais aussi que si je voulais vraiment devenir développeur, je
              devais absolument savoir utiliser Javascript.
            </p>
            <p className="py-2 text-gray-700 ">
              Alors j'ai commencé début juillet, et j'ai travaillé dessus sans
              arrêt, tout les jours, du matin au soir. Après un mois et demi de
              travail acharné, je suis enfin arrivé à bout de cette formation
              interminable. Maintenant je suis vraiment confiant pour faire des
              smart contracts, des dapps et tout ce qu'il faut savoir pour
              travailler dans les cryptos.
            </p>
            <p className="py-2 text-gray-700 ">
              Pour prouver que l'on a entièrement terminé la formation, il
              fallait réutiliser toutes les connaissances du cours pour minter 5
              NFT sous forme d'énigmes. C'était loin d'être simple, mais j'ai
              officiellement fini la formation ! Bordel ce que j'étais fier de
              moi !
            </p>
            <p className="py-2 text-gray-700  italic">
              Fun fact : Au moment où j'écris ça, je suis une des 40 seules
              personnes au monde à être entièrement allé jusqu'au bout de la
              formation et à avoir ces 5 NFTs. Ça veut dire que j'ai un bon
              petit niveau quand même !<span className=" not-italic">😁</span>
            </p>
          </div>
          <div className="mt-6 xl:mt-0 sm:p-4 max-w-[550px] w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <div class="aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-xl"
                src="https://www.youtube.com/embed/gyMwXuJrbJQ"
                frameborder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowfullscreen
                title="video"
              />
            </div>
            <a
              href="https://stratosnft.io/0x7b1A2195862985203AEE71132AcDebBa22557D37"
              className=" my-2"
            >
              <img
                className="rounded-xl"
                src={"projets/NFTs.png"}
                width="1462px"
                height="423px"
                alt="/"
              />
            </a>
            <a
              href="https://github.com/N0E-P/solidity-with-javascript-fcc-tutorial/"
              className=" flex p-2 cursor-pointer hover:text-blue-700"
            >
              <AiOutlineGithub size={50} />
              <p className="px-3 py-3 ">Mon code sur Github</p>
            </a>
            <a
              href="https://github.com/smartcontractkit/full-blockchain-solidity-course-js#table-of-contents"
              className=" flex p-2 cursor-pointer hover:text-blue-700"
            >
              <BsBook size={50} />
              <p className="px-3 py-3 ">Tout ce que j'ai appris</p>
            </a>
            <a
              href="https://stratosnft.io/0x7b1A2195862985203AEE71132AcDebBa22557D37"
              className=" flex p-2 cursor-pointer hover:text-blue-700"
            >
              <img
                src={"projets/nft-logo.png"}
                width="50px"
                height="50px"
                alt="/"
              />
              <p className="px-3 py-3 ">Mes NFTs</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
