import DigitalClock from "./components/DigitalClock/DigitalClock";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import { useState } from "react";

function App() {

  const [clock, setClock] = useState('digital');

  return (
    <>
      <nav>
        <button onClick={() => setClock("analog")}>Analog</button>
        <button onClick={() => setClock("digital")}>Digital</button>
      </nav>


      { clock === "analog" ?
      <AnalogClock />
      : clock === "digital" ?
      <DigitalClock />
      : null }
    </>
  );
}

export default App;
