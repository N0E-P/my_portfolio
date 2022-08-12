import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTelegram } from "react-icons/fa";
import Link from "next/link";

export default function Presentation() {
  return (
    <div id="presentation" className="w-full text-center h-screen">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-800">
            Bien le bonjour, je suis <span className="text-[#5651e5]">Noé</span>
          </h1>
          <h1 className="py-3 text-gray-800">Développeur junior en Solidity</h1>
          <p className="py-4 text-gray-700 max-w-[70%] m-auto">
            ceci est un texte
          </p>
          <div className="flex items-center justify-between max-w-[400px] m-auto ">
            <a href="https://www.linkedin.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn size={25} />
              </div>
            </a>
            <a href="https://github.com/N0E-P/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub size={25} />
              </div>
            </a>
            <Link href="/fr#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail size={25} />
              </div>
            </Link>
            <Link href="/fr#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTelegram size={25} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
