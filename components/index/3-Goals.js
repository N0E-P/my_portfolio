export default function Goals() {
	return (
		<div className="w-full p-8 pt-4 lg:pt-8 items-center">
			<div className="max-w-[1400px] m-auto p-8 bg-red-200 rounded-3xl shadow-lg shadow-gray-400">
				<h1 className="pb-5">My 2025 Goals:</h1>
				<div className="grid-cols-3 lg:grid">
					<p className="py-2 text-gray-700 ">
						<span className="font-bold">Myself:</span> <br />
						- Stop wasting time <br />
						- Try foreign countries <br />- Speak my mind
					</p>
					<p className="py-2 text-gray-700">
						<span className="font-bold">Sports:</span>
						<br />
						- Go from 77kg to 85kg
						<br />
						- Reach a 300 watts FTP
						<br />- Cycle 1000km in 5 days
					</p>
					<p className="py-2 text-gray-700 ">
						<span className="font-bold">Business:</span>
						<br />
						- Live from my own business
						<br />
						- Try out AI videos full time
						<br />- Network and make new friends
					</p>
				</div>
			</div>
		</div>
	);
}
