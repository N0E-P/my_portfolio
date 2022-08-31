export default function Presentation() {
  return (
    <div id="presentation" className="w-full p-4 items-center">
      <div className="max-w-[1400px] m-auto ">
        <h1 className="text-center mt-5">
          Je n'ai <span className="underline underline-offset-4">jamais</span>{" "}
          été bon pour construire.
        </h1>
        <h1 className="text-center mb-12 mt-6">
          Mais j'ai{" "}
          <span className="underline underline-offset-4">toujours</span> adoré
          le faire.
        </h1>
        <div className="lg:grid grid-cols-3">
          <div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:mr-4 ">
            <p className=" text-white text-md sm:text-xl text-justify">
              J'ai commencé avec les Lego. Je restais tout le temps enfermé dans
              mon cabanon à bricoler des voitures et des maisons que je
              finissais par faire exploser.
            </p>
            <p className="mt-5 text-white text-md sm:text-xl text-justify">
              Mon rêve était de travailler chez eux. Mais même si je
              m'améliorais doucement, je n'aurais jamais eu la créativité
              nécessaire pour pouvoir le faire.
            </p>
            <div className="hover:scale-105 ease-in duration-300 mt-6 w-full h-auto m-auto ">
              <img
                className="rounded-xl"
                src="me/lego.JPG"
                width="2292px"
                height="2788px"
                alt="/"
              />
            </div>
          </div>
          <div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:ml-2 lg:mr-2 mt-8 lg:mt-0">
            <p className=" text-white text-md sm:text-xl text-justify">
              Plus tard, j'ai découvert Minecraft. C'était tout un nouvel
              univers de possibilités et de créations qui venait de s'ouvrir.
              J'y ai passé des mois et des mois sur ce jeux.
            </p>
            <p className="mt-5 text-white text-md sm:text-xl text-justify">
              J'ai construit des maisons, des châteaux, des fermes, des manoirs
              et des tonnes d'autres choses dessus. Ça à toujours été mon jeux
              vidéo préféré.
            </p>
            <div className="hover:scale-105 ease-in duration-300 mt-6 w-full h-auto m-auto">
              <img
                className="rounded-xl"
                src={"me/minecraft.JPG"}
                width="3072px"
                height="2304px"
                alt="/"
              />
            </div>
          </div>
          <div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:ml-4 mt-8 lg:mt-0">
            <p className=" text-white text-md sm:text-xl text-justify">
              Un jour, mon Père a acheté des Arduino. Ce sont des petites cartes
              que l'on peut programmer et lier avec tout et n'importe quoi. Je
              me suis beaucoup amusé avec.
            </p>
            <p className="mt-5 text-white text-md sm:text-xl text-justify">
              J'avais l'impression d'être un ingénieur incroyable, alors que je
              faisais que des copier coller du code donné dans le guide livré
              avec.
            </p>
            <div className="hover:scale-105 ease-in duration-300 mt-6 w-full h-auto m-auto">
              <img
                className="rounded-xl"
                src={"me/arduino.png"}
                width="900px"
                height="675px"
                alt="/"
              />
            </div>
          </div>
        </div>
        <h2 className="text-center mt-32 my-2">
          Le 27 juillet 2021, j'ai eu le malheur de tomber{" "}
        </h2>
        <h2 className="text-center my-2">dans l'univers des crypto-monnaies</h2>
        <p className="sm:mx-10 my-2 text-center pt-3 p-4 text-sm sm:text-xl">
          Normalement il n'y a pas de soucis, tout va bien. Mais le problème,
          c'est que{" "}
          <span className="font-bold underline">j'ai fais n'importe quoi</span>…
          🤦‍♂️
        </p>
        <p className="sm:mx-10 my-2 text-justify p-4 text-sm sm:text-xl">
          J'ai acheté des cryptos qui n'avaient aucun sens, j'ai joué au trader
          alors que je n'y connaissais strictement rien, et j'ai perdu des
          sommes pas possibles rien qu'en frais de transaction. Bref, j'ai
          réussi à faire disparaitre tout mon argent sans rien voir venir !
        </p>
        <p className="sm:mx-10 my-2 text-justify p-4 text-sm sm:text-xl">
          Heureusement, j'ai eu la chance de ne pas avoir abandonné et je m'y
          suis remis 3 mois plus tard. C'est à partir de là que j'ai vraiment
          commencé à comprendre l'écosystème et à m'intéresser à tout l'aspect
          technologique derrière la blockchain.
        </p>
        <h2 className="text-center mt-20 my-2">
          Mais comme je n'ai pas gagné plus d'argent,
        </h2>
        <h2 className="text-center my-2 mb-4">
          j'ai continuer de rechercher un moyen d'en faire
        </h2>
        <p className="sm:mx-10 my-2 text-justify p-4 text-sm sm:text-xl">
          C'est alors que vers mi-février 2022, j'ai aidé ma grande sœur à faire
          <span>
            <a
              href="https://www.youtube.com/watch?v=nb471gm5Xeg"
              className="cursor-pointer text-blue-700"
            >
              un projet en Arduino
            </a>
          </span>{" "}
          pour son école. Grace à ça, j'ai enfin compris que ça me plaisait
          beaucoup de programmer, et que je me débrouillais assé bien en plus !
        </p>
        <p className="sm:mx-10 my-2 text-justify p-4 text-sm sm:text-xl">
          Peu de temps avant, j’ai entendu parler du métier de développeur
          Solidity. Alors, je me suis rendu compte que ça mêlait 2 choses que
          j’aimais particulièrement bien : la programmation, et la blockchain.
        </p>

        <h2 className="text-center mt-14 my-2">
          Une nouvelle mission était donc arrivée :
        </h2>
        <h2 className="text-center my-2 mb-32 underline">
          Devenir développeur Solidity
        </h2>
      </div>
    </div>
  );
}
