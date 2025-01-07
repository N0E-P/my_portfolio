import Link from "next/link";

export default function Businesses() {
	return (
		<div className="w-full p-8 pt-4 lg:pt-8 items-center">
			<div className="max-w-[1000px] m-auto p-8 bg-red-200 rounded-3xl shadow-lg shadow-gray-400 mb-10">
				<h1 className="pb-5">My first investment</h1>
				<p className="py-2 text-gray-700 ">
					In November 2021, I've stupidly bought the top of the crypto market. But I
					didn't give up, waited patiently 1,5 years to learn trading and understand
					market cycles. Then bought back Bitcoin at 24k. Now I have multiplied my initial
					investment, and took the opportunity to bought dips to make greater profits
					along the way.
				</p>
			</div>
			<div className="max-w-[1000px] m-auto p-8 bg-orange-200 rounded-3xl shadow-lg shadow-gray-400 mb-10 ">
				<h1 className="pb-5">Selling bikes</h1>
				<p className="py-2 text-gray-700 ">
					In August 2024, I Bought 360€ of used bikes. Some in better conditions than
					others, but still rideable. I then fixed them during my holidays, set up a
					carrefully written sales pages for each of them, and sold them usually around
					100€ each. Result: I got more money to invest, I learned a lot about bikes,
					mechanics and especially selling and negociation.
				</p>
			</div>
			<div className="max-w-[1000px] m-auto p-8 bg-yellow-200 rounded-3xl shadow-lg shadow-gray-400 mb-10">
				<h1 className="pb-5">AI Influenceurs</h1>
				<p className="py-2 text-gray-700 text-center">
					⚠️ I'm currently working on it, more details are coming soon... ⚠️
				</p>
			</div>
		</div>
	);
}
