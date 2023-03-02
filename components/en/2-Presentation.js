export default function Presentation() {
  return (
    <div id="presentation" className="w-full p-4 items-center">
      <div className="max-w-[1400px] m-auto ">
        <h1 className="mt-5 max-w-[300px] sm:max-w-[1400px] m-auto">
          I've never been good at building.
        </h1>
        <h1 className="mb-12 mt-6 max-w-[285px] sm:max-w-[1400px] m-auto">
          But I <span className="underline underline-offset-4">always</span>{" "}
          wanted to improve.
        </h1>
        <div className="lg:grid grid-cols-3">
          <div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:mr-4 ">
            <p className=" text-white text-lg">
              I started with Lego. I used to stay in my garden shed all the
              time, building cars and houses that I would end up blowing.
            </p>
            <p className="mt-5 text-white text-lg">
              My dream was to work for them. But even though I was slowly
              getting better, I would never have the creativity to be able to do
              it.
            </p>
            <div className="mt-6 max-w-[450px] hover:scale-105 ease-in duration-300 w-full h-auto m-auto ">
              <img
                className="rounded-xl"
                src="me/lego.JPG"
                width="2292px"
                height="2788px"
                alt="/"
              />
            </div>
          </div>
          <div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:ml-2 lg:mr-2 mt-8 lg:mt-0">
            <p className=" text-white text-lg">
              Later, I discovered Minecraft. It was a whole new world of
              possibilities and creations that had just opened up. I spent
              months and months on this game.
            </p>
            <p className="mt-5 text-white text-lg">
              I built houses, castles, farms, mansions and tons of other things.
              It has always been my favorite video game.
            </p>
            <div className="mt-6 max-w-[450px] hover:scale-105 ease-in duration-300 w-full h-auto m-auto">
              <img
                className="rounded-xl"
                src={"me/minecraft.JPG"}
                width="3072px"
                height="2304px"
                alt="/"
              />
            </div>
          </div>
          <div className="p-8 bg-sky-600 rounded-3xl shadow-md shadow-gray-400 lg:ml-4 mt-8 lg:mt-0">
            <p className=" text-white text-lg">
              One day, my father bought some Arduino. There are small cards that
              you can program and link with anything and everything. I had a lot
              of fun playing with them.
            </p>
            <p className="mt-5 text-white text-lg">
              I was doing pretty well, even though I was just copying and
              pasting code. I had even started to make my own remote control
              car.
            </p>
            <div className="mt-6 max-w-[450px] hover:scale-105 ease-in duration-300 w-full h-auto m-auto">
              <img
                className="rounded-xl"
                src={"me/arduino.png"}
                width="900px"
                height="675px"
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className="max-w-[1325px] m-auto">
          <h2 className="text-center mt-48 my-2 max-w-[700px] xl:max-w-[825px] m-auto">
            On July 27, 2021, I had the misfortune to fall into the world of
            cryptocurrencies
          </h2>
          <p className="sm:mx-10 my-2 md:text-center py-3 p-4">
            Usually, it's not something bad. But the problem is that I did
            everything wrong... 🤦‍♂️
          </p>
          <p className="sm:mx-10 my-2 p-4 ">
            I bought cryptos that didn't make sense, I played trader when I
            didn't know anything about it, and I lost unbelievable amounts of
            money just on transaction fees. In short, I managed to make all my
            money disappear without seeing anything coming!
          </p>
          <p className="sm:mx-10 my-2 p-4">
            Fortunately, I was lucky enough not to have given up and got back
            into it 3 months later. That's when I really started to understand
            the ecosystem and became interested in the whole technology aspect
            behind the blockchain.
          </p>
          <h2 className="text-center mt-36 my-2 max-w-[620px] xl:max-w-[830px] m-auto">
            But since I didn't make any more money, I continued to look for a
            way to make some
          </h2>
          <p className="sm:mx-10 my-2 text-justify p-4 ">
            Then, around mid-February 2022, I participated in{" "}
            <span>
              <a
                href="https://www.youtube.com/watch?v=nb471gm5Xeg"
                className="cursor-pointer text-blue-700 underline"
              >
                the Arduino project
              </a>
            </span>{" "}
            that my older sister had to do for her engineering school. That's when I noticed that I really liked programming, and I was doing pretty well too! It was elected the best project of the year by the jury.
          </p>
          <p className="sm:mx-10 my-2 text-justify p-4 ">
            Not long before, I heard about the Solidity developer job. The
            programming language for creating smart contracts and interacting
            with the blockchain. Then I realized that it mixed two things I
            particularly liked: programming and blockchain.
          </p>
          <h2 className="text-center mt-20 mb-32 max-w-[333px] md:max-w-[412px] xl:max-w-[493px] m-auto">
            So I had a new goal:{" "}
            <span className="underline">Become a Solidity developer</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
