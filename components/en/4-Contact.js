import { AiOutlineMail, AiOutlineWarning } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTelegram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full h-full p-2 flex items-center pt-10 pb-6 ">
      <div className="max-w-[500px] pt-16 m-auto items-center gap-8">
        <div
          id="contact"
          className="bg-blue-200 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-3xl items-center justify-center p-5 pb-1 grid grid-cols-1 "
        >
          <img
            className="rounded-3xl hover:scale-105 ease-in duration-300"
            src={"me/profile-photo.jpg"}
            width="500px"
            height="500px"
            alt="/"
          />
          <h2 className="py-2 sm:py-4 text-center mt-2 text-3xl sm:text-4xl">
            Contact me!
          </h2>
          <p className="pt-2 text-gray-700 xl:text-lg">
            I am available for a freelance mission or to work full time.
          </p>
          <p className="py-3 text-gray-700 xl:text-lg">
            Of course, I plan to keep learning, to improve my skills over time.
          </p>
          <p className="pb-2 text-gray-700 xl:text-lg">
            Do not hesitate to contact me! 😊
          </p>
          <div className="bg-[#ecf0f3] mt-3 rounded-full grid grid-cols-5 w-[250px] m-auto shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
            <AiOutlineMail size={25} />
            <a href="mailto:&#112;&#101;&#099;&#099;&#105;&#046;&#110;&#111;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
              &#112;&#101;&#099;&#099;&#105;&#046;&#110;&#111;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
            </a>
          </div>
          <div className="py-4 items-center justify-between flex w-[90%] m-auto ">
            <a href="https://www.linkedin.com/in/no%C3%A9-pecci/">
              <div className="bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn size={25} />
              </div>
            </a>
            <div className="bg-[#ecf0f3] rounded-full grid grid-cols-3 w-[150px] shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaTelegram size={25} />
              <a href="https://t.me/&#110;&#111;&#101;&#095;&#112;&#101;&#099;&#099;&#105;">
                &#110;&#111;&#101;&#095;&#112;&#101;&#099;&#099;&#105;
              </a>
            </div>
            <a href="https://github.com/N0E-P/">
              <div className=" bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub size={25} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
