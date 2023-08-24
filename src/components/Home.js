import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardsData from "./CardData";
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Home = () => {
  const [cartData, setCartData] = useState(CardsData);
  const dispatch = useDispatch();

  // add to cart
  const send = (e) => {
    dispatch(addToCart(e));
    toast.success("Item added In Your Cart");
  };
  return (
    <>
      <section className="iteam_section mt-4 container">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2  max-w-6xl p-2 mx-auto   min-h-[80vh]">
          {cartData.map((element, index) => {
            return (
              <>
                <div>
                  <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
                    <div className="h-[180px]">
                      <Card.Img
                        variant="top"
                        className=" h-full w-full "
                        src={element.imgdata}
                      />
                    </div>

                    <div className="card_body">
                      <div className="upper_data d-flex justify-content-between align-items-center">
                        <h4 className="mt-2 text-gray-700 text-lg font-semibold">
                          {element.Title}
                        </h4>
                        <span>{element.rating}&nbsp;★</span>
                      </div>

                      <div className="lower_data d-flex justify-content-between ">
                        <span className="text-green-800 font-semibold">
                          ₹ {element.price}
                        </span>
                      </div>
                      <div className="extra"></div>

                      <div className="last_data d-flex justify-content-between align-items-center">
                        <Button
                          style={{
                            width: "150px",
                            background: "#ff3054db",
                            border: "none",
                          }}
                          variant="outline-light"
                          className="mt-2 mb-2"
                          onClick={() => send(element)}
                        >
                          Add TO Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
