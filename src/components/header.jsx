import './assets/styles/header.scss';
import all from './assets/img/reading-book.png';
import cards from './assets/img/card-game.png';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Table from './table';
import Cards from './cards';
import Error from './error';

function Header() {

    return (
        <BrowserRouter>
            <div className="header">
            <p className="header__text">Welcome to English club!</p>
            <Link to="/"> <button className="header__buttons">
                <img src={all} alt="btn all words"/>
                <p className="header__buttons__text">All words</p>
            </button> </Link>
            <Link to="/game"> <button className="header__buttons">
                <img src={cards} alt="btn cards"/>
                <p className="header__buttons__text">My cards</p>
            </button> </Link>
        </div>
        <Routes>
            <Route path="/game" element={<Cards/>}/>
            <Route exact path="/" element={<Table/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
        </BrowserRouter>
    );
}


export default Header;