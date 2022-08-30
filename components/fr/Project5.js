import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

export default function Projects() {
  return (
    <div className="w-full py-10 p-6 items-center mt-12 ">
      <div className="max-w-[1400px] m-auto gap-8 bg-yellow-200 rounded-3xl p-8 shadow-lg shadow-gray-400">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Projet #5 : Patrick est de retour !
        </h1>
        <div className="lg:grid grid-cols-3 p-3 mt-5">
          <div className="col-span-2  lg:mr-6">
            <p className="py-2 text-gray-700 sm:text-xl text-justify">


Patrick Colins, c'est le génie qui a fait la formation de 16 Heures que j'ai suivi sur Solidity avec Python.

</p>            <p className="py-2 text-gray-700 sm:text-xl text-justify">

Et le 26 Mai 2022, qu'est ce que je vois arriver ? Un nouveau tutoriel, 2 fois plus long, sur Solidity, mais cette fois ci avec javascript. A ce moment là je travaillais encore sur mon détecteur d'NFT. Je savais bien que ça me prendrais un temps fou de suire ce tutoriel, mais je savais aussi que si je voulais trouver un métier en temps que développeur solidity, je devais autant savoir utiliser python que javascript avec solidity. Donc il fallait que je le fasse !


</p>            <p className="py-2 text-gray-700 sm:text-xl text-justify">


J'ai commencé à suivre le cours début juillet, et j'ai travaillé dessus sans arrêt, tout les jours, du matin au soir. Je ne sortais qu'en fin de journée pour aller faire du sport à la plage. Mais sinon je devais avancer sur ce tutoriel. C'était la mission. Maintenant que j'avais commencé, il fallait que je le finisse. Je ne vais pas faire le gros dur non plus, personne ne m'a forcé à le faire, et c'était pas si dur que ça. Ca me plaisait quand meme, sinon évidemment que je ne l'aurait pas fait. Moi j'étais content de me lever à 7H en plein mois de juillet pour aller travailler.

</p>            <p className="py-2 text-gray-700 sm:text-xl text-justify">


Après un mois et demi de travail acharné, le 11 Août je suis enfin arrivé à la 32ème heure de ce tutoriel interminable ! Mais bordel ce que j'en était fier, et je peux dire que j'ai bien dormis la nuit la ! J'ai appris énormément de choses dans ce tutoriel. Maintenant je me sent incroyablement confiant pour faire des smart contracts, des dapps etc... Je suis vraiment content d'avoir appris tout ça, et ça va m'être très utile pour travailler dans le millieux.

</p>            <p className="py-2 text-gray-700 sm:text-xl text-justify">

Désormais, la dernière chose que j'avais a faire, c'était de récupérer les 5 NFTs qui prouvent que l'on a bien suivi le cours jusqu'au bout. Mais ce dont je n'étais pas au courrant, c'était qu'il fallait résoudre des énigmes pour les récupérer... Donc j'ai galéré 24 Heures de plus pour les avoir. Parce qu'il fallait réutiliser toutes les connaissances que l'on avait appris pendant le cours afin de pouvoir les minter. C'était loin d'être simple, mais le 12 août à 9H26, j'ai finalement réussi a minter mon 5ème et dernier NFT!


</p> <p className="py-2 text-gray-700 sm:text-xl text-justify">


Petite information bonus : Au moment où j'écris ça, on est seulement 40 dans le monde à avoir ces 5 différents NFTs, et donc autant de personnes à avoir entièrement fini le cours et être allé jusqu'au bout. Ce qui ne fait vraiment pas beaucoup par rapport aux plus de 700 000 personnes qui ont cliqués sur la vidéo. Je crois que ça veut dire que j'ai un bon petit niveau quand même, il faut pas déconner

</p>


          </div>
          <div className="sm:p-4">
            <div className="w-full mt-3 bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
