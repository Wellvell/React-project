import './assets/styles/header.scss';
import all from './assets/img/reading-book.png';
import cards from './assets/img/card-game.png';

function Header() {
    return (
        <div className="header">
            <p className="header__text">Welcome to English club!</p>
            <button className="header__buttons">
                <img src={all} />
                <p className="header__buttons__text">All words</p>
            </button>
            <button className="header__buttons">
                <img src={cards} />
                <p className="header__buttons__text">My cards</p>
            </button>
        </div>
    );
}

export default Header;