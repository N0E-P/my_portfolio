import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";

export default function Header() {
  return (
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
  );
}
