import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";

export default function Projects() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1>Projet #6 : Portfolio</h1>
          <p className="py-2 text-gray-700">ceci est un texte</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={""}
            width="1000px"
            height="1000px"
            alt="/"
          />
          <a
            href="https://github.com/N0E-P/my_portfolio"
            className=" flex p-2 cursor-pointer hover:text-blue-700"
          >
            <AiOutlineGithub size={50} />
            <p className="px-3 py-3 ">Mon code sur Github</p>
          </a>
        </div>
      </div>
    </div>
  );
}
