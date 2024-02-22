import React from "react";
import { NavLink } from "react-router-dom";

function Card({ title, imgsrc }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imgsrc} alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <NavLink to="/contact" className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
          Know More
        </NavLink>
      </div>
    </div>
  );
}

export default Card;
