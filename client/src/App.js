import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Bugs from "./components/Bugs";
import About from "./components/About";
import BugForm from "./components/BugForm";
import BugVaccines from "./components/BugVaccines";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bugs" element={<Bugs />} />
        <Route path="/bugs/:id/vaccines" element={<BugVaccines />} />
        <Route path="/bugs/new" element={<BugForm />} />
        <Route path="/bugs/:id/edit" element={<BugForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
