import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AstarDemo from "./pages/projects/AstarDemo";
import FlightMapDemo from "./pages/projects/FlightMapDemo";

//<Route path="*" element={<NoPage />} />
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/projects" element={<Projects />}>
            <Route path="astardemo" element={<AstarDemo />}/>
            <Route path="flightmapdemo" element={<FlightMapDemo />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
