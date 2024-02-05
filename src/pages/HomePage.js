import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa6";
import { changeIsSaved } from "../store";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

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
          <div className="bg-indigo-100 my-2 flex justify-between py-2 px-4 rounded-md">
            <div>
              <h4>{scheme.title}</h4>
              <p className="w-48">{scheme.description}</p>
            </div>
            <div className="flex justify-between items-center flex-col ">
              {!scheme.isSaved && (
                <button onClick={() => toggleIsSaved(scheme, true)}>
                  <CiBookmark size={24} fill="red" />
                </button>
              )}
              {scheme.isSaved && (
                <button onClick={() => toggleIsSaved(scheme, false)}>
                  <FaBookmark size={20} fill="green" />
                </button>
              )}
              <button onClick={() => handleReadScheme(scheme)}>
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      ))}
      <button onClick={toggleShowAll} className="">
        {showAll ? "View Less" : "View More"}
      </button>
    </div>
  );
};

export default HomePage;
