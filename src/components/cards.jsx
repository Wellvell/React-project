import Card from './card';
import { words } from './data';
import './assets/styles/cards.scss';
import {useState} from "react";
import arrowLeft from './assets/img/arrow-left.png';
import arrowRight from './assets/img/arrow-right.png';


function Cards() {

    const [index, setIndex] = useState(0)

    const slideLeft = () => {
        setIndex(index - 1);
    };

    const slideRight = () => {
        setIndex(index + 1);
    };


    return (
        <div className="App">
            <div className="card-container">
                <button className="leftBtn"
                onClick={slideLeft}>
                    <img src={arrowLeft} alt="arrow left"></img>
                </button>
                {words.map((word, n) => {
                    let position = n > index ? "nextCard" : n === index ? 
                    "activeCard" : "prevCard";
                    return <Card key={word.word} {...word} cardStyle={position}/>;
                })}
                <button className="rightBtn"
                onClick={slideRight}>
                    <img src={arrowRight} alt="arrow right"></img>
                </button>
            </div>
        </div>
    );
}

export default Cards;