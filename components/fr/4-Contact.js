import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTelegram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full h-full p-2 flex items-center py-10 ">
      <div className="max-w-[500px] pt-16 m-auto items-center gap-8">
        <div
          id="contact"
          className="bg-blue-200 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-2xl items-center justify-center p-5 grid grid-cols-1 "
        >
          <img
            className="rounded-3xl hover:scale-105 ease-in duration-300"
            src={"me/profile-photo.jpg"}
            width="500px"
            height="500px"
            alt="/"
          />
          <h2 className="py-4 text-center mt-2 ">Contactez-moi !</h2>
          <p className="py-2 text-gray-700 mb-3">
            conclusion : maintenant j'ai appris a faire beaucoup de choses Je
            suis pret a travailler et a apprendre en entreprise pour développer
            mes connaissances et (apporter qqch a l’entreprise / etre
            benefique); résumé de tout ce que je sais faire en gros coder des
            smart contract, faire des dapps… = embauchez moi. Je suis disponible
            pour une simple mission en freelance ou pour du temps plein.
            Contactez moi pour en parler ! J'adorerais travailler pour une
            entreprise (et en faire mon métier) N'hésitez pas a venir m'en
            parler si vous etes intéressés (Attention, dans mon Telegram, il y a
            un "0" (zero) et pas un "o" (la lettre) à "N0E_P")
          </p>
          <div className="bg-[#ecf0f3] rounded-full grid grid-cols-5 w-[250px] m-auto shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
            <AiOutlineMail size={25} />
            <a href="mailto:&#112;&#101;&#099;&#099;&#105;&#046;&#110;&#111;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
              &#112;&#101;&#099;&#099;&#105;&#046;&#110;&#111;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
            </a>
          </div>
          <div className="py-4 items-center justify-between flex w-[90%] m-auto ">
            <a href="https://www.linkedin.com/in/no%C3%A9-pecci-3a8a49248/">
              <div className="bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn size={25} />
              </div>
            </a>
            <div className="bg-[#ecf0f3] rounded-full grid grid-cols-3 w-[150px] shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaTelegram size={25} />
              <a href="https://t.me/&#064;&#078;&#048;&#069;&#095;&#080;">
                &#064;&#078;&#048;&#069;&#095;&#080;
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
