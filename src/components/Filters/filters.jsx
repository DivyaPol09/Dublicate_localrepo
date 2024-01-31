import React from "react";
import Brands from "../Filters/Brands";
import Price from "../Filters/price";
import Colors from "../Filters/colors";
import { FaFilter } from "react-icons/fa6";

const Filters = () => {
  return (
    <div className="flex flex-col gap-2 ">
        <article className="flex justify-between  border-b-2 border-gray-300">
            <h1 className="font-bold text-[24.32px]"> Filters </h1>
            <FaFilter className="relative top-2" />
        </article>
      <Brands />
      <Price/>
      <Colors />
    </div>
  );
};

export default Filters;