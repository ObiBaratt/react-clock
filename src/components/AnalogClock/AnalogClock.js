import { useEffect, useState } from "react";
import "./AnalogClock.css";
// import "../../styles/general.css";

export default function AnalogClock() {
    const [date, setDate] = useState(new Date());
    const [hour, setHour] = useState(date.getHours());
    const [min, setMin] = useState(date.getMinutes());
    const [sec, setSec] = useState(date.getSeconds());

    const updateTime = () => {
        setDate(new Date());
        console.log(date);
        setHour(date.getHours());
        setMin(date.getMinutes());
        setSec(date.getSeconds());
    };


    useEffect(() => {
        const secondTimer = setInterval(updateTime, 1000);
        return () => {
            clearInterval(secondTimer);
        };
    });

    return (
        <div className="clockBody">
            <div className="analogClock">
                <div className="outerClock">
                    <div className="mark thirty"></div>
                    <div className="mark sixty"></div>
                    <div className="mark onetwenty"></div>
                    <div className="mark onefifty"></div>
                    <div className="innerClock">
                        <div className="clockHand hour"
                            style={{
                                transform: `rotate(${hour * 30 + 90}deg)`
                            }}>
                        </div>
                        <div className="clockHand min"
                            style={{
                                transform: `rotate(${min * 6 + 90}deg)`
                            }}>
                        </div>
                        <div className="clockHand sec"
                        style={{
                            transform: `rotate(${sec * 6 + 90}deg)`
                        }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
