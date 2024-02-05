import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({ scheme, toggleIsSaved, handleReadScheme }) => {
  return (
    <>
      <div key={scheme.id}>
        <div className="bg-indigo-100 my-2 flex justify-between py-2 px-4 rounded-md">
          <div>
            <h4 className="pb-1">{scheme.title}</h4>
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
    </>
  );
};

export default Card;
