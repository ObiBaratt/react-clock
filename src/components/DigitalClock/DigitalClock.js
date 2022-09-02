import { useEffect, useState } from "react";
import "./DigitalClock.css";
import "../../styles/general.css";

export default function DigitalClock() {
    const [date, setDate] = useState(new Date());

    const updateTime = () => {
        setDate(new Date());
    };

    useEffect(()=> {
        const secondTimer = setInterval(updateTime, 1000);
        return () => {
            clearInterval(secondTimer);
        };
    }, []);

    return (
        <div className="container">
            <div
            className="fill-window digitalClock">
                <span>
                    {date.toLocaleTimeString('en-US')}
                </span>
            </div>
        </div>
    )
}
