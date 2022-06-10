import { useState } from 'react';
import "./card.css";
import dice from '../images/icon-dice.svg';

const Card = () => {
    const originId = 117;
    const originSentence = "It is easy to sit up and take notice, what's difficult is getting up and taking action.";
    const [id, setId] = useState(originId);
    const [sentence, setSentence] = useState(originSentence);

    let allowClick = true;

    const handleClick = () => {
        if (allowClick) {
            allowClick = false;
            fetch("https://api.adviceslip.com/advice").then(res => res.json()).then(result => {
                const slip = result.slip;
                const id = slip.id;
                const advice = slip.advice;
                setId(id);
                setSentence(advice);
                allowClick = true;
            });
        }
    };

    return (
        <div className="card">
            <header className="header">
                <p className="ident">
                    <span className="ident__advice">ADVICE</span>
                    <span className="ident__pound-sign">#</span>
                    <span className="ident__number">{id}</span>
                </p>
            </header>
            <main className="main">
                <h1 className="sentence"><q className="quotes">{sentence}</q></h1>
                <div className="divider"></div>
                <div className="button" onClick={handleClick}>
                    <img className="dice" src={dice} alt="dice"></img>
                </div>
            </main>
        </div>
    );
};

export default Card;
