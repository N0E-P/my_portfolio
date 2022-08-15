import Image from "next/image";
import { AiFillYoutube, AiOutlineGithub } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { GiCutDiamond } from "react-icons/gi";

export default function Projects() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1>Projet #5 : Formation 32H solidity</h1>
          <p className="py-2 text-gray-700">ceci est un texte</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={"/../public/projets/solidity-javascript.jpg"}
            width="1920px"
            height="1080px"
            alt="/"
          />
          <Image
            className="rounded-xl"
            src={"/../public/projets/NFTs.png"}
            width="1462px"
            height="423px"
            alt="/"
          />
          <a
            href="https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=85023s"
            className=" flex p-2 cursor-pointer hover:text-blue-700"
          >
            <AiFillYoutube size={50} />
            <p className="px-3 py-3 ">Le tutoriel vidéo</p>
          </a>
          <a
            href="https://github.com/N0E-P/solidity-with-javascript-fcc-tutorial/"
            className=" flex p-2 cursor-pointer hover:text-blue-700"
          >
            <AiOutlineGithub size={50} />
            <p className="px-3 py-3 ">Mon code sur Github</p>
          </a>
          <a
            href="https://github.com/smartcontractkit/full-blockchain-solidity-course-js#table-of-contents"
            className=" flex p-2 cursor-pointer hover:text-blue-700"
          >
            <BsBook size={50} />
            <p className="px-3 py-3 ">Tout ce que j'ai appris dans ce cours</p>
          </a>
          <a
            href="https://stratosnft.io/0x7b1A2195862985203AEE71132AcDebBa22557D37"
            className=" flex p-2 cursor-pointer hover:text-blue-700"
          >
            <GiCutDiamond size={50} />
            <p className="px-3 py-3 ">Mes NFTs</p>
          </a>
        </div>
      </div>
    </div>
  );
}
