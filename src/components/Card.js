import "./card.css";
import mobileDivider from '../images/pattern-divider-mobile.svg';
import dice from '../images/icon-dice.svg';

const Card = () => {

    return (
        <div className="card">
            <header className="header">
                <p className="title">
                    <span className="title__advice">ADVICE</span>
                    <span className="title__pound-sign">#</span>
                    <span className="title__number">117</span>
                </p>
            </header>
            <main className="main">
                <h1 className="sentence">“It is easy to sit up and take notice, what's difficult is getting up and taking action.”</h1>
                <img className="divider" src={mobileDivider} alt="divider"></img>
                <div className="button">
                    <img className="dice" src={dice} alt="dice"></img>
                </div>
            </main>
        </div>
    );
};

export default Card;
