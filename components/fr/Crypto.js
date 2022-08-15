import Image from "next/image";
import { AiOutlineLink } from "react-icons/ai";

export default function Crypto() {
  return (
    <div id="crypto" className="w-full md:h-screen p-2 flex items-center py-36">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1>Mon début chaotique dans les cryptos</h1>
          <p className="py-2 text-gray-700">ceci est un texte</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={"/../public/projets/Checoin-fr.png"}
            width="940px"
            height="900px"
            alt="/"
          />
          <a
            href="https://poocoin.app/tokens/0x54626300818e5c5b44db0fcf45ba4943ca89a9e2"
            className="rounded-xl flex p-2 cursor-pointer hover:text-blue-700"
          >
            <AiOutlineLink size={50} />
            <p className="px-3 py-3">
              PS : Je possède toujours mon million de Checoin, et j'en suis fier
              💪
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
