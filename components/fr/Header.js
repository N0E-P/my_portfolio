import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTelegram } from "react-icons/fa";

export default function Header() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      id="header"
      className={
        shadow
          ? " fixed bg-[#ecf0f3] w-full h20 shadow-xl z-[100]"
          : " fixed bg-[#ecf0f3] w-full h20 z-[100]"
      }
    >
      <div className="py-2 flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <img
            className=" rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-105 ease-in duration-300"
            src={"me/profile-photo.jpg"}
            alt="Noé Pecci"
            width="120"
            height="120"
          />
        </Link>
        <div>
          <ul className="hidden lg:flex">
            <Link href="/">
              <li className="ml-9 text-m uppercase hover:border-b">
                Présentation
              </li>
            </Link>
            <Link href="/#crypto">
              <li className="ml-8 text-m uppercase hover:border-b">Crypto</li>
            </Link>
            <Link href="/#projets">
              <li className="ml-8 text-m uppercase hover:border-b">Projets</li>
            </Link>
            <Link href="/#outils">
              <li className="ml-8 text-m uppercase hover:border-b">Outils</li>
            </Link>
            <Link href="/#conclusion">
              <li className="ml-8 text-m uppercase hover:border-b ">
                Conclusion
              </li>
            </Link>
            <Link href="/">
              <img
                className="ml-10 rounded-xl hover:scale-105 ease-in duration-300"
                src={"flags/fr.png"}
                alt="Français"
                width="50"
                height="33"
              ></img>
            </Link>
            <Link href="/en">
              <img
                className="ml-6 rounded-xl hover:scale-105 ease-in duration-300"
                src={"flags/en.png"}
                alt="English"
                width="50"
                height="33"
              ></img>
            </Link>
          </ul>
          <div onClick={handleNav} className="lg:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <img
                  className=" rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-105 ease-in duration-300"
                  src={"me/profile-photo.jpg"}
                  alt="Profile Photo"
                  width="100"
                  height="100"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Noé Pecci - Développeur Solidity
              </p>
            </div>
          </div>
          <div className="py-3 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-3 text-sm ">
                  Présentation
                </li>
              </Link>
              <Link href="/#crypto">
                <li onClick={() => setNav(false)} className="py-3 text-sm">
                  Crypto
                </li>
              </Link>
              <Link href="/#projets">
                <li onClick={() => setNav(false)} className="py-3 text-sm">
                  Projets
                </li>
              </Link>
              <Link href="/#outils">
                <li onClick={() => setNav(false)} className="py-3 text-sm">
                  Outils
                </li>
              </Link>
              <Link href="/#conclusion">
                <li onClick={() => setNav(false)} className="py-3 text-sm">
                  Conclusion
                </li>
              </Link>
            </ul>
            <div className="pt-8">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Langues
              </p>
              <div className="flex items-center my-4 w-full sm:w-[80%]">
                <Link href="/">
                  <img
                    onClick={() => setNav(false)}
                    className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-105 ease-in duration-300"
                    src={"flags/fr.png"}
                    alt="Français"
                    width="50"
                    height="33"
                  ></img>
                </Link>
                <Link href="/en">
                  <img
                    className="last:rounded-full ml-3 shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-105 ease-in duration-300"
                    src={"flags/en.jpg"}
                    alt="English"
                    width="50"
                    height="33"
                  ></img>
                </Link>
              </div>
            </div>
            <div className="pt-6">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Mes réseaux
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[90%]">
                <a href="https://www.linkedin.com/in/no%C3%A9-pecci-3a8a49248/">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn size={20} />
                  </div>
                </a>
                <a href="https://github.com/N0E-P/">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub size={20} />
                  </div>
                </a>
                <a href="mailto:&#112;&#101;&#099;&#099;&#105;&#046;&#110;&#111;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail size={20} />
                  </div>
                </a>
                <div className="rounded-full grid grid-cols-4 max-w-[125px] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaTelegram size={20} />
                  <a href="https://t.me/&#064;&#078;&#048;&#069;&#095;&#080;">
                    &#064;&#078;&#048;&#069;&#095;&#080;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
