export default function Businesses() {
	return (
		<div id="presentation" className="w-full p-8 pt-4 lg:pt-8 items-center">
			<div className="max-w-[1000px] m-auto p-8 bg-red-200 rounded-3xl shadow-lg shadow-gray-400 mb-10">
				<h1 className="pb-5">Hurdles Overdose</h1>
				<div className="grid grid-cols-1 lg:grid-cols-2 ">
					<p className="py-2 text-gray-700 ">
						When I was 12 years old, I started with athletics, especially with the 60
						and 110m hurdles. I was good enough to compete, but unfortunately not good
						enough to win them. I stuck with it for 7 years and obviously got tired of
						it. So I tried other events : 4x100m relay, 60m, 200m, 400m hurdles, triple
						jump, high jump, pole vault, long jump, heptathlon. As I tried everything
						(except throwing, I didn't have the physique for it) I became a real Swiss
						knife in athletics. But as time went by, I became more and more distant.
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
						I wanted to change and discover new sports, but not too far away from
						athletics. So why not run, but for longer? And while we're at it, why not
						bike and swim too? That's how I started triathlon in the summer of 2023. I
						liked it, trained and did many races : S triathlon, Olympic distance
						triathlon, raid, 10km runs, duathlons. But I noticed a small problem: I've
						always been used to sprinting, and I found that forcing myself to run slowly
						was just wasn't my thing at all. So after 10+ races, I finally realized that
						I hate running.
					</p>
				</div>
			</div>
			<div className="max-w-[1000px] m-auto p-8 bg-yellow-200 rounded-3xl shadow-lg shadow-gray-400 mb-10 ">
				<h1 className="pb-5">Stupid Cyclists</h1>

				<div className="grid grid-cols-1 lg:grid-cols-2 ">
					<p className="py-2 text-gray-700 ">
						I always thought of road cycling as a boring activity, where you just pedal
						for the sake of pedaling. But when I had to try it to train for triathlons,
						I rediscovered the feeling I love: SPEEEED!! Sprinting, climbing,
						descending, drafting, off-roading with a road bike, I love it! And I still
						cannot describe how amazed I am at how efficient it is as a means of
						transportation instead of walking or running. So I fell in love with the
						sport, and of course I've done dumb things like riding 1000km across France
						to train for a whole week in the French Pyrenees, it's just normal cyclist
						stuff I guess.
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
						next 3 days. Or hiking without knowing that I'm also gonna have to climb
						over a mountain ridge before I get caught in the night. Kayaking against the
						current is fun too, before I flip over, get the kayak stuck under a bridge,
						and got myself carried away by the current. Also, I only swim in the sea,
						because I sink in fresh water, which makes me a great prey for nature.
						Paddling is also great, as it is my last option after over-inflating my
						inflatable kayak. And finally, weight training to show off the big muscles.
					</p>
				</div>
			</div>
		</div>
	);
}
