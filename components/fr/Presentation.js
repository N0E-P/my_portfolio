import Image from "next/image";

export default function Presentation() {
  return (
    <div id="presentation" className="w-full py-10 p-6 items-center ">
      <div className="max-w-[1400px] m-auto gap-8 bg-blue-200 rounded-3xl p-8 shadow-lg shadow-gray-400">
        <h1 className="text-center">
          Depuis tout petit, j'ai toujours aimé construire.
        </h1>
        <div className="md:grid grid-cols-3 p-2">
          <div className="p-8">
            <p className="py-2 text-gray-700 p-4">
              J'ai commencé avec les Lego. Je restais enfermé dans mon cabanon à
              construire des voitures et des maisons que je finissais par faire
              détruire en faisant plein de bruits d'explosion avec ma bouche.
              C'était ça tout le temps : tout les week ends, tout les mercredi
              après midi, et tout les soirs en rentrant de l'école. J'étais
              devenu completement addict aux Lego. Malgré tout, après toutes ces
              années, j'ai commençé a me lasser de jouer avec ces petites
              briques. Il me fallait plus de liberté, plus de possibilités et un
              univers plus grand que juste mon petit cabanon.
            </p>
            <div className="w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
              <Image
                className="rounded-xl"
                src={"/../public/projets/lego.jpg"}
                width="2304px"
                height="3072px"
                alt="/"
              />
            </div>
          </div>
          <div className="p-8">
            <p className="py-2 text-gray-700 p-4">
              C'est comme ça que j'ai découvert le monde merveilleux de
              Minecraft. Je pouvais créer et recréer tout ce que je voulais, je
              restais scotcher devant mon écran toute la journée à chasser des
              zombies et à faire des maisons dans les montagnes. Sauf
              qu'évidemment, au bout de quelques années, c'était redevenu la
              même chose. Des cubes partout à la place des briques, moi qui
              construit et qui casse tout, et la quantité de choses possibles à
              faire restait forcément limitée par le jeux lui même.
            </p>
            <div className="w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
              <Image
                className="rounded-xl"
                src={"/../public/projets/lego.jpg"}
                width="2304px"
                height="3072px"
                alt="/"
              />
            </div>
          </div>
          <div className="p-8">
            <p className="py-2 text-gray-700 p-4">
              Un jour, mon Père a acheté des cartes Arduino. C'est des petits
              microcontrôleur électroniques que l'on peux programmer en C ou
              C++, et lier ça avec des petits moteurs, des leds et des boutons.
              Ce qui permet de créer presque n'importe quel système électronique
              que l'on souhaite. Je me suis beaucoup amusé avec ça et je me
              débrouillais plutot pas mal. J'avais même commencé a faire ma
              propre voiture radiocommandée en LEGO, controlée à distance par
              des Arduino. Mais je m'en suis petit à petit désintéressé a cause
              de mes cours et des études. Je n'avais le temps d'y jouer que
              pendant les vacances, et je suis doucement passé à autre chose.
            </p>
            <div className="w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
              <Image
                className="rounded-xl"
                src={"/../public/projets/lego.jpg"}
                width="2304px"
                height="3072px"
                alt="/"
              />
            </div>
          </div>
        </div>
        <p className="py-2 text-gray-700 p-4">
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
          possède toujours mon million de Checoin, et j'en suis fier
        </p>
        <p className="py-2 text-gray-700 p-4">
          Bien plus tard, aux alentours de mi-février 2022, ma grande soeur
          avait un projet en arduino a faire pour son école. Et j’ai proposé de
          l'aider un peu à avancer dessus, vu que j'avais déjà un peu
          d'experience là dedans. En fait, je me suis vite rendu compte que ça
          me plaisais vachement bien de programmer quand même ! Et que je me
          debrouillais pas trop mal en plus ! Même si je n'ai pas énormément
          aidé à l'avancée du projet, j'ai senti que ça avait été un déclic.
        </p>
        <p className="py-2 text-gray-700 p-4">
          En parrallèle, j’avais déjà entendu parler du métier de développeur
          solidity. Alors je me suis rendu compte que ça mellait pile 2 choses
          que j’aimais particulièrement bien : La programmation, et la
          blockchain. Donc je me suis dit que je tenais quelque chose qui
          pourrait être très intéressant, alors pourquoi pas aller apprendre à
          programmer en solidity...
        </p>
      </div>
    </div>
  );
}
