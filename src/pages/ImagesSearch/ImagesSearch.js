import { useEffect, useRef, useState } from "react";
import SearchedImagesResults from "../../components/SearchedImagesResults/SearchedImagesResults";
import { imageSearch } from "../../utils";

import "./ImagesSearch.css";

const ImagesSearch = () => {
  const [imageSearchQuery, setImageSearchQuery] = useState("");
  const [searchedImages, setSearchedImages] = useState([]);

  const searchInputRef = useRef(null);
  useEffect(() => {
    return searchInputRef?.current?.focus();
  });

  useEffect(() => {
    const searchImages = async ({ query }) => {
      const encodedQuery = encodeURIComponent(query);
      const result = await imageSearch({ query: encodedQuery });
      const resultImages = result?.hits;
      if (resultImages) {
        setSearchedImages(resultImages);
      }
    };

    searchImages({ query: imageSearchQuery });
  }, [imageSearchQuery]);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setImageSearchQuery(query);
  };
  return (
    <div className="images-search">
      <div className="images-search-title-container">
        <span>Pixabay Image Search</span>
      </div>
      <div className="images-search-input-container">
        <input
          onChange={handleInputChange}
          ref={searchInputRef}
          value={imageSearchQuery}
        />
      </div>
      <SearchedImagesResults searchedImages={searchedImages} />
    </div>
  );
};

export default ImagesSearch;
