import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcSearch } from "react-icons/fc";
import { changeIsSaved } from "../store";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import { BsFilterLeft } from "react-icons/bs";
import SearchInput from "../components/SearchInput";
import SearchFilter from "../components/SearchFilter";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schemeList = useSelector((state) => {
    return state.schemes;
  });

  const searchTerm = useSelector((state) => {
    return state.searchVal.searchTerm;
  });

  const carouselData = useSelector((state) => {
    return state.carousel;
  });

  const [showAll, setShowAll] = useState(false);
  const [isInputVisible, setInputVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const initialDisplayCount = 5;
  const displayCount = showAll ? schemeList.length : initialDisplayCount;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const toggleIsSaved = (scheme, val) => {
    const data = {
      scheme,
      val,
    };
    dispatch(changeIsSaved(data));
  };

  const handleReadScheme = (scheme) => {
    navigate("/schemedetails", { state: { scheme } });
  };

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div>
      {carouselData.map((img) => {
        return (
          <div key={img.id}>
            <img src={`${img.url}`} alt="" />
          </div>
        );
      })}
      <div className="flex justify-between items-center mt-3 relative">
        <div className="flex items-center space-x-2">
          {isInputVisible && <SearchInput />}
          <button onClick={toggleInputVisibility}>
            {<FcSearch size={24} />}
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button onClick={toggleFilterVisibility}>
            {<BsFilterLeft size={24} />}
          </button>
          {isFilterVisible && <SearchFilter />}
        </div>
      </div>
      {schemeList
        .filter((scheme) => scheme.title.toLowerCase().includes(searchTerm) || scheme.type === searchTerm)

        .slice(0, displayCount)
        .map((scheme) => (
          <div key={scheme.id}>
            <Card
              scheme={scheme}
              toggleIsSaved={toggleIsSaved}
              handleReadScheme={handleReadScheme}
            />
          </div>
        ))}
      <Button handleClick={toggleShowAll} primary textWhite rounded>
        {showAll ? "View Less" : "View More"}
      </Button>
    </div>
  );
};

export default HomePage;
