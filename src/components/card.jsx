import { useState } from 'react';
import './assets/styles/card.scss';

function Card() {

    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    }

    return (
        <div className="card">
            <div className="card__front">
                <p className="card__front__word">butterfly</p>
                <p className="card__front__transcription">[ ˈbʌtəflaɪ ]</p>
                <button onClick={handleChange} className={(pressed ? "card__front__translate" : "card__front__button")}>{
                    pressed? "бабочка": "Перевод"
                }</button>
            </div>           
            <div className="card__buttons-container">
                <button className="card__buttons-container__btn1 card__buttons-container__buttons">
                    Don't know
                </button>
                <button className="card__buttons-container__btn2 card__buttons-container__buttons">
                    Remaining cards
                </button>
                <button className="card__buttons-container__btn3 card__buttons-container__buttons">
                    Know
                </button>
            </div>
        </div>
    );
}

export default Card;