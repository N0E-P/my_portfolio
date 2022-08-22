import Image from "next/image";

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
              J'ai commencé avec les Lego. Je restais enfermé dans mon cabanon à bricoler des voitures et des maisons que je finissais par détruire en faisant plein de bruits d'explosion. C'était ça tous les week-ends, tous les mercredi après-midi, et tous les soirs en rentrant de l'école. J'étais devenu complètement addict aux Lego.

              Mais après toutes ces années, j'ai commencé à m'en lasser. Il me fallait plus de liberté et un univers plus grand que mon petit cabanon.


            </p>
            <div className="hover:scale-105 ease-in duration-300 mt-6 w-full h-auto m-auto">
              <Image
                className="rounded-xl"
                src={"/../public/me/legoo.jpg"}
                width="2304px"
                height="3072px"
                alt="/"
              />
            </div>
          </div>
          <div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:ml-2 lg:mr-2 mt-8 lg:mt-0">
            <p className=" text-white text-md sm:text-xl text-justify">
              C'est comme ça que j'ai découvert le monde merveilleux de Minecraft. Je pouvais créer tout ce que je voulais. Je restais scotché devant mon écran toute la journée à chasser des zombies et à faire des maisons dans les montagnes.

              Sauf qu'évidemment, c'était redevenu la même chose. Des cubes partout à la place des briques, moi qui construis et qui casse tout, et la quantité de choses possibles à faire restait forcément limitée par le jeu lui-même.

              
            </p>
            <div className="hover:scale-105 ease-in duration-300 mt-6 w-full h-auto m-auto">
              <Image
                className="rounded-xl"
                src={"/../public/me/minecraft.jpg"}
                width="3072px"
                height="2304px"
                alt="/"
              />
            </div>
          </div>
          <div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:ml-4 mt-8 lg:mt-0">
            <p className=" text-white text-md sm:text-xl text-justify">
            Un jour, mon Père a acheté des cartes Arduino. Ce sont des petits microcontrôleurs que l'on peut programmer et lier avec des moteurs, des boutons et à peu près n'importe quoi d'autre ce qui peut se connecter avec des câbles. 
Je me suis beaucoup amusé avec, et je me débrouillais plutôt bien. J'avais même commencé à faire ma propre voiture télécommandée. Mais je m'en suis désintéressé par manque de temps à cause de mes cours et de mes études.

            </p>
            <div className="hover:scale-105 ease-in duration-300 mt-6 w-full h-auto m-auto">
              <Image
                className="rounded-xl"
                //src={"/../public/me/legoo.jpg"}
                //width="2304px"
                //height="3072px"
                alt="/"
              />
            </div>
          </div>
        </div>
        <p className="m-10 text-justify p-4 text-sm sm:text-xl">
          Fin juillet 2021, alors que je m'ennuyais profondément en plein
          millieux de mes vacances : J'ai eu envie de commencer à m'intéresser à
          la blockchain. (Ce qui jusque là, est une très bonne idée.) Mais, en
          passant par l'univers terrible des shitcoins... 🤦‍♂️ Donc pour faire
          très simple, on m'avait fait la promotion d'une crypto-monaie qui
          avait déjà fait × 50. Et n'y connaissant rien, j'ai eu la bonne idée
          d'en acheter alors qu'elle était au plus haut, pensant que ça allait
          encore monter. Evidemment, tout s'est écroulé car il n'y avait aucun
          fondement derrière, c'était juste un pump and dump. Et c'est comme ça
          que j'ai réussi à perdre tout mon argent d'un coup sans rien voir
          venir ! Bravo Noé ! Heureusement, j'ai eu la chance de ne pas avoir
          abandonné et de m'y être ré-intéressé 3 mois plus tard, début
          novembre. Et à partir de là, j'ai vraiment commencé à comprendre
          l'écosystème et tout l'aspect technologique derrière la blockchain.
          Mais bien sur, ça aurait été trop simple si ça n'avait pas été pile au
          moment du début du bearmarket... Donc malgré que j'ai appris
          énormément de choses sur la defi, vu que tout étaient en train de
          redescendre, j'ai réussi à perdre encore plus d'argent ! (Sachant que
          j'étais étudiant, et que tout venais de mes économies bien sur.) Bref,
          tout ça m'a fais comprendre que même si j'adorais l'univers de la
          defi, je n'étais pas forcément fait pour l'investissement. Et qu'il
          allait faloir trouver un autre moyen de gagner de l'argent... PS : Je
          possède toujours mon million de Checoin, et j'en suis fier Bien plus
          tard, aux alentours de mi-février 2022, ma grande soeur avait un
          projet en arduino a faire pour son école. Et j’ai proposé de l'aider
          un peu à avancer dessus, vu que j'avais déjà un peu d'experience là
          dedans. En fait, je me suis vite rendu compte que ça me plaisais
          vachement bien de programmer quand même ! Et que je me debrouillais
          pas trop mal en plus ! Même si je n'ai pas énormément aidé à l'avancée
          du projet, j'ai senti que ça avait été un déclic. En parrallèle,
          j’avais déjà entendu parler du métier de développeur solidity. Alors
          je me suis rendu compte que ça mellait pile 2 choses que j’aimais
          particulièrement bien : La programmation, et la blockchain. Donc je me
          suis dit que je tenais quelque chose qui pourrait être très
          intéressant, alors pourquoi pas aller apprendre à programmer en
          solidity...
        </p>
      </div>
    </div>
  );
}
