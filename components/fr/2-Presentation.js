import Image from "next/image";
import Lego from ".//../../public/me/lego.jpg";
//import Minecraft from "./../../public/me/minecraft.jpg";

export default function Presentation() {
  return (
    <div id="presentation" className="w-full p-4 items-center">
      <div className="max-w-[1400px] m-auto ">
        <h1 className="text-center mb-12 mt-5">
          J'ai toujours aimé construire des choses
        </h1>
        <div className="lg:grid grid-cols-3">
          <div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:mr-4 ">
            <p className=" text-white text-md sm:text-xl text-justify">
              J'ai commencé avec les Lego. Je restais enfermé dans mon cabanon à
              bricoler des voitures et des maisons que je finissais par détruire
              en faisant plein de bruits d'explosion. C'était ça tous les
              week-ends, tous les mercredi après-midi, et tous les soirs en
              rentrant de l'école. J'étais devenu complètement addict aux Lego.
              Mais après toutes ces années, j'ai commencé à m'en lasser. Il me
              fallait plus de liberté et un univers plus grand que mon petit
              cabanon.
            </p>
            <div className="hover:scale-105 ease-in duration-300 mt-6 w-full h-auto m-auto ">
              <Image
                className="rounded-xl"
                src={Lego}
                width="2292px"
                height="2788px"
                alt="/"
              />
            </div>
          </div>
          <div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:ml-2 lg:mr-2 mt-8 lg:mt-0">
            <p className=" text-white text-md sm:text-xl text-justify">
              C'est comme ça que j'ai découvert le monde merveilleux de
              Minecraft. Je pouvais créer tout ce que je voulais. Je restais
              scotché devant mon écran toute la journée à chasser des zombies et
              à faire des maisons dans les montagnes. Sauf qu'évidemment,
              c'était redevenu la même chose. Des cubes partout à la place des
              briques, moi qui construis et qui casse tout, et la quantité de
              choses possibles à faire restait forcément limitée par le jeu
              lui-même.
            </p>
            <div className="hover:scale-105 ease-in duration-300 mt-6 w-full h-auto m-auto">
              <Image
                className="rounded-xl"
                src={"me/minecraft.jpg"}
                width="3072px"
                height="2304px"
                alt="/"
              />
            </div>
          </div>
          <div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:ml-4 mt-8 lg:mt-0">
            <p className=" text-white text-md sm:text-xl text-justify">
              Un jour, mon Père a acheté des cartes Arduino. Ce sont des petits
              microcontrôleurs que l'on peut programmer et lier avec des
              moteurs, des boutons et à peu près n'importe quoi d'autre ce qui
              peut se connecter avec des câbles. Je me suis beaucoup amusé avec,
              et je me débrouillais plutôt bien. J'avais même commencé à faire
              ma propre voiture télécommandée. Mais je m'en suis désintéressé
              par manque de temps à cause de mes cours et de mes études.
            </p>
            <div className="hover:scale-105 ease-in duration-300 mt-6 w-full h-auto m-auto">
              <Image
                className="rounded-xl"
                src={"/../public/me/arduino.png"}
                width="900px"
                height="675px"
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className="mx-10 my-2 mt-10 text-justify p-4 text-sm sm:text-xl">
          Fin juillet 2021, j'ai commencé à m'intéresser aux crypto-monnaies.
          (Ce qui jusque-là, est une très bonne idée.){" "}
          <div>Le problème, c'est que j'ai fais n'importe quoi… 🤦‍♂️</div>
        </div>
        <p className="mx-10  my-2 text-justify p-4 text-sm sm:text-xl">
          Pour faire simple, on m'a fait la promotion d'une petite
          crypto-monnaie qui avait déjà fait × 50. Et n'y connaissant rien, je
          pensais qu'elle pouvait monter encore plus haut. Sauf que pas du tout,
          elle s'est lamentablement écrasée parce c'était un pump and dump. Et
          c'est comme ça que j'ai réussi à perdre tout mon argent sans rien voir
          venir ! Bravo Noé !
        </p>
        <p className="mx-10 my-2 text-justify p-4 text-sm sm:text-xl">
          Heureusement, j'ai eu la chance de ne pas avoir abandonné et de m'y
          être ré-intéressé 3 mois plus tard. Et à partir de là, j'ai vraiment
          commencé à comprendre l'écosystème et tout l'aspect technologique
          derrière la blockchain.
        </p>
        <p className="mx-10 my-2 text-justify p-4 text-sm sm:text-xl">
          Plus tard, vers mi-février 2022, ma grande sœur avait un{" "}
          <span>
            <a
              href="https://www.youtube.com/watch?v=nb471gm5Xeg"
              className="cursor-pointer text-blue-700"
            >
              projet en Arduino
            </a>
          </span>{" "}
          a faire pour son école. Je lui ai proposé de l'aider à avancer dessus,
          vu que j'avais déjà un peu d'expérience là dedans. Après quelques
          jours, je me suis rendu compte que ça me plaisait vachement bien de
          programmer quand même. Et que je ne me débrouillais pas trop mal en
          plus ! Même si je n'ai pas énormément aidé à l'avancée du projet, j'ai
          senti que ça m'a fait un déclic.
        </p>
        <p className="mx-10 my-2 text-justify p-4 text-sm sm:text-xl">
          En parallèle, j’ai entendu parler du métier de développeur solidity.
          Alors, je me suis rendu compte que ça mêlait 2 choses que j’aimais
          particulièrement bien : la programmation, et la blockchain.  Donc
          pourquoi pas essayer d'apprendre à programmer en Solidity...
        </p>
      </div>
    </div>
  );
}
