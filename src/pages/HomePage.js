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
  const filterArr = useSelector((state) => {
    console.log(state.filterVal.filterTerms);
    return state.filterVal.filterTerms;
  });
  console.log(filterArr);

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
    console.log("scheme", scheme)
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

        <div className="flex relative items-center space-x-2">
          {isFilterVisible && (
            <div>
              <div className="bg-slate-200 opacity-30 fixed inset-0"></div>
              <div className="fixed inset-x-24 inset-y-auto bg-white flex flex-col justify-center items-center space-y-1 rounded-xl py-2">
                <SearchFilter toggleFilterVisibility={toggleFilterVisibility} />
              </div>
            </div>
          )}
          <button onClick={toggleFilterVisibility}>
            {<BsFilterLeft size={24} />}
          </button>
        </div>
      </div>
      {schemeList
        .filter(
          (scheme) =>
            scheme.title.toLowerCase().includes(searchTerm) ||
            scheme.description.toLowerCase().includes(searchTerm)
        )
        .filter((scheme) => filterArr.length > 0 ? filterArr.includes(scheme.type) : scheme)
        .slice(0, displayCount)
        .map((scheme) => {
          const title = scheme.title.toLowerCase();
          const description = scheme.description.toLowerCase();
          const searchTermIndexInTitle = title.indexOf(
            searchTerm.toLowerCase()
          );
          const searchTermIndexInDescription = description.indexOf(
            searchTerm.toLowerCase()
          );

          return (
            <div key={scheme.id}>
              <Card
                scheme={{
                  ...scheme,
                  title:
                    searchTermIndexInTitle !== -1 ? (
                      <>
                        {scheme.title.substring(0, searchTermIndexInTitle)}
                        <span className="bg-yellow-500 text-white">
                          {scheme.title.substring(
                            searchTermIndexInTitle,
                            searchTermIndexInTitle + searchTerm.length
                          )}
                        </span>
                        {scheme.title.substring(
                          searchTermIndexInTitle + searchTerm.length
                        )}
                      </>
                    ) : (
                      scheme.title
                    ),
                  description:
                    searchTermIndexInDescription !== -1 ? (
                      <>
                        {scheme.description.substring(
                          0,
                          searchTermIndexInDescription
                        )}
                        <span className="bg-yellow-500 text-white">
                          {scheme.description.substring(
                            searchTermIndexInDescription,
                            searchTermIndexInDescription + searchTerm.length
                          )}
                        </span>
                        {scheme.description.substring(
                          searchTermIndexInDescription + searchTerm.length
                        )}
                      </>
                    ) : (
                      scheme.description
                    ),
                }}
                
                toggleIsSaved={toggleIsSaved}
                handleReadScheme={handleReadScheme}
              />
            </div>
          );
        })}
      <Button handleClick={toggleShowAll} primary textWhite rounded>
        {showAll ? "View Less" : "View More"}
      </Button>
    </div>
  );
};

export default HomePage;
