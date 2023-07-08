import { Link, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import AdvancedView from "./views/Advanced";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advanced-view" element={<AdvancedView />} />
      </Routes>
    </>
  );
}

export default App;
