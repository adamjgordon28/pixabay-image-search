import { useLocation, useNavigate } from "react-router-dom";
import { splitStringToArray } from "../../utils";

import "./ImageView.css";

const ImageView = () => {
  const location = useLocation();
  const {
    state: { image },
  } = location;

  const navigate = useNavigate();

  const imageTags = splitStringToArray(image?.tags, ", ");

  const returnToSearchClickHandler = () => {
    navigate("/");
  };

  return (
    <div className="image-view">
      <button onClick={returnToSearchClickHandler}>
        {"< Return to Search"}
      </button>
      <div className="image-view-title-container">
        <span>View Image</span>
      </div>

      <div className="main-image-section-container">
        <div className="main-image-section">
          <div className="main-image-info-section">
            <div className="user-tile">
              <div className="user-tile-image-container">
                <img alt="" src={image?.userImageURL} />
                <span>Posted by: {image?.user}</span>
              </div>
            </div>
            <div className="image-tags-container">
              <span>Tags: </span>
              {imageTags?.map((tag) => {
                return (
                  <div className="image-tag" key={tag}>
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="main-image">
            <img alt="" src={image?.largeImageURL} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageView;
