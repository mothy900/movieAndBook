import React from "react";
import AppRouter from "./Router";
//import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <AppRouter />
      </div>
      <div className="footer">
        <footer className="footer-print">
          &copy; {new Date().getFullYear()} Do Jieun!
        </footer>
      </div>
    </>
  );
}

export default App;
