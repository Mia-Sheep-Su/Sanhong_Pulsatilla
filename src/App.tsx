import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Index from "./pages/indexpage";
import Story from "./pages/story";
import PhotoPage from "./pages/photo";
import Crisis from "./pages/crisis";
import "./App.css";

export default function BulbulPage() {

  return (
    <div className="bulbul-container">
      <Sidebar />
      {/* Main content */}
      <div className="main">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/story" element={<Story />} />
          <Route path="/photo" element={<PhotoPage />} />
          <Route path="/crisis" element={<Crisis />} />
        </Routes>
      </div>
    </div>
  );
}
