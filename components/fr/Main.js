import { useState, useEffect } from "react";
import { HiChevronDoubleDown } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

export default function Main() {
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
    <div>
      <div className="w-full h20 z-[100] py-4 flex justify-between items-center h-full px-2 2xl:px-16">
        <Link href="/">
          <img
            className=" bg-blue-100 rounded-full shadow-lg shadow-gray-400 p-1 hover:scale-105 ease-in duration-300"
            src={"me/profile-photo.jpg"}
            alt="Noé Pecci"
            width="170"
            height="170"
          />
        </Link>
        <div className="flex">
          <Link href="/#contact">
            <div className="bg-blue-100 rounded-full justify-center flex shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiOutlineMail size={45} className="px-1" />
              <p className="px-3 py-2 font-bold text-lg">Contactez-moi !</p>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500">
                <span class="relative animate-ping inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </div>
          </Link>
          <Link href="/">
            <img
              className="ml-16 rounded-xl hover:scale-110 ease-in duration-300 cursor-pointer "
              src={"flags/fr.png"}
              alt="Français"
              width="90"
            />
          </Link>
          <Link href="/en">
            <img
              className="ml-16 rounded-xl hover:scale-110 ease-in duration-300 cursor-pointer "
              src={"flags/en.png"}
              alt="English"
              width="90"
            ></img>
          </Link>
        </div>
      </div>
      <div className="w-full my-20 text-center h-screen max-w-[1240px] mx-auto p-2 justify-center">
        <h1 className="py-4 text-gray-800 ">
          Bien le bonjour, je suis <span className="text-blue-700">Noé</span>
        </h1>
        <h1 className="py-3 text-gray-800 ">Développeur junior en Solidity</h1>
        <div className=" py-4 text-lg ">
          <p className="py-2 text-gray-700 ">
            J’ai fais ce portfolio pour présenter :
          </p>
          <p className=" px-2 text-blue-700">{changingText}</p>
        </div>
        <div className="flex justify-center mt-20">
          <Link href="/#presentation">
            <div className="animate-bounce rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer">
              <HiChevronDoubleDown className="text-blue-700" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
