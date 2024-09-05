import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PhoneOtpForm from "./components/PhoneOtpLogin";

function App() {
  

  return (
    <>
      <div className="App">
        <h2> Login with Phone</h2>
        <PhoneOtpForm />
      </div>
    </>
  );
}

export default App;
