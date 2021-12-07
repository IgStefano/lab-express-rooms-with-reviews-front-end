import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={Home} />
        <Route path="/newroom" element="../pages/NewRoom.js" />
        <Route path="/home/:id" element="../pages/RoomDetails.js" />
      </Routes>
    </div>
  );
}

export default App;
