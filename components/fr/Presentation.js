import { FaLinkedinIn, FaGithub, FaTelegram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Presentation() {
  const [changingText, changeText] = useState(
    "Mes aventures tourmentées dans la blockchain."
  );
  var words = [
    "La raison pour laquelle je me retrouve développeur alors que je suis en fac de sport.",
    "Les projets que j'ai conçu, avec toutes les galères que j'ai traversé.",
    "Mes compétences de développeur.",
    "Mes aventures tourmentées dans la blockchain.",
  ];
  var number = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      changeText(words[number]);
      if (number < 3) {
        number = number + 1;
      } else {
        number = 0;
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="presentation" className="w-full text-center h-screen">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-800">
            Bien le bonjour, je suis <span className="text-blue-700">Noé</span>
          </h1>
          <h1 className="py-3 text-gray-800">Développeur junior en Solidity</h1>
          <div className=" py-2 ">
            <p className="py-1 text-gray-700">
              J’ai fais ce portfolio pour présenter :
            </p>
            <p className=" px-2 text-blue-700">{changingText}</p>
          </div>
          <div className="py-3 flex items-center justify-between max-w-[400px] m-auto ">
            <a href="https://www.linkedin.com/in/no%C3%A9-pecci-3a8a49248/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn size={25} />
              </div>
            </a>
            <a href="https://github.com/N0E-P/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub size={25} />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail size={25} />
              </div>
            </Link>
            <Link href="/#contact">
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
