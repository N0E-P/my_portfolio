export default function Presentation() {
	return (
		<div id="presentation" className="w-full p-4 items-center">
			<div className="max-w-[1400px] m-auto ">
				<h1 className="py-8 text-center underline">Pourquoi moi ?</h1>
				<div className="md:grid grid-cols-2">
					<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 md:mr-8 md:ml-4">
						<p className=" text-white text-lg">
							Je suis jeune mais j'ai de l'expérience : Une vingtaine de vélos à mon
							actif, tous roulent nickel et sont en service.
						</p>
					</div>
					<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 mt-8 md:mt-0 md:mr-4">
						<p className=" text-white text-lg">
							Mes vélos sont affinés au poil de cul près, contrairement à ceux vendus
							mal vissés chez Decathlon.
						</p>
					</div>
					<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 md:mr-8 mt-8 md:ml-4">
						<p className=" text-white text-lg">
							Si je trouve un défaut, je ne fais pas comme si je n'avais rien vu, j'ai
							pas encore prévu tuer des gens tout de suite.
						</p>
					</div>
					<div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 mt-8 md:mr-4">
						<p className=" text-white text-lg">
							J'ai déjà quasiment tout monté et démonté. Le cambouis, la rouille et
							les roulements à bille qui se barrent ne me font plus peur.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
