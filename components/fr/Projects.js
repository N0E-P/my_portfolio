import Image from "next/image";

export default function Projects() {
  return (
    <div id="projets">
      <div className="w-full md:h-screen p-2 flex items-center py-36">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h1>
              Comment et pourquoi est-ce-que je me suis mis à la programmation
            </h1>
            <p className="py-2 text-gray-700">ceci est un texte</p>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
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
      <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h1>Projet #1 : 16H de Solidity</h1>
            <p className="py-2 text-gray-700">ceci est un texte</p>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              className="rounded-xl"
              src={"/../public/projets/solidity-python.jpg"}
              width="1920px"
              height="1080px"
              alt="/"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h1>Projet #2 : mes NFTs débiles</h1>
            <p className="py-2 text-gray-700">ceci est un texte</p>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              className="rounded-xl"
              src={"/../public/projets/kevin.png"}
              width="2000px"
              height="2000px"
              alt="/"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h1>Projet #3 : NFT Detector</h1>
            <p className="py-2 text-gray-700">ceci est un texte</p>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              className="rounded-xl"
              src={"/../public/projets/NFTDetector.png"}
              width="3000px"
              height="2000px"
              alt="/"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h1>Projet #4 : Voiture RC</h1>
            <p className="py-2 text-gray-700">ceci est un texte</p>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <img className="rounded-xl" src={""} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h1>Projet #5 : Formation 32H solidity</h1>
            <p className="py-2 text-gray-700">ceci est un texte</p>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              className="rounded-xl"
              src={"/../public/projets/solidity-javascript.jpg"}
              width="1920px"
              height="1080px"
              alt="/"
            />
            <Image
              className="rounded-xl"
              src={"/../public/projets/NFTs-Solidity-course-JS.png"}
              width="1462px"
              height="423px"
              alt="/"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h1>Projet #6 : Portfolio</h1>
            <p className="py-2 text-gray-700">ceci est un texte</p>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <img className="rounded-xl" src={""} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
