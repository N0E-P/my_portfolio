export default function Presentation() {
	return (
		<div id="presentation" className="w-full p-4 items-center">
			<div className="max-w-[1400px] m-auto ">
				<h1 className="py-8 text-center underline">Why me?</h1>
				<div className="md:grid grid-cols-2">
					<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 md:mr-8 md:ml-4">
						<p className=" text-white text-lg">
							I'm young, but I'm experienced: I've worked on over 40 bikes, all of
							which are still running perfectly.
						</p>
					</div>
					<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 mt-8 md:mt-0 md:mr-4">
						<p className=" text-white text-lg">
							My bikes are fine-tuned to the last detail, unlike those sold at
							Decathlon, which are badly screwed together.
						</p>
					</div>
					<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 md:mr-8 mt-8 md:ml-4">
						<p className=" text-white text-lg">
							If I find a defect, I don't pretend I didn't see it, I didn't plan to
							kill people.
						</p>
					</div>
					<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 mt-8 md:mr-4">
						<p className=" text-white text-lg">
							I've taken almost everything apart and put it back together again.
							Grease, rust, and loose ball bearings do not scare me anymore.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
