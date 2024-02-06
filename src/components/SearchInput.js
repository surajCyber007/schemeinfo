import React from "react";
import { useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";

const SearchInput = () => {
  const dispatch = useDispatch();
  const handleSearchChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        className={`w-40 px-2 py-1 border border-gray-400 rounded-md outline-blue-300`}
        placeholder="Search schemes"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchInput;
