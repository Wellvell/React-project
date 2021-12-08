import { useState } from 'react';
import './assets/styles/card.scss';

function Card(props) {

    const [initialState, setInitialState] = useState({ 
        word: "server load",
        transcription: "",
        translate: "",
        index: 0,
        lenght: 0
    });
    
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
        if (pressed !== true){
            props.addToCard();
        }
    }

    if (props.word === undefined){
        return (
            <div className={"card"}>
                <div className="card__front">
                    <p className="card__front__word">{initialState.word}</p>
                    <p className="card__front__transcription">{initialState.transcription}</p>
                    <button onClick={handleChange} className={(pressed ? "card__front__translate" : "card__front__button")}>{
                        pressed? `${initialState.translate}`: "Перевод"
                    }</button>
                    <p className="card__front__numbers">{initialState.index}/{initialState.length}</p>
                </div>              
            </div>
        );
    }
    else{
        return (
            <div className={"card"}>
                <div className="card__front">
                    <p className="card__front__word">{props.word}</p>
                    <p className="card__front__transcription">{props.transcription}</p>
                    <button onClick={handleChange} className={(pressed ? "card__front__translate" : "card__front__button")}>{
                        pressed? `${props.translate}`: "Перевод"
                    }</button>
                    <p className="card__front__numbers">{props.index}/{props.length}</p>
                </div>              
            </div>
        );
    }
}

export default Card;