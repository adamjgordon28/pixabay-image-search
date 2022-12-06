import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImagesSearch from "./pages/ImagesSearch/ImagesSearch";
import ImageView from "./pages/ImageView/ImageView";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ImagesSearch />} />
        <Route path="/image" element={<ImageView />} />
      </Routes>
    </Router>
  );
};

export default App;
