import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";

export default function Projects() {
  return (
    <div className="w-full py-10 p-6 items-center mt-12 ">
      <div className="max-w-[1400px] m-auto gap-8 bg-green-200 rounded-3xl p-8 shadow-lg shadow-gray-400">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Projet #6 : Portfolio
        </h1>
        <div className="lg:grid grid-cols-3 p-3 mt-5">
          <div className="col-span-2  lg:mr-6">
            <p className="py-2 text-gray-700 sm:text-xl text-justify">TEXT</p>
          </div>
          <div className="sm:p-4">
            <div className="w-full mt-3 bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-3 hover:scale-105 ease-in duration-300">
              <Image
                src={"/../public/projets/portfolio.png"}
                width="1891px"
                height="973px"
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
      </div>
    </div>
  );
}
