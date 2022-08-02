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
            J'ai 18 ans, je travaille dessus en parrallèle de mes études. Mais
            je compte bien m'y mettre à plein temps. J’ai réaliser mon portfolio
            pour montrer et raconter comment est-ce-que je me suis lancé la
            dedans, qu’est-ce-que j’ai déjà construit comme projets et qu’est ce
            que je sais utiliser comme outils. / que j'ai appris en parrallèle
            de mes études
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
            <a href="mailto:&#112;&#101;&#099;&#099;&#105;&#046;&#110;&#111;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail size={25} />
              </div>
            </a>
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

/*
https://github.com/N0E-P/
linkedin.com
@N0E_P
pecci.noe@gmail.com
*/
