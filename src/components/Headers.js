import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Headers = () => {
  const { carts } = useSelector((state) => state.allCart);

  return (
    <>
      <div className="bg-slate-900">
        <nav className="flex  justify-between items-center h-20 max-w-6xl mx-auto">
          <NavLink to="/">
            <div>
              <img
                className="h-14 sm:ml-7"
                src="https://www.pngkey.com/png/detail/239-2398314_logo-store-png-e-store.png"
                alt=""
              />
            </div>
          </NavLink>
          <NavLink to="/">
            <div>
              <button className="text-white mt-2 border-2 border-gray-700 rounded-full font-semibold text-[25px] p-1 px-3 uppercase">
                E-Store
              </button>{" "}
            </div>
          </NavLink>
          <div className="text-slate-100">
            <NavLink to="/cart">
              <div className="relative">
                <FaShoppingCart className="text-slate-100 text-3xl sm:mr-7" />
                {carts.length > 0 && (
                  <span className=" absolute -top-1 -right-[-25px] bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                    {carts.length}
                  </span>
                )}
              </div>
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Headers;
