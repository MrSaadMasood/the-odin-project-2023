import { CiShoppingCart } from "react-icons/ci";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";


const Header = ({ cartClickedSetter, totalItemsinCarts }) => {

  return (
    <div className="productHeader bg-black w-full h-24 text-white flex justify-start items-center  relative">
      <Link
        className="innerLogo center w-14 md:w-[3.5rem] lg:w-16 absolute top-[25%] lg:top-[19%] left-2 md:left-3 lg:left-5 flex justify-center
        items-center cursor-pointer hover:scale-105 ease-in duration-150" to={"/"}
      >
        <img src="/logo2.png" alt="#" />
      </Link>
      <Link className="text-white text-3xl cursor-pointer font-bold hidden sm:hidden lg:block absolute lg:left-[5.2rem] " to={"/"}>
        Game Eagle
      </Link>
      <div
        className="cart w-2 absolute top-[28%] right-12 lg:right-14 cursor-pointer"
        onClick={cartClickedSetter}
      >
        <div className="flex w-12 relative">
          <CiShoppingCart className="hover:scale-105" size={40} color="white" />
          <Counter value={totalItemsinCarts} />
        </div>
      </div>
    </div>
  );
};

const Counter = ({ value }) => {
  return (
    <div
      className="counter w-5 h-5 flex justify-center
        items-center bg-red-600 rounded-full absolute right-0 align-top text-xs"
    >
      {value}
    </div>
  );
};

Header.propTypes = {
  cartClickedSetter: PropTypes.func,
  totalItemsinCarts : PropTypes.number,
};

Counter.propTypes = {
  value: PropTypes.number,
};
export default Header;
