import React from "react";
import { useSelector } from "react-redux";

const LikedSchemePage = () => {
  const schemeList = useSelector((state) => {
    return state.schemes;
  });
  return (
    <div>
      {schemeList.map((scheme) => {
        return (
          scheme.isLiked && (
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

export default LikedSchemePage;
