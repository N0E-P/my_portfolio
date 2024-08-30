export default function Presentation() {
	return (
		<div id="presentation" className="w-full p-4 items-center">
			<div className="max-w-[1400px] m-auto ">
				<h1 className="py-8 text-center underline">Why me?</h1>
				<div className="md:grid grid-cols-2">
					<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 md:mr-8 md:ml-4">
						<p className=" text-white text-lg">
							I'm young but I've got experience: I've worked on over forty bikes, all
							of which run perfectly and are still in service.
						</p>
					</div>
					<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 mt-8 md:mt-0 md:mr-4">
						<p className=" text-white text-lg">
							My bikes are fine-tuned to the last detail, unlike those sold badly
							screwed together at Decathlon.
						</p>
					</div>
					<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 md:mr-8 mt-8 md:ml-4">
						<p className=" text-white text-lg">
							If I find a defect, I don't act like I didn't see anything, I haven't
							planned to kill people right away.
						</p>
					</div>
					<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 mt-8 md:mr-4">
						<p className=" text-white text-lg">
							I've already assembled and disassembled almost everything. Grease, rust,
							and ball bearings that run away no longer scare me.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
