import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTelegram } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h20 shadow-xl z-[100]">
      <div className="py-2 flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/fr">
          <img
            className=" rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-105 ease-in duration-300"
            src={"me/profile-photo.jpg"}
            alt="Profile Photo"
            width="120"
            height="120"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/fr">
              <li className="ml-9 text-m uppercase hover:border-b">
                Présentation
              </li>
            </Link>
            <Link href="/fr">
              <li className="ml-8 text-m uppercase hover:border-b">Crypto</li>
            </Link>
            <Link href="/fr">
              <li className="ml-8 text-m uppercase hover:border-b">Projets</li>
            </Link>
            <Link href="/fr">
              <li className="ml-8 text-m uppercase hover:border-b">Outils</li>
            </Link>
            <Link href="/fr">
              <li className="ml-8 text-m uppercase hover:border-b ">Contact</li>
            </Link>
            <Link href="/fr">
              <img
                className="ml-10 rounded-xl hover:scale-105 ease-in duration-300"
                src={"flags/fr.png"}
                alt="Français"
                width="50"
                height="33"
              ></img>
            </Link>
            <Link href="/">
              <img
                className="ml-6 rounded-xl hover:scale-105 ease-in duration-300"
                src={"flags/en.png"}
                alt="English"
                width="50"
                height="33"
              ></img>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
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
              <Link href="/fr">
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
              <Link href="/fr">
                <li className="py-3 text-sm ">Présentation</li>
              </Link>
              <Link href="/fr">
                <li className="py-3 text-sm">Crypto</li>
              </Link>
              <Link href="/fr">
                <li className="py-3 text-sm">Projets</li>
              </Link>
              <Link href="/fr">
                <li className="py-3 text-sm">Outils</li>
              </Link>
              <Link href="/fr">
                <li className="py-3 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-8">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Langues
              </p>
              <div className="flex items-center my-4 w-full sm:w-[80%]">
                <Link href="/fr">
                  <img
                    className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-105 ease-in duration-300"
                    src={"flags/fr.png"}
                    alt="Français"
                    width="50"
                    height="33"
                  ></img>
                </Link>
                <Link href="/">
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
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaTelegram />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
