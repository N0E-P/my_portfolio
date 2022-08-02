export default function Conclusion() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1>Conclusion</h1>
          <p className="py-2 text-gray-700">
            Je n’ai pas encore beaucoup d’experiences mais je suis pret a
            travailler et a apprendre en entreprise pour développer mes
            connaissances et (apporter qqch a l’entreprise / etre benefique);
            résumé de tout ce que je sais faire en gros coder des smart
            contract, faire des dapps… = embauchez moi
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src={""} alt="" />
        </div>
      </div>
    </div>
  );
}
