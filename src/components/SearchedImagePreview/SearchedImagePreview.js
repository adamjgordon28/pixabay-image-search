import { useNavigate } from "react-router-dom";
import "./SearchedImagePreview.css";

const SearchedImagePreview = ({ image }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/image", {
      state: {
        image,
      },
    });
  };
  return (
    <>
      <div
        className="searched-image-preview"
        key={image?.previewURL}
        onClick={clickHandler}
      >
        <img alt="" src={image?.previewURL} />
      </div>
    </>
  );
};

export default SearchedImagePreview;
