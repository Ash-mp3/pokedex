import React from "react";
import { Route, Routes } from "react-router-dom";
import PokeProvider from "./components/PokeContext";
import Dex from "./components/Dex";
import PokeList from "./components/PokeList";
const App = () => {
  return (
    <PokeProvider>
      <div className="App h-full">
        <div className="bodyDiv h-full flex justify-center items-center">
          <Routes>
            <Route path="/" element={<PokeList />} />
            <Route path="/Dex" element={<Dex />} />
          </Routes>
        </div>
      </div>
    </PokeProvider>
  );
};
export default App;
