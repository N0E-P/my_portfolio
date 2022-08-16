import Image from "next/image";
import { SiArduino } from "react-icons/si";
import { AiFillYoutube } from "react-icons/ai";

export default function Projects() {
  return (
    <div
      id="projets"
      className="w-full md:h-screen p-2 flex items-center py-36"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1>
            Comment et pourquoi est-ce-que je me suis mis à la programmation
          </h1>
          <p className="py-2 text-gray-700">ceci est un texte</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
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
  );
}
