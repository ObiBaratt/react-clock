import DigitalClock from "./components/DigitalClock/DigitalClock";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import Navbar from "./components/Navbar/Navbar";

import { useState } from "react";

function App() {

  const [clock, setClock] = useState('digital');

  const digital = () => {
    console.log('digital')
    setClock('digital');
  }

  const analog = () => {
    console.log('analog')

    setClock('analog');
  }

  return (
    <>
      <Navbar digital={digital} analog={analog} />
      { clock === "analog" ?
      <AnalogClock />
      : clock === "digital" ?
      <DigitalClock />
      : null }
    </>
  );
}

export default App;
