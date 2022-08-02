import Link from "next/link";

export default function Tools() {
  return (
    <div id="outils" className="w-full  md:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <h1 className="py-4 text-center">Les outils que j'utilise :</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Link href="https://docs.soliditylang.org/en/latest/">
            <div className="p-6 m-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <img
                src={"tools/solidity.png"}
                alt="/"
                width="100px"
                height="100px"
              />
            </div>
          </Link>
          <Link href="https://developer.mozilla.org/fr/docs/Web/JavaScript">
            <div className="p-6 m-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <img
                src={"tools/javascript.png"}
                alt="/"
                width="100px"
                height="100px"
              />
            </div>
          </Link>
          <Link href="https://www.python.org/">
            <div className="p-6 m-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <img src={"tools/python.png"} alt="/" width="100" height="100" />
            </div>
          </Link>
          <Link href="https://docs.ethers.io/v5/">
            <div className="p-6 m-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <img
                src={"tools/ethersjs.png"}
                alt="/"
                width="100"
                height="100"
              />
            </div>
          </Link>
          <Link href="https://hardhat.org/">
            <div className="p-6 m-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <img src={"tools/hardhat.png"} alt="/" width="100" height="100" />
            </div>
          </Link>
          <Link href="https://eth-brownie.readthedocs.io/en/stable/">
            <div className="p-6 m-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <img src={"tools/brownie.png"} alt="/" width="100" height="100" />
            </div>
          </Link>
          <Link href="https://web3py.readthedocs.io/en/stable/">
            <div className="p-6 m-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <img src={"tools/web3py.png"} alt="/" width="100" height="100" />
            </div>
          </Link>
          <Link href="https://usedapp.io/">
            <div className="p-6 m-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <img src={"tools/usedapp.png"} alt="/" width="100" height="100" />
            </div>
          </Link>
          <Link href="https://moralis.io/">
            <div className="p-6 m-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <img src={"tools/moralis.png"} alt="/" width="100" height="100" />
            </div>
          </Link>
          <Link href="https://trufflesuite.com/ganache/">
            <div className="p-6 m-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <img src={"tools/ganache.png"} alt="/" width="100" height="100" />
            </div>
          </Link>
          <Link href="https://www.openzeppelin.com/">
            <div className="p-6 m-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <img
                src={"tools/openzeppelin.png"}
                alt="/"
                width="100"
                height="100"
              />
            </div>
          </Link>
          <Link href="https://chain.link/">
            <div className="p-6 m-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <img
                src={"tools/chainlink.png"}
                alt="/"
                width="100"
                height="100"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
