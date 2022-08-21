import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";

export default function Projects() {
  return (
    <div className="w-full py-10 p-6 items-center  mt-12">
      <div className="max-w-[1400px] m-auto gap-8 bg-red-200 rounded-3xl p-8 shadow-lg shadow-gray-400">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Projet #4 : J'ai réalisé mon rêve de gosse
        </h1>
        <div className="lg:grid grid-cols-3 p-3 mt-5">
          <div className="col-span-2">
            <p className="py-2 text-gray-700">TEXT</p>
          </div>
          <div className="p-8">
            <div className="w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
              <iframe
                className="rounded-xl"
                src="https://www.youtube.com/embed/4BGRAA7IIhA"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
                width="200px"
                height="114px"
              />
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
