import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const SearchFilter = () => {
  const dispatch = useDispatch();
  const schemeData = useSelector((state) => {
    return state.schemes;
  });
  const schemeTypes = [...new Set(schemeData.map((scheme) => scheme.type))];

  const handleSelectType = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className="inline-block relative">
      <select
        className="block appearance-none w-full bg-white border border-blue-300 px-4 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleSelectType}
      >
        <option>Select Type</option>
        {schemeTypes.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z" />
        </svg>
      </div>
    </div>
  );
};

export default SearchFilter;
