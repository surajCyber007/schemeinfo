import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeIsSaved } from "../store";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schemeList = useSelector((state) => {
    return state.schemes;
  });

  const carouselData = useSelector((state) => {
    return state.carousel;
  });

  console.log("carouselData", carouselData);

  const [showAll, setShowAll] = useState(false);
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

  return (
    <div>
      {carouselData.map((img) => {
        return (
          <div key={img.id}>
            <img src={`${img.url}`} alt="" />
          </div>
        );
      })}
      {schemeList.slice(0, displayCount).map((scheme) => (
        <div key={scheme.id}>
          <Card scheme={scheme} toggleIsSaved={toggleIsSaved} handleReadScheme={handleReadScheme} />
        </div>
      ))}
      <Button handleClick={toggleShowAll} primary textWhite rounded>
        {showAll ? "View Less" : "View More"}
      </Button>
    </div>
  );
};

export default HomePage;
