import './assets/styles/header.scss';
import all from './assets/img/reading-book.png';
import cards from './assets/img/card-game.png';

function Header(props) {

    const {changeModeTable, changeModeCards} = props;

    return (
        <div className="header">
            <p className="header__text">Welcome to English club!</p>
            <button className="header__buttons" onClick={changeModeTable}>
                <img src={all} alt="btn all words"/>
                <p className="header__buttons__text">All words</p>
            </button>
            <button className="header__buttons" onClick={changeModeCards}>
                <img src={cards} alt="btn cards"/>
                <p className="header__buttons__text">My cards</p>
            </button>
        </div>
    );
}

export default Header;