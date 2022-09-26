import "./Navbar.css";
import "../../index.css";

export default function Navbar({ analog, digital }) {
    return (
        <nav>
            <button className="digital toggle" onClick={digital}>Digital</button>
            <h1>React Clock!</h1>
            <button className="toggle analog" onClick={analog}>Analog</button>
        </nav>
    )
}
