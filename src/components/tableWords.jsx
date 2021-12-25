import edit from './assets/img/magic-wand.png';
import save from './assets/img/magic-book.png';
import del from './assets/img/fire.png';
import { useState, useEffect } from 'react';

function TableWords(props) {

    const [pressed, setPressed] = useState(false);

    const [propsWord, setPropsWord] = useState(props.word);
    const [propsTranscription, setPropsTranscription] = useState(props.transcription);
    const [propsTranslate, setPropsTranslate] = useState(props.translate);

    const [propsWordVal, setPropsWordVal] = useState(props.word);
    const [propsTranscriptionVal, setPropsTranscriptionVal] = useState(props.transcription);
    const [propsTranslateVal, setPropsTranslateVal] = useState(props.translate);

    const [validation, setValidation] = useState(true);
    const [classButton, setClassButton] = useState("save-hide");
    const [classInput, setClassInput] = useState("");


    const handleChange = () => {
        setPressed(!pressed);
    }

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        if (value.length === 0) {
            setValidation(false);
        }
        else {
            setValidation(true)
        }
        if (name === "word")
            setPropsWordVal(value)
        else if (name === "transcription")
            setPropsTranscriptionVal(value)
        else
            setPropsTranslateVal(value)

    }

    useEffect(() => {
        if (pressed && validation) {
            setClassButton("save");
            setClassInput("");
        }
        else if (pressed && (validation === false)) {
            setClassButton("save-block");
            setClassInput("input-block");
        }
        else {
            setClassButton("save-hide");
        }

    }, [pressed, validation])

    const putForm = () => {
        let flag = 1;
        let wordTest = /^[a-zA-Z\s]+$/;
        let TranscriptionTest = /[^0-9]/;
        let TranslateTest = /^[А-Яа-яЁё\s]+$/;


        if (wordTest.test(propsWordVal))
            flag = flag * 1;
        else {
            flag = 0;
            alert("Поле Word заполнено некорректно! Убедитесь, что вы вводите символы латинице.")
        }

        if (TranscriptionTest.test(propsTranscriptionVal))
            flag = flag * 1;
        else {
            flag = 0;
            alert("Поле Transcription заполнено некорректно! Убедитесь, что вы не вводите цифры.")
        }

        if (TranslateTest.test(propsTranslateVal))
            flag = flag * 1;
        else {
            flag = 0;
            alert("Поле Translate заполнено некорректно! Убедитесь, что вы вводите символы кириллице.")
        }

        if (flag === 1) {
            setPropsWord(propsWordVal);
            setPropsTranscription(propsTranscriptionVal);
            setPropsTranslate(propsTranslateVal);
            setPressed(false);

            console.log(`word: ${propsWord}, transcription: ${propsTranscription}, translate: ${propsTranslate}`);
        }
    }

    return (
        <tr>
            <td>{pressed ? <input className={`${classInput}`} onChange={handleInputChange} name="word" value={propsWordVal} /> : <input readOnly className="input" value={propsWord} />}</td>
            <td>{pressed ? <input className={`${classInput}`} onChange={handleInputChange} name="transcription" value={propsTranscriptionVal} /> : <input readOnly className="input" value={propsTranscription} />}</td>
            <td>{pressed ? <input className={`${classInput}`} onChange={handleInputChange} name="translate" value={propsTranslateVal} /> : <input readOnly className="input" value={propsTranslate} />}</td>
            <td className="buttons">
                <button title={pressed ? "cancel edit" : "edit"} onClick={handleChange} className="edit"><img src={edit} alt="btn edit" /></button>
                <button title="save" onClick={putForm} className={`${classButton}`}><img src={save} alt="btn save" /></button>
                <button title="delete" className="del"><img src={del} alt="btn delete" /></button>
            </td>
        </tr>
    );
}

export default TableWords;