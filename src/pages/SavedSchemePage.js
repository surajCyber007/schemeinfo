import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { changeIsSaved } from "../store";
import { useNavigate } from "react-router-dom";

const SavedSchemePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schemeList = useSelector((state) => {
    return state.schemes;
  });

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

  const savedSchemes = schemeList.map((scheme) => {
    return (
      scheme.isSaved && (
        <div key={scheme.id}>
          <Card
            scheme={scheme}
            toggleIsSaved={toggleIsSaved}
            handleReadScheme={handleReadScheme}
          />
        </div>
      )
    );
  });

  const isAnySaved = savedSchemes.every((el) => el === false);

  return <div>{isAnySaved ? <h1>No Saved Schemes!!!</h1> : savedSchemes}</div>;
};

export default SavedSchemePage;
