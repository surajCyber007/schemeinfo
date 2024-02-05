import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { changeIsLiked } from "../store/slices/schemeSlice";
import { useDispatch, useSelector } from "react-redux";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import Popup from "../components/Popup";
import Button from "../components/Button";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const SchemeDetailPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(-1);
  const [showPopup, setShowPopup] = useState(false);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const scheme = location.state?.scheme || null;

  const schemeMatch = useSelector((state) => {
    return state.schemes.find((s) => s.id === scheme.id);
  });

  const handleToggleLike = (scheme, val) => {
    const data = {
      scheme,
      val,
    };
    dispatch(changeIsLiked(data));
  };

  const handleBack = () => {
    navigate("/");
  };
  const handleGoToLike = () => {
    navigate("/liked");
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="pt-4 relative">
      <h1>{scheme.title}</h1>
      <p>{scheme.type}</p>
      <p>{scheme.description}</p>
      <div>
        {scheme.details.map((paragraph, index) => {
          const isParaVisible = activeIndex === index ? true : false;

          return (
            <div key={index} className="accordion-item mt-3">
              <button
                className={`accordion-title px-4 py-2 rounded-md border w-full flex justify-between items-center ${
                  isParaVisible
                    ? "active bg-blue-400 text-white font-bold"
                    : "bg-gray-200"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <p>Paragraph {index + 1}</p>
                <div>
                  {isParaVisible && <IoIosArrowUp />}
                  {!isParaVisible && <IoIosArrowDown />}
                </div>
              </button>
              {isParaVisible && (
                <div
                  className={`accordion-content ${
                    isParaVisible
                      ? "active bg-gray-100 rounded-md p-3 text-blue-400"
                      : "bg-gray-100"
                  }`}
                >
                  <p>{paragraph}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="absolute top-4 right-4">
        {!schemeMatch?.isLiked && (
          <button onClick={() => handleToggleLike(scheme, true)}>
            <FcLikePlaceholder size={28} />
          </button>
        )}
        {schemeMatch?.isLiked && (
          <button onClick={() => handleToggleLike(scheme, false)}>
            <FcLike size={28} />
          </button>
        )}
      </div>
      <div className="flex justify-around items-center mt-5">
        <Button handleClick={handleBack} secondary textWhite rounded>
          Back
        </Button>
        <Button handleClick={handleOpenPopup} success textWhite rounded>
          Check Eligibility
        </Button>
        <Button handleClick={handleGoToLike} primary textWhite rounded>
          Go To Like
        </Button>
      </div>
      {showPopup && (
        <div>
          <Popup handleClosePopup={handleClosePopup} />
        </div>
      )}
    </div>
  );
};

export default SchemeDetailPage;
