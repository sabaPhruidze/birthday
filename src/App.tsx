import "./App.css";
import MainBody from "./components/MainBody";
import ChangeBody from "./components/ChangeBody";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/change" element={<ChangeBody />}></Route>
      </Routes>
    </>
  );
}

export default App;
