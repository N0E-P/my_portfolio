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
        <div className="sm:mx-10 my-2 mt-10 text-justify p-4 text-sm sm:text-xl">
          Fin juillet 2021, j'ai commencé à m'intéresser aux crypto-monnaies.
          (Ce qui jusque-là, est une très bonne idée.){" "}
          <div>Le problème, c'est que j'ai fais n'importe quoi… 🤦‍♂️</div>
        </div>
        <p className="sm:mx-10  my-2 text-justify p-4 text-sm sm:text-xl">
          Pour faire simple, on m'a fait la promotion d'une petite
          crypto-monnaie qui avait déjà fait × 50. Et n'y connaissant rien, je
          pensais qu'elle pouvait monter encore plus haut. Sauf que pas du tout,
          elle s'est lamentablement écrasée parce c'était un pump and dump. Et
          c'est comme ça que j'ai réussi à perdre tout mon argent sans rien voir
          venir ! Bravo Noé !
        </p>
        <p className="sm:mx-10 my-2 text-justify p-4 text-sm sm:text-xl">
          Heureusement, j'ai eu la chance de ne pas avoir abandonné et de m'y
          être ré-intéressé 3 mois plus tard. Et à partir de là, j'ai vraiment
          commencé à comprendre l'écosystème et tout l'aspect technologique
          derrière la blockchain.
        </p>
        <p className="sm:mx-10 my-2 text-justify p-4 text-sm sm:text-xl">
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
        <p className="sm:mx-10 my-2 text-justify p-4 text-sm sm:text-xl">
          En parallèle, j’ai entendu parler du métier de développeur solidity.
          Alors, je me suis rendu compte que ça mêlait 2 choses que j’aimais
          particulièrement bien : la programmation, et la blockchain.  Donc
          pourquoi pas essayer d'apprendre à programmer en Solidity...
        </p>
      </div>
    </div>
  );
}
