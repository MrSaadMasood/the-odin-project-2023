import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  // after the component is loaded the timer starts and useRef hook is used to hold the timeoutIDs and then 
  // the user is redirected to the main page containing products
  const timeoutId = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      navigate("/Products");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  });
  return (
    <div className=" bg-black w-full  h-screen flex justify-center items-center text-white text-4xl">
      Thank You For Ordering
    </div>
  );
}
