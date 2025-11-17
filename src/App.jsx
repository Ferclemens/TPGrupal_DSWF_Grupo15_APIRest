import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personajes from "./components/Personajes";
import Error from "./components/Error";
import "./styles.css";

// RUTEO

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Personajes />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
