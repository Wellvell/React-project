import Card from './card';
import { words } from './data';
import './assets/styles/cards.scss';
import { useState, useEffect, useRef, forwardRef } from 'react';
import arrowLeft from './assets/img/arrow-left.png';
import arrowRight from './assets/img/arrow-right.png';
import {CSSTransition} from 'react-transition-group'


function Cards() {

    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    const [itemsCard, setItemsCars] = useState(0);
    const [arr, setArr] = useState([]);

    const slideLeft = () => {
        setIndex(index - 1);
        setShow(!show);
    };

    const slideRight = () => {
        setIndex(index + 1);
        setShow(!show);
    };

    const addToCard = () => {
        if (arr[index]!==1){
            arr[index] = 1;
            setItemsCars(itemsCard + 1);
        }
    }

    return (
        <div className="App">
            <p className="counter"> Количество выученных слов: {itemsCard}</p> 
            <div className="card-container">
                {index > 0 && (
                <button className="leftBtn" onClick={() => slideLeft()}>
                    <img src={arrowLeft} alt="arrow left"></img>
                </button>
                )}
                {index < words.length - 1 && (
                <button className="rightBtn" onClick={() => slideRight()}>
                    <img src={arrowRight} alt="arrow right"></img>
                </button>
                )}
                {index > -1 && (
                    <CSSTransition in={show} classNames="alert" timeout={300}>
                        <Card
                        key={words[index].word}
                        word={words[index].word}
                        transcription={words[index].transcription}
                        translate={words[index].translate}
                        index={index+1}
                        length={words.length}
                        addToCard={addToCard}
                    />
                    </CSSTransition>
                )}
                <div className="card-container__buttons-container">
                    <button className="card-container__buttons-container__btn1 card-container__buttons-container__buttons">
                        Don't know
                    </button>
                    <button className="card-container__buttons-container__btn2 card-container__buttons-container__buttons">
                        Remaining cards
                    </button>
                    <button className="card-container__buttons-container__btn3 card-container__buttons-container__buttons">
                        Know
                    </button>
                </div>   
            </div>
        </div>
    );
}

export default Cards;