import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilterTerm, removeFilterTerm } from "../store";
import { TiTick } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";

const SearchFilter = ({ toggleFilterVisibility }) => {
  const dispatch = useDispatch();
  const schemeData = useSelector((state) => {
    return state.schemes;
  });
  const filterVals = useSelector((state) => {
    return [...new Set(state.filterVal.filterTerms)];
  });

  const schemeTypes = [...new Set(schemeData.map((scheme) => scheme.type))];

  const handleSelectType = (type, i) => {
    if (filterVals.includes(type)) {
      dispatch(removeFilterTerm(type));
    } else {
      dispatch(changeFilterTerm(type));
    }
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center">
        <button className="absolute -top-6 -right-6" onClick={toggleFilterVisibility}>
          <IoMdCloseCircle size={30} fill="#60a5fa" />
        </button>
        {schemeTypes.map((type, i) => (
          <div
            key={type}
            className={`flex justify-between w-44 px-2 py-2 items-center my-1 shadow-sm ${
              filterVals.includes(type)
                ? "bg-blue-400 text-white rounded-md"
                : ""
            }`}
            onClick={() => handleSelectType(type, i)}
          >
            <p className="">{type}</p>
            {filterVals.includes(type) && <TiTick size={24} />}
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchFilter;
