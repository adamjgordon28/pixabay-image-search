import SearchedImagePreview from "../SearchedImagePreview/SearchedImagePreview";

import "./SearchedImagesResults.css";

const SearchedImagesResults = ({ searchedImages }) => {
  return (
    <div className="searched-images-results">
      {searchedImages?.map((image) => {
        return <SearchedImagePreview image={image} key={image?.previewURL} />;
      })}
    </div>
  );
};

export default SearchedImagesResults;
