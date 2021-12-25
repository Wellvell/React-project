import Card from './card';
import './assets/styles/cards.scss';
import { useState, useRef } from 'react';
import arrowLeft from './assets/img/arrow-left.png';
import arrowRight from './assets/img/arrow-right.png';
import { CSSTransition } from 'react-transition-group'
import { useEffect, useContext } from 'react';
import DataContext from './context';


function Cards() {

    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    const [itemsCard, setItemsCars] = useState(0);
    const [arr, setArr] = useState([]);
    const { data, setData } = useContext(DataContext);

    const slideLeft = () => {
        setIndex(index - 1);
        setShow(!show);
    };

    const slideRight = () => {
        setIndex(index + 1);
        setShow(!show);
    };

    const addToCard = () => {
        if (arr[index] !== 1) {
            arr[index] = 1;
            setItemsCars(itemsCard + 1);
        }
    }

    const ref = useRef();

    console.log(data)

    if (data.length !== 0) {
        return (
            <div className="App">
                <p className="counter"> Количество выученных слов: {itemsCard}</p>
                <div className="card-container">
                    {index > 0 && (
                        <button className="leftBtn" onClick={() => slideLeft()}>
                            <img src={arrowLeft} alt="arrow left"></img>
                        </button>
                    )}
                    {index < data.length - 1 && (
                        <button className="rightBtn" onClick={() => slideRight()}>
                            <img src={arrowRight} alt="arrow right"></img>
                        </button>
                    )}
                    {index > -1 && (
                        <CSSTransition in={show} classNames="alert" timeout={300}>
                            <Card
                                key={data[index].id}
                                word={data[index].english}
                                transcription={data[index].transcription}
                                translate={data[index].russian}
                                index={index + 1}
                                length={data.length}
                                addToCard={addToCard}
                                ref={ref}
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
    else {
        return (
            <p>ожидается загрузка</p>
        )
    }
}

export default Cards;