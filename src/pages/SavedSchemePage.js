import React from "react";
import { useSelector } from "react-redux";

const SavedSchemePage = () => {
  const schemeList = useSelector((state) => {
    return state.schemes;
  });

  return (
    <div>
      {schemeList.map((scheme) => {
        return (
          scheme.isSaved && (
            <div key={scheme.id}>
              <h1>{scheme.title}</h1>
              <h1>{scheme.type}</h1>
            </div>
          )
        );
      })}
    </div>
  );
};

export default SavedSchemePage;
