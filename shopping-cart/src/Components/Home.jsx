import { CiShoppingCart } from "react-icons/ci";
import { FaGamepad } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="background w-[full] h-[58rem] relative">
      <div
        className="logo absolute top-3 left-2 w-16 sm:w-20 sm:top-7 sm:left-5 md:w-24 md:top-5 md:left-5 lg:w-28 
            lg:top-5 lg:left-5 xl:w-32 xl:top-5 xl:left-5"
      >
        <img src="/logo.png" alt="" />
      </div>
      <button
        className=" absolute top-7 right-0 w-16 sm:w-20 sm:top-9 sm:right-0 md:w-24 md:top-9 md:right-0 lg:w-28 
            lg:top-10 lg:right-0 xl:w-32 xl:top-12 xl:right-0"
      >
        <CiShoppingCart size={45} color="white" />
      </button>
      <div
        className="absolute gameEagle transparent text-white md:w-[70%]   flex flex-col justify-center items-center w-[80%] 
            lg:w-[35%] lg:h-[14rem] h-80 rounded-3xl p-7 backdrop-blur-md"
      >
        <h1 className="font-bold text-5xl md:text-6xl lg:text-5xl xl:text-6xl ">
          Game Eagle
        </h1>
        <p className="mt-4 font-bold text-lg md:text-xl lg:text-sm">
          It<span>&apos;</span>s not a commercial project. You can
          <span>&apos;</span>t buy any games here and all of the prices are
          generated to imitate a real game shop.
        </p>
        <p className="text-2xl mt-2 font-bold md:text-3xl lg:text-lg xl:text-xl">
          Enjoy😉
        </p>
      </div>
      <div
        className=" absolute quick transparent w-[65%] sm:w-[50%] md:w-[40%] lg:w-auto h-auto rounded-3xl p-7 backdrop-blur-md text-white
            flex flex-col justify-center items-center"
      >
        <h2 className="text-2xl font-bold md:text-3xl lg:text-2xl">
          Quick Navigation
        </h2>
        <button className="bg-white w-40 md:w-52 h-10 md:h-14 lg:h-12 rounded-3xl text-black font-bold flex justify-center items-center mt-3 md:mt-5 cursor-pointer hover:scale-105 ease-in duration-100">
          <Link
            className="w-28 md:w-36 md:text-xl flex justify-evenly items-center"
            to={"Products"}
          >
            <FaGamepad size={27} />
            Products
          </Link>
        </button>
        <button
          className="bg-white w-40 md:w-52 h-10 md:h-14 lg:h-12 rounded-3xl text-black font-bold flex justify-center items-center mt-3
                md:mt-5  cursor-pointer hover:scale-105 ease-in duration-100"
        >
          <a
            href="https://github.com/MrSaadMasood/the-odin-project-2023.git"
            rel="noreferrer noopener"
            className="w-44 md:text-xl flex justify-evenly items-center"
            target="_blank"
          >
            <FaGithub size={25} /> Other Projects
          </a>
        </button>
        <button
          className="bg-white w-40 md:w-52 h-10 md:h-14 lg:h-12 rounded-3xl text-black font-bold flex justify-center items-center mt-3
                md:mt-5  cursor-pointer hover:scale-105 ease-in duration-100"
        >
          <a
            href="https://www.linkedin.com/in/saad-masood-8b100125b/"
            className="w-28 md:text-xl flex justify-evenly items-center"
            rel="noreferrer noopener"
            target="_blank"
          >
            <FaLinkedin size={25} />
            LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
