import "./App.css";
import Login from "./components/Login";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PrivateComponent from "./components/PrivateComponent";
import Recipes from "./components/Recipes";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route element={<PrivateComponent />}>
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
