import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import MealDetails from "./components/MealDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/meal/:id" element={<MealDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
