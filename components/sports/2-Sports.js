export default function Businesses() {
	return (
		<div id="presentation" className="w-full p-8 pt-4 lg:pt-8 items-center">
			<div className="max-w-[1000px] m-auto p-8 bg-red-200 rounded-3xl shadow-lg shadow-gray-400 mb-10">
				<h1 className="pb-5">Hurdles Overdose</h1>
				<div className="grid grid-cols-1 lg:grid-cols-2 ">
					<p className="py-2 text-gray-700 ">
						At 12yo, I started track and field, focusing especially on the 60 and 110m
						hurdles. I was good enough to join competitions, but unfortunately not good
						enough to win them. I sticked to it for 7 years and obviously became sick of
						it. So I tried other disciplines : 4x100m relays, 60m, 200m, 400m hurdles,
						triple jump, high jump, pole vault, long jump, heptathlons. As I tried
						everything (except throws, I didn't got the physique for the job) I became a
						real swiss knife in track and field. But with time, I was getting more and
						more distant.
					</p>
					<div className="bg-[#ecf0f3] shadow-md shadow-gray-400 rounded-3xl p-4 sm:p-6 lg:p-4 lg:ml-8">
						<img
							className="rounded-3xl hover:scale-105 ease-in duration-300"
							src={"/sports/track.jpg"}
							width="1000px"
							height="1000px"
							alt="/"
						/>
					</div>
				</div>
			</div>
			<div className="max-w-[1000px] m-auto p-8 bg-orange-200 rounded-3xl shadow-lg shadow-gray-400 mb-10 ">
				<h1 className="pb-5">Free Pain</h1>
				<div className="grid grid-cols-1 lg:grid-cols-2 ">
					<div className="bg-[#ecf0f3] shadow-md shadow-gray-400 rounded-3xl p-4 sm:p-6 lg:p-4 lg:mr-8">
						<img
							className="rounded-3xl hover:scale-105 ease-in duration-300"
							src={"/sports/cap.jpg"}
							width="1000px"
							height="1000px"
							alt="/"
						/>
					</div>
					<p className="py-2 text-gray-700 ">
						I wanted to change and discover new sports, but not too far away from track
						and field. So why not run, but for longer? And as we're at it, why not bike
						and swim too? That's how I started triathlon in summer 2023. I liked it,
						trained and did many races : S triathlon, Olympic distance triathlon, Raid,
						10km runs, duathlons. But as time passes, I realised a small problem: I've
						always been used to sprinting, and I found that forcing myself to run slowly
						was just not my thing at all. So after 10+ races, I finally realized that I
						hate running.
					</p>
				</div>
			</div>
			<div className="max-w-[1000px] m-auto p-8 bg-yellow-200 rounded-3xl shadow-lg shadow-gray-400 mb-10 ">
				<h1 className="pb-5">Stupid Cyclists</h1>

				<div className="grid grid-cols-1 lg:grid-cols-2 ">
					<p className="py-2 text-gray-700 ">
						I always viewed road cycling as a boring activity, where you just pedal for
						the sake of it. But as I had to try road cycling to train for triathlons, I
						rediscovered that feeling I love: SPEEEED!! Sprinting, climbing, descending,
						drafting, doing off road with a road bike, I love it! And I still cannot
						describe how amazed I am by how efficient it is as a means of transportation
						rather than to walk or to run. So I fell in love with the sport, and of
						course did dumb things like rinding 1000km across France to then train a
						whole week in the French Pyrenees, it's just normal cyclist stuff I guess.
					</p>
					<div className="bg-[#ecf0f3] shadow-md shadow-gray-400 rounded-3xl p-4 sm:p-6 lg:p-4 lg:ml-8">
						<img
							className="rounded-3xl hover:scale-105 ease-in duration-300"
							src={"/sports/velo.jpg"}
							width="1000px"
							height="1000px"
							alt="/"
						/>
					</div>
				</div>
			</div>
			<div className="max-w-[1000px] m-auto p-8 bg-green-200 rounded-3xl shadow-lg shadow-gray-400 mb-10 ">
				<h1 className="pb-5">Type 6 Fun</h1>
				<div className="grid grid-cols-1 lg:grid-cols-2 ">
					<div className="bg-[#ecf0f3] shadow-md shadow-gray-400 rounded-3xl p-4 sm:p-6 lg:p-4 lg:mr-8">
						<img
							className="rounded-3xl hover:scale-105 ease-in duration-300"
							src={"/sports/arc.jpg"}
							width="1000px"
							height="1000px"
							alt="/"
						/>
					</div>
					<p className="py-2 text-gray-700 ">
						I love other sports too. Like rock climbing until I can't hold a pen for the
						next 3 days. Or hiking without knowing I'm also gonna have to climb over a
						mountain ridge before getting caught up by the night. Kayaking against the
						current is fun too, before tipping over, getting the kayak stuck under a
						bridge and getting myself carried away by the current. Also, I only swim in
						the sea, as I sink in fresh water, which makes me a great prey for nature.
						Paddling is great too, as it becomes my last option after I over inflated my
						inflatable kayak. And lastly, weight training to show the big muscles.
					</p>
				</div>
			</div>
		</div>
	);
}
