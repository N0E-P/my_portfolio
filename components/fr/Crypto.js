export default function Crypto() {
  return (
    <div id="crypto" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1>Mon début chaotique dans les cryptos</h1>
          <p className="py-2 text-gray-700">
            Fin juillet 2021, alors que je m'ennuyais profondément en plein
            millieux de mes vacances :
          </p>
          <p className="py-2 text-gray-700">
            J'ai eu l'excellente idée de commencer à m'intéresser à la
            blockchain... en passant par l'univers fantastique des shitcoins.
            Donc pour faire très simple, j'ai vu une opportunité de faire de
            l'argent. Et j'ai réussi à perdre $200 d'un coup sans rien voir
            venir ! 🤦‍♂️
          </p>
          <p className="py-2 text-gray-700">
            Heureusement, j'ai eu la chance de ne pas avoir abandonné et de m'y
            être ré-intéressé 3 mois plus tard, début novembre. Et à partir de
            là, j'ai vraiment commencé à comprendre l'écosystème et tout
            l'aspect technologique derrière la blockchain.
          </p>
          <p className="py-2 text-gray-700">
            Mais bien sur, ça aurait été trop simple si ça n'avait pas été pile
            au moment du début du bearmarket... Donc malgré que j'ai appris
            [énormément de choses / à me servir de tout sur l'écosystème /
            découvert monde defi / m'y connaitre vraiment]. Avec tout les
            investissements foireux que j'ai fais, j'ai atteint un bon total de
            plus de $1000 de pertes. (Sachant que j'étais étudiant, et que tout
            venais de mes économies.)
          </p>
          <p className="py-2 text-gray-700">
            Bref, tout ça m'a fais comprendre que j'adorais l'univers de la
            defi. Mais que je n'étais pas forcément fait pour l'investissement,
            et qu'il allait faloir trouver un autre moyen de faire de
            l'argent...
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src={"me/crypto.jpeg"} alt="crypto" />
        </div>
      </div>
    </div>
  );
}
