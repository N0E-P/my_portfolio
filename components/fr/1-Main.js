import { useState, useEffect } from "react";
import { HiChevronDoubleDown } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export default function Main() {
  const [changingText, changeText] = useState(
    "Mes aventures tourmentées dans les cryptos."
  );
  var words = [
    "La raison pour laquelle je deviens développeur alors que je suis en fac de sport.", // ...je me retrouve...
    "Les projets que j'ai conçu, avec toutes les galères que j'ai traversé.",
    "Toutes mes compétences en programmation.",
    "Mes aventures tourmentées dans les cryptos.",
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
    <div>
      <div className="flex justify-between items-center h-full">
        <Link href="/">
          <img
            className=" bg-blue-100 rounded-full m-2 sm:m-5 shadow-lg shadow-gray-400 p-1 hover:scale-105 ease-in duration-300"
            src={"me/profile-photo.jpg"}
            alt="Noé Pecci"
            width="200"
            height="200"
          />
        </Link>
        <div className="sm:flex ">
          <Link href="/#contact">
            <div className="bg-blue-100 m-3 justify-center hidden sm:flex rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiOutlineMail size={50} className="pl-2" />
              <p className="pl-3 py-2 font-bold text-2xl hidden lg:flex">
                Contactez-moi !
              </p>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500">
                <span class="relative animate-ping inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </div>
          </Link>
          <Link href="/">
            <img
              className="m-4 rounded-xl hover:scale-110 ease-in duration-300 cursor-pointer ml-5"
              src={"flags/fr.png"}
              alt="Français"
              width="100"
              height="75"
            />
          </Link>
          <Link href="/en">
            <img
              className="m-4 sm:mr-8 rounded-xl hover:scale-110 ease-in duration-300 cursor-pointer "
              src={"flags/en.png"}
              alt="English"
              width="110"
              height="75"
            />
          </Link>
        </div>
      </div>
      <div className="w-full mt-5 sm:mt-20 text-center h-screen max-w-[1240px] mx-auto p-2 justify-center">
        <h1 className="py-4 text-gray-800">
          Bien le bonjour, je suis <span className="text-blue-700">Noé</span>
        </h1>
        <h1 className="py-3 text-gray-800 ">Développeur junior en Solidity & Javascript</h1>
        <div className=" py-4 text-lg ">
          <p className="py-2 text-gray-700 sm:text-xl md:text-2xl">
            J’ai fais ce portfolio pour présenter :
          </p>
          <p className=" px-2 text-blue-700 sm:text-xl md:text-2xl">
            {changingText}
          </p>
        </div>
        <div className="flex justify-center mt-20">
          <Link href="/#presentation">
            <div className="animate-bounce rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer">
              <HiChevronDoubleDown className="text-blue-700" size={36} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
