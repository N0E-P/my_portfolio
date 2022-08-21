import Image from "next/image";

export default function Tools() {
  return (
    <div id="outils" className="w-full h-full p-2 items-center py-32">
      <h1 className="py-10 text-center">Les outils que j'utilise :</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 ">
        <a
          href="https://docs.soliditylang.org/en/latest/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/solidity.png"}
            width="75px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/javascript.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/typescript.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://www.python.org/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/python.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://github.com/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/github.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>

        <a
          href="https://docs.ethers.io/v5/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/ethersjs.png"}
            width="100px"
            height="60px"
            alt="/"
          />
        </a>
        <a
          href="https://hardhat.org/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/hardhat.png"}
            width="100px"
            height="70px"
            alt="/"
          />
        </a>
        <a
          href="https://eth-brownie.readthedocs.io/en/stable/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/brownie.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://web3py.readthedocs.io/en/stable/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/web3py.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://moralis.io/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/moralis.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://trufflesuite.com/ganache/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/ganache.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://thegraph.com/en/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/thegraph.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://www.openzeppelin.com/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/openzeppelin.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://chain.link/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/chainlink.png"}
            width="85px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://usedapp.io/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/usedapp.png"}
            width="224px"
            height="72px"
            alt="/"
          />
        </a>
        <a
          href="https://github.com/web3ui/web3uikit#web3uikit"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/web3uikit.png"}
            width="150px"
            height="64px"
            alt="/"
          />
        </a>
        <a
          href="https://infura.io/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/infura.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://www.alchemy.com/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/alchemy.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://metamask.io/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/metamask.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://reactjs.org/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/react.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://nextjs.org/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/nextjs.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://mui.com/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/materialui.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://ipfs.io/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/ipfs.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>
        <a
          href="https://www.pinata.cloud/"
          className="p-4 m-auto justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
        >
          <Image
            src={"/../public/tools/pinata.png"}
            width="100px"
            height="100px"
            alt="/"
          />
        </a>
      </div>
    </div>
  );
}
