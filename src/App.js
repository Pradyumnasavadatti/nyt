import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./components";
import Result from "./components/body/results/Result";
import Details from "./components/body/results/Details";
import { useState } from "react";
import context from "./context/Context";
function App() {
  const [point, setPoint] = useState(1);
  const [load, setLoad] = useState({ flag: false, status: 0 });
  return (
    <BrowserRouter>
      <context.Provider value={[point, setPoint, load, setLoad]}>
        <Routes>
          //Default route
          <Route path="/" exact element={<Index />} />
          //Result route
          <Route path="result" exact element={<Result />} />
          <Route path="details" exact element={<Details />} />
        </Routes>
      </context.Provider>
    </BrowserRouter>
  );
}

export default App;
