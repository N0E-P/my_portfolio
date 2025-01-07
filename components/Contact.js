import { AiOutlineMail } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { RiTelegram2Line } from "react-icons/ri";

export default function Contact() {
	return (
		<div className="w-full flex mb-8 p-8 pt-0 lg:pt-4 items-center justify-center">
			<div
				id="contact"
				className="bg-blue-200 max-w-[500px] shadow-lg shadow-gray-400 rounded-3xl items-center justify-center p-5 grid grid-cols-1 "
			>
				<img
					className="rounded-3xl"
					src={"/profile-photo.jpg"}
					width="500px"
					height="500px"
					alt="/"
				/>
				<h2 className="py-2 sm:py-4 text-center text-3xl sm:text-4xl">Don't hesitate!</h2>
				<p className="pt-2 text-gray-700 xl:text-lg text-center">
					I'm open for business, friends, networking, training partners, and of course to
					do some cool stuff.
				</p>
				<p className="pb-2 text-gray-700 xl:text-lg text-center mt-4">
					Contact me now, I'll answer you! 😊
				</p>
				<div className="py-4 items-center justify-between flex w-[90%] m-auto ">
					<a href="https://t.me/&#110;&#111;&#101;&#095;&#112;&#101;&#099;&#099;&#105;">
						<div className="bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
							<RiTelegram2Line size={25} />
						</div>
					</a>
					<a
						className="hidden sm:flex"
						href="mailto:&#112;&#101;&#099;&#099;&#105;&#046;&#110;&#111;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
					>
						<div className="bg-[#ecf0f3] flex rounded-full w-[250px] m-auto shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
							<AiOutlineMail size={25} />
							<p className="pl-2 xl:text-lg">
								&#112;&#101;&#099;&#099;&#105;&#046;&#110;&#111;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
							</p>
						</div>
					</a>
					<a
						className="sm:hidden"
						href="mailto:&#112;&#101;&#099;&#099;&#105;&#046;&#110;&#111;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
					>
						<div className="bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
							<AiOutlineMail size={25} />
						</div>
					</a>
					<a href="https://x.com/noe_pecci">
						<div className=" bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
							<FaXTwitter size={25} />
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
