import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTelegram } from "react-icons/fa";

export default function Conclusion() {
  return (
    <div
      id="conclusion"
      className="w-full md:h-screen p-2 flex items-center py-32"
    >
      <div className="max-w-[1240px] py-16 m-auto lg:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1>Conclusion</h1>
          <p className="py-2 text-gray-700">ceci est un texte</p>
        </div>
        <div
          id="contact"
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl items-center justify-center p-5 grid grid-cols-1 "
        >
          <Image
            className="rounded-xl"
            src={""}
            width="1000px"
            height="1000px"
            alt="/"
          />
          <h2 className="py-4 text-center">Contactez-moi !</h2>
          <div className=" rounded-full grid grid-cols-5 w-[250px] m-auto shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
            <AiOutlineMail size={25} />
            <a href="mailto:&#112;&#101;&#099;&#099;&#105;&#046;&#110;&#111;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
              &#112;&#101;&#099;&#099;&#105;&#046;&#110;&#111;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
            </a>
          </div>
          <div className="py-4 items-center justify-between flex w-[90%] m-auto ">
            <a href="https://www.linkedin.com/in/no%C3%A9-pecci-3a8a49248/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn size={25} />
              </div>
            </a>
            <div className="rounded-full grid grid-cols-3 w-[150px] shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaTelegram size={25} />
              <a href="https://t.me/&#064;&#078;&#048;&#069;&#095;&#080;">
                &#064;&#078;&#048;&#069;&#095;&#080;
              </a>
            </div>
            <a href="https://github.com/N0E-P/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub size={25} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
