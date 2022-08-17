import Image from "next/image";
import { SiArduino } from "react-icons/si";
import { AiFillYoutube } from "react-icons/ai";

export default function Presentation() {
  return (
    <div id="presentation" className="w-full py-10 p-6 items-center ">
      <div className="max-w-[1400px] m-auto gap-8 bg-blue-200 rounded-3xl p-8 shadow-lg shadow-gray-400">
        <h1 className="text-center">C'est cool de créer des trucs</h1>
        <div className="md:grid grid-cols-3 p-6">
          <div className="col-span-2">
            <p className="py-2 text-gray-700">
              Depuis tout petit, j'ai toujours aimé construire.
            </p>
            <p className="py-2 text-gray-700">
              LEGO, Minecraft, Arduino, Crypto, Robot, Solidity
            </p>
          </div>
          <div className="p-8">
            <div className="w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
              <Image
                className="rounded-xl"
                src={"/../public/projets/lego.jpg"}
                width="2304px"
                height="3072px"
                alt="/"
              />
              <a
                href="https://www.arduino.cc/en/Guide/Introduction"
                className="rounded-xl flex p-2 cursor-pointer hover:text-blue-700"
              >
                <SiArduino size={50} />
                <p className="px-3 py-3 ">Qu'est-ce-qu'Arduino ?</p>
              </a>

              <a
                href="https://www.youtube.com/watch?v=nb471gm5Xeg"
                className="rounded-xl flex p-2 cursor-pointer hover:text-blue-700"
              >
                <AiFillYoutube size={50} />
                <p className="px-3 py-3 ">Vidéo du robot de ma Soeur</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
