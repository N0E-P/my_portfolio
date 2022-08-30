import { AiOutlineGithub } from "react-icons/ai";

export default function Projects() {
  return (
    <div className="w-full py-10 p-6 items-center  mt-12">
      <div className="max-w-[1400px] m-auto gap-8 bg-red-200 rounded-3xl p-8 shadow-lg shadow-gray-400">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Projet #4 : J'ai réalisé mon rêve de gosse
        </h1>
        <div className="lg:grid grid-cols-3 p-3 mt-5">
          <div className="col-span-2  lg:mr-6">
            <p className="py-2 text-gray-700 sm:text-xl text-justify">

Quand j'étais petit, j'ai toujours voulu avoir une voiture télécommandée en Lego. Ca peut parraitre con, mais pour moi c'était le Saint Graal ! Sauf qu'évidemment, à l'époque, je n'avais pas de quoi en faire une, et j'avais aucune idée de comment m'y prendre.

</p><p className="py-2 text-gray-700 sm:text-xl text-justify">

Alors bien plus tard, aux vacances d'été 2020, j'ai décidé d'accomplir mon rêve, d'enfin faire ma voiture en Lego. Car désormais, même si je n'avais toujours aucune connaissances en modélisme, je savais faire des Lego, et je savais quand même mieux me débrouiller avec mes mains. J'ai commencé par tout le chassis et la carosserie, car pour moi c'était ce qu'il y avait de plus simple. Je voulais absolument repousser la partie programmation et assemblage de l'éléctronique.


</p><p className="py-2 text-gray-700 sm:text-xl text-justify">

Sauf qu'avec tout le temps passé à paufiner et perfectionner la partie en Lego, je me suis rendu compte qu'à la fin de l'été, je n'avais toujours pas fini la voiture. Et comme j'avais école toute l'année, je n'ai pas eu assé de temps pour continer, et j'ai abandonné ma voiture dans la poussière pendant un an.


</p><p className="py-2 text-gray-700 sm:text-xl text-justify">


Nous arrivons donc en 2021, et je n'avais toujours rien à faire pendant l'été. Donc je me suis dit que ça serais une très bonne idée d'enfin finir ma voiture radiocommandée. J'ai ainsi fais et organisé toute la partie Arduino, pour controler la voiture. Et j'ai fais les calculs et commandé toutes les pièces nécessaires pour la motoriser. Le moteur, le variateur, les piles, les supports de piles, etc... Mais je n'avais encore rien accroché hormis le servo-moteur, pour diriger les roues. Et encore, il ne marchais que quand il voulait... Par contre, j'ai pris le temps de construire une magnifique radiocommande en LEGO, dont je suis très fier ! Mais une fois de plus, pendant l'année, j'ai laissé ma voiture prendre la poussière, en me disant à chaque fois que je la finirais quand j'aurais le temps.

</p><p className="py-2 text-gray-700 sm:text-xl text-justify">

Ce qui nous ramène vers ..., juste après avoir fini mon projet NFT Detector. Et là j'avais du temps ! En plus, à ce moment là, j'avais envie construire quelque chose, mais vraiment quelque chose de physique et de concret. AU début je voulais faire quelque chose en rapport avec la blockchain, mais toute mes idées la dessus n'était pas terribles. Donc je me suis rappellé que j'avais un début de voiture radiocommandée qui trainait dans le fond de ma chambre. Et j'ai décidé de me remmettre a travailler dessus, pour enfin la finir.

</p><p className="py-2 text-gray-700 sm:text-xl text-justify">

J'ai réussi à faire toute la partie programmation très rapidement, car je me suis rendu compte qu'au final : A part tourner, accélérer et transmettre le signal à la voiture, il n'y avait rien de bien compliqué. Puis j'ai cherché pendant des heures le meilleur moyen d'accrocher mon moteur à la voiture, sans tout faire exploser. Parce que oui, j'ai choisis un moteur 40 fois trop puissant pour la voiture, donc a peine il démare, tout casse. Donc, après avoir enfin trouver un bon moyen d'accrocher la bête, et de régler tout les autres problèmes technique, j'ai ENFIN réussi à faire ma voiture radiocommandée en Lego !


</p><p className="py-2 text-gray-700 sm:text-xl text-justify">
Par contre, la liaison entre les Lego et le moteur était tellement foireuse, que mon moteur a réussi à faire fondre plusieurs fois les pignons du système de transmission. Donc je n'ai même pas pu essayer de la faire aller à fond. Mais ça n'est qu'un détail, parce que le plus important c'est qu'elle roule enfin, et que maintenant je peux jouer avec comme un gamin ! (Sauf quand je la crash et qu'il y a des Lego qui explosent partout parce que je ne sais pas la conduire, mais ça c'est autre chose...)


</p>
          </div>
          <div className="sm:p-4">
            <div className="w-full mt-3 bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
              <div class="aspect-w-16 aspect-h-9">
                <iframe
                  className="rounded-xl"
                  src="https://www.youtube.com/embed/4BGRAA7IIhA"
                  frameborder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowfullscreen
                  title="video"
                />
              </div>
              <a
                href="https://github.com/N0E-P/RC_Car"
                className=" flex p-2 cursor-pointer hover:text-blue-700"
              >
                <AiOutlineGithub size={50} />
                <p className="px-3 py-3 ">Mon code sur Github</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
