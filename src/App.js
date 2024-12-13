import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import MapPage from "./components/InfoPage/MapPage";
import InfoPage from "./components/InfoPage/InfoPage";
import FAQPage from "./components/InfoPage/FAQ"; // FAQ 페이지
import TestPage from "./components/InfoPage/TestPage";
import MenuCategory from "./components/InfoPage/MenuCategory";
import GuidePage from "./components/InfoPage/GuidePage";

function App() {
  return (
    <Router>
      <div className="App">
        <MenuCategory />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/Info" element={<InfoPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/FAQ" element={<FAQPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
