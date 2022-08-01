import Link from "next/link";

export default function Tools() {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h1 className="py-4">Les outils que je sais utiliser</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Link href="https://docs.soliditylang.org/en/latest/">
            <div className="p-6 m-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <img
                src={"tools/solidity.png"}
                alt="/"
                width="100"
                height="100"
              />
            </div>
          </Link>
		  <Link href="https://developer.mozilla.org/fr/docs/Web/JavaScript">
            <div className="p-6 m-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <img
                src={"tools/javascript.png"}
                alt="/"
                width="100"
                height="100"
              />
            </div>
          </Link>
		  <Link href="https://docs.soliditylang.org/en/latest/">
            <div className="p-6 m-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <img
                src={"tools/solidity.png"}
                alt="/"
                width="100"
                height="100"
              />
            </div>
          </Link>
		  <Link href="https://docs.soliditylang.org/en/latest/">
            <div className="p-6 m-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <img
                src={"tools/solidity.png"}
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

/*
javascript, python, ethers.js, hardhat, brownie, web3.py,
        useDapp, moralis, ganache, openzeppelin, chainlink
      </div>
      <div>balek en vrai 25 :</div>
      Ipfs, pinata, npm, yarn, c, c++, metamask, remix, replit, vscode, github, react,
      Material-UI, prettier, mocha, chai, waffle, nextJS, web3uikit, css,
      discordjs, discordpy, infura, alchemy, typescript
*/
