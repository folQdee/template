import React from "react";
import Input from "./components/Input";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { MainProvider } from "./context";

function App() {
  return (
    <MainProvider>
      <div className="wrapper">
        <header className="header">
          <h1 className="metal-finder-title">Blackened Sound</h1>
          <Input />
        </header>
        <Main />
        <Footer />  {}
      </div>
    </MainProvider>
  );
}

export default App;
