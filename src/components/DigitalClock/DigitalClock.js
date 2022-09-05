import { useEffect, useState } from "react";
import "./DigitalClock.css";
import "../../index.css";

export default function DigitalClock() {
    const [date, setDate] = useState(new Date().toLocaleTimeString('en-US'));
    const [joined, setJoined] = useState(new Date().toLocaleTimeString('en-US'));
    const [width, setWidth] = useState(window.innerWidth);

    const breakPoint = 1199;

    const updateTime = () => {
        setDate(new Date().toLocaleTimeString('en-US').split(':'));
        setJoined(new Date().toLocaleTimeString('en-US'))
    };

    useEffect(()=> {
        const secondTimer = setInterval(updateTime, 1000);
        return () => {
            clearInterval(secondTimer);
        };
    }, []);


    useEffect(() => {
     const handleWindowResize = () => setWidth(window.innerWidth);
     window.addEventListener("resize", handleWindowResize);

     return () => window.removeEventListener("resize", handleWindowResize);
    },[]);

    return (
        <div className='digitalClock fill-window'>
            <div className="container">
                {width > breakPoint? (
                    <div>{joined}</div>
                ) : (
                    <div>
                    <div>
                    {date[0]}
                </div>
                <div>
                    {date[1]}
                </div>
                <div>
                    {date[2].slice(0, 3)}
                </div>
                </div>
                )

            }

            </div>
        </div>
    )
}
