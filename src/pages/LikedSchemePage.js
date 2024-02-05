import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { changeIsLiked, changeIsSaved } from "../store/slices/schemeSlice";
import { useNavigate } from "react-router-dom";

const LikedSchemePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schemeList = useSelector((state) => {
    return state.schemes;
  });

  const handleToggleLike = (scheme, val) => {
    const data = {
      scheme,
      val,
    };
    dispatch(changeIsLiked(data));
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

  const LikedSchemes = schemeList.map((scheme) => {
    return (
      scheme.isLiked && (
        <div key={scheme.id}>
          <Card
            scheme={scheme}
            handleToggleLike={handleToggleLike}
            toggleIsSaved={toggleIsSaved}
            handleReadScheme={handleReadScheme}
          />
        </div>
      )
    );
  });
  const isAnySaved = LikedSchemes.every((el) => el === false);

  return <div>{isAnySaved ? <h1>No Liked Schemes!!!</h1> : LikedSchemes}</div>;
};

export default LikedSchemePage;
