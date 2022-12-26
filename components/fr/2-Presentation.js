export default function Presentation() {
  return (
    <div id="presentation" className="w-full p-4 items-center">
      <div className="max-w-[1400px] m-auto ">
        <h1 className="mt-5 max-w-[350px] sm:max-w-[1400px] m-auto">
          Je n'ai jamais été fort pour construire.
        </h1>
        <h1 className="mb-12 mt-6 max-w-[300px] sm:max-w-[1400px] m-auto">
          Mais j'ai{" "}
          <span className="underline underline-offset-4">toujours</span> voulu
          m'améliorer.
        </h1>
        <div className="lg:grid grid-cols-3">
          <div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:mr-4 ">
            <p className=" text-white text-lg">
              J'ai commencé avec les Lego. Je restais tout le temps enfermé dans
              mon cabanon à bricoler des voitures et des maisons que je
              finissais par faire exploser.
            </p>
            <p className="mt-5 text-white text-lg">
              Mon rêve était de travailler chez eux. Mais même si je
              m'améliorais doucement, je n'aurais jamais eu la créativité
              nécessaire pour pouvoir le faire.
            </p>
            <div className="mt-6 max-w-[450px] hover:scale-105 ease-in duration-300 w-full h-auto m-auto ">
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
            <p className=" text-white text-lg">
              Plus tard, j'ai découvert Minecraft. C'était tout un nouvel
              univers de possibilités et de créations qui venait de s'ouvrir.
              J'ai passé des mois et des mois sur ce jeu.
            </p>
            <p className="mt-5 text-white text-lg">
              J'ai construit des maisons, des châteaux, des fermes, des manoirs
              et des tonnes d'autres choses. Ça a toujours été mon jeu vidéo
              préféré.
            </p>
            <div className="mt-6 max-w-[450px] hover:scale-105 ease-in duration-300 w-full h-auto m-auto">
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
            <p className=" text-white text-lg">
              Un jour, mon Père a acheté des Arduino. Ce sont des petites cartes
              que l'on peut programmer et lier avec tout et n'importe quoi. Je
              me suis bien amusé avec.
            </p>
            <p className="mt-5 text-white text-lg">
              Je me débrouillais pas mal, même si je ne faisais que
              copier-coller du code trouvé sur internet. J'avais même commencé à
              faire ma propre voiture télécommandée.
            </p>
            <div className="mt-6 max-w-[450px] hover:scale-105 ease-in duration-300 w-full h-auto m-auto">
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
        <div className="max-w-[1325px] m-auto">
          <h2 className="text-center mt-48 my-2 max-w-[750px] xl:max-w-[825px] m-auto">
            Le 27 juillet 2021, j'ai eu le malheur de tomber dans l'univers des
            crypto-monnaies
          </h2>
          <p className="sm:mx-10 my-2 md:text-center py-3 p-4">
            Normalement, il n'y a rien de grave. Mais le problème, c'est que
            j'ai fait n'importe quoi… 🤦‍♂️
          </p>
          <p className="sm:mx-10 my-2 p-4 ">
            J'ai acheté des cryptos qui n'avaient aucun sens, j'ai joué au
            trader alors que je n'y connaissais strictement rien, et j'ai perdu
            des sommes pas possibles rien qu'en frais de transaction. Bref, j'ai
            réussi à faire disparaître tout mon argent sans rien voir venir !
          </p>
          <p className="sm:mx-10 my-2 p-4">
            Heureusement, j'ai eu la chance de ne pas avoir abandonné et je m'y
            suis remis 3 mois plus tard. C'est à partir de là que j'ai vraiment
            commencé à comprendre l'écosystème et à m'intéresser à tout l'aspect
            technologique derrière la blockchain.
          </p>
          <h2 className="text-center mt-36 my-2 max-w-[800px] xl:max-w-[830px] m-auto">
            Mais comme je n'ai pas gagné plus d'argent, j'ai continué de
            rechercher un moyen d'en faire
          </h2>
          <p className="sm:mx-10 my-2 text-justify p-4 ">
            C'est alors que vers mi-février 2022, j'ai participé{" "}
            <span>
              <a
                href="https://www.youtube.com/watch?v=nb471gm5Xeg"
                className="cursor-pointer text-blue-700 underline"
              >
                au projet Arduino
              </a>
            </span>{" "}
            que ma grande soeur devait faire pour son école d'ingénieur. C'est à ce moment-là que j'ai remarqué que j'aimais beaucoup programmer, et que je me débrouillais assez bien en plus ! Il a été élu meilleur projet de la promotion par le jury.
          </p>
          <p className="sm:mx-10 my-2 text-justify p-4 ">
            Peu de temps avant, j’ai entendu parler du métier de développeur
            Solidity. Le langage de programmation pour créer des smart-contracts
            et interagir avec la blockchain. Alors, je me suis rendu compte que
            ça mêlait justement deux choses que j’aimais particulièrement bien :
            la programmation et la blockchain.
          </p>

          <h2 className="text-center mt-20 mb-32 max-w-[470px] xl:max-w-[650px] m-auto">
            J'avais donc un nouvel objectif :{" "}
            <span className="underline">Devenir développeur Solidity</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
