/* eslint-disable react/prop-types */
import { useState } from "react";
import arrow from "/arrow1.png";

const Accordian = ({question, answer})=>{
    const [active, setActive] = useState(false);

    const toggleShow = ()=>{
        setActive(!active);
    }
    return (
        <div className={`faq ${active? "active" : ""}`}>
            <div className="question" onClick={toggleShow}>
                <img src={arrow} className="arrow"/>
                <p>{question}</p>
            </div>
            <div className="solution">{answer}</div>
        </div>
    );
}

export default Accordian;