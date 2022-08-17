import Image from "next/image";
import { AiFillYoutube, AiOutlineGithub } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

export default function Projects() {
  return (
    <div className="w-full py-10 p-6 items-center ">
      <div className="max-w-[1400px] m-auto gap-8 bg-yellow-200 rounded-3xl p-8 shadow-lg shadow-gray-400">
        <h1 className="text-center">Projet #5 : Patrick est de retour !</h1>
        <div className="md:grid grid-cols-3 p-6">
          <div className="col-span-2">
            <p className="py-2 text-gray-700">TEXT</p>
          </div>
          <div className="p-8">
            <div className="w-full bg-[#ecf0f3] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
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
                <p className="px-3 py-3 ">Tout ce que j'ai appris</p>
              </a>
              <a
                href="https://stratosnft.io/0x7b1A2195862985203AEE71132AcDebBa22557D37"
                className=" flex p-2 cursor-pointer hover:text-blue-700"
              >
                <Image
                  src={"/../public/projets/nft-logo.png"}
                  width="50px"
                  height="50px"
                  alt="/"
                />
                <p className="px-3 py-3 ">Mes NFTs</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
