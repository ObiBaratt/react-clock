import "./AnalogClock.css";

export default function AnalogClock() {
    return (
        <div className="clockBody">
            <div className="analogClock">
                <div className="outerClock">
                    <div className="mark thirty"></div>
                    <div className="mark sixty"></div>
                    <div className="mark onetwenty"></div>
                    <div className="mark onefifty"></div>
                    <div className="innerClock">
                        <div className="clockHand hour"></div>
                        <div className="clockHand min"></div>
                        <div className="clockHand sec"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
