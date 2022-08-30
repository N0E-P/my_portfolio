import { AiFillYoutube, AiOutlineGithub } from "react-icons/ai";

export default function Projects() {
  return (
    <div className="w-full py-10 p-6 items-center mt-12 ">
      <div className="max-w-[1400px] m-auto gap-8 bg-orange-200 rounded-3xl p-8 shadow-lg shadow-gray-400">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Projet #2 : Mes NFTs complètement débiles
        </h1>
        <div className="lg:grid grid-cols-3 p-3 mt-5">
          <div className="col-span-2  lg:mr-6">
            <p className="py-2 text-gray-700 sm:text-xl text-justify">Attention, je préviens qu'aucune critique sur mon humour nul, ni mon talent d'artiste ratté n'est autorisée ! (En vrai c'est un désastre mais ça m'a fait marré donc c'est pas grave.)

Mi-avril,

9 avril commencé
</p>
<p className="py-2 text-gray-700 sm:text-xl text-justify">
15 Avril j’ai suivi la formation 1H pour lancer ses nfts, et j’ai fait ma propre collection mettre lien de ma vidéo qui la montre avec DAPP Créer les 2500 NFTs pour qu’ils s’affichent tous sur opensea Appris a personnaliser front end et back end sur un fork d’un projet déjà fait, et créer une collection d’Nfts en supperposant des images pour en créer autant que je veux, et a les envoyer (avec leur metadata) sur IPFS pour qu’elles soient le plus decentralisé possible. Par contre, j’ai toujours pas appris a dessiner. Donc il ne faut vraiment pas essayer m’engager en temps de designer, ça va être un désastre. Je ne suis bon qu’en programmation moi.

dates avec mes videos yt dessus

10 avril fini ?

27 avril fini ? mais en meme temps fini le tuto de patrick a ce moment la ? Je crois que je me suis remis a taffer le 27 avril en fait, et que j'avais pas fini le tuto de patrick avant.

</p>
          </div>
          <div className="sm:p-4">
            <div className="w-full mt-3 bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
              <div class="aspect-w-16 aspect-h-9">
                <iframe
                  className="rounded-xl"
                  src="https://www.youtube.com/embed/u4aM2DMDH20"
                  frameborder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowfullscreen
                  title="video"
                />
              </div>
              <a
                href="https://www.youtube.com/watch?v=cLB7u0KQFIs"
                className=" flex p-2 cursor-pointer hover:text-blue-700"
              >
                <AiFillYoutube size={50} />
                <p className="px-3 py-3 ">Le tutoriel vidéo</p>
              </a>
              <a
                href="https://github.com/N0E-P/Kevin-s-Holidays"
                className=" flex p-2 cursor-pointer hover:text-blue-700"
              >
                <AiOutlineGithub size={50} />
                <p className="px-3 py-3 ">Mon code sur Github</p>
              </a>
              <a
                href="https://testnets.opensea.io/collection/kevins-holidays"
                className=" flex p-2 cursor-pointer hover:text-blue-700"
              >
                <img
                  src={"projets/opensea.png"}
                  width="50px"
                  height="50px"
                  alt="/"
                />
                <p className="px-3 py-3 ">La page Opensea des NFT</p>
              </a>
              <a
                href="https://superb-zuccutto-9f46e1.netlify.app/"
                className=" flex p-2 cursor-pointer hover:text-blue-700"
              >
                <img
                  src={"projets/kevin-logo.png"}
                  width="50px"
                  height="50px"
                  alt="/"
                />
                <p className="px-3 py-3 ">La dapp des NFT</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
