import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { changeIsLiked } from "../store/slices/schemeSlice";
import { useDispatch, useSelector } from "react-redux";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import Popup from "../components/Popup"

const SchemeDetailPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
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
        {scheme.details.map((paragraph, index) => (
          <div key={index} className="accordion-item">
            <button
              className={`accordion-title ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              Paragraph {index + 1}
            </button>
            {activeIndex === index && (
              <div className="accordion-content">
                <p>{paragraph}</p>
              </div>
            )}
          </div>
        ))}
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
        <button onClick={handleBack}>Back</button>
        <button onClick={handleOpenPopup}>Check Eligibility</button>
        <button onClick={handleGoToLike}>Go To Like</button>
      </div>
      {showPopup && <div>
        <Popup handleClosePopup={handleClosePopup} />
      </div>}
    </div>
  );
};

export default SchemeDetailPage;
