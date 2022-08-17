import { useState, useEffect } from "react";
import Link from "next/link";
import { HiChevronDoubleDown } from "react-icons/hi";

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
    <div className="w-full py-14 text-center h-screen max-w-[1240px] mx-auto p-2 justify-center">
      <h1 className="py-4 text-gray-800 ">
        Bien le bonjour, je suis <span className="text-blue-700">Noé</span>
      </h1>
      <h1 className="py-3 text-gray-800 ">Développeur junior en Solidity</h1>
      <div className=" py-4 text-lg ">
        <p className="py-2 text-gray-700 ">
          J’ai fais ce portfolio pour présenter :
        </p>
        <p className=" px-2 text-blue-700 ">{changingText}</p>
      </div>
      <div className="flex justify-center py-36">
        <Link href="/#presentation">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiChevronDoubleDown className="text-blue-700" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
}
