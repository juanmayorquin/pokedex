import React from "react";
import { capitalize } from "../App";

const Card = ({ imgUrl, id, name, types = [] }) => {
  return (
    <div className="bg-neutral-300 w-52 rounded-md p-4 hover:">
      <div>
        <img className="w-full" width={192} height={192} src={imgUrl} alt={name} />
      </div>
      <div>
        <strong className="text-gray-400 text-sm">N.° {id}</strong>
        <h5 className="font-medium text-2xl">{name}</h5>

        <div className="flex flex-wrap gap-1 mt-2">
          {types.map((typeIndex, index) => (
            <span
              className="text-xs bg-gray-800 py-1 px-2 rounded text-white"
              key={index}
            >
              {capitalize(typeIndex.type.name)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
