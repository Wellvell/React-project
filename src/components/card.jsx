import './assets/styles/card.scss';

function Card() {
    return (
        <div className="card">
            <div className="card__front">
                <p className="card__front__word">butterfly</p>
                <p className="card__front__transcription">[ ˈbʌtəflaɪ ]</p>
            </div>
            <div className="card__back">
                <p className="card__back__translate">бабочка</p>
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