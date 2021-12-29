import edit from './assets/img/magic-wand.png';
import save from './assets/img/magic-book.png';
import del from './assets/img/fire.png';
import { useState, useEffect } from 'react';

function TableWords(props) {

    const [pressed, setPressed] = useState(false);

    const [propsWord, setPropsWord] = useState(props.word);
    const [propsTranscription, setPropsTranscription] = useState(props.transcription);
    const [propsTranslate, setPropsTranslate] = useState(props.translate);

    const [validation, setValidation] = useState(true);
    const [classButton, setClassButton] = useState("save-hide");
    const [classInput, setClassInput] = useState("");

    const handleChange = () => {
        setPressed(!pressed);
        setPropsWord(props.word);
        setPropsTranscription(props.transcription)
        setPropsTranslate(props.translate)

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
            setPropsWord(value)
        else if (name === "transcription")
            setPropsTranscription(value)
        else
            setPropsTranslate(value)

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

    function checkForm(wVal, scripV, tVal) {
        let flag = 1;
        let wordTest = /^[a-zA-Z\s]+$/;
        let TranscriptionTest = /[^0-9]/;
        let TranslateTest = /^[А-Яа-яЁё\s]+$/;


        if (wordTest.test(wVal))
            flag = flag * 1;
        else {
            flag = 0;
            alert("Поле Word заполнено некорректно! Убедитесь, что вы вводите символы на латинице.")
        }

        if (TranscriptionTest.test(scripV))
            flag = flag * 1;
        else {
            flag = 0;
            alert("Поле Transcription заполнено некорректно! Убедитесь, что вы не вводите цифры.")
        }

        if (TranslateTest.test(tVal))
            flag = flag * 1;
        else {
            flag = 0;
            alert("Поле Translate заполнено некорректно! Убедитесь, что вы вводите символы на кириллице.")
        }
        return flag;
    }

    const putForm = () => {
        let flag = checkForm(propsWord, propsTranscription, propsTranslate)
        if (flag === 1) {
            setPropsWord(propsWord);
            setPropsTranscription(propsTranscription);
            setPropsTranslate(propsTranslate);
            setPressed(false);
            updateWord()

            console.log(`word: ${propsWord}, transcription: ${propsTranscription}, translate: ${propsTranslate}`);
        }
    }

    const updateWord = () => {
        let id = props.id;
        let english = propsWord;
        let transcription = propsTranscription;
        let russian = propsTranslate;
        let tags = props.teg
        const word = { id, english, transcription, russian, tags };
        props.handlerInputSave(word);
    }

    const handleDelte = () => {
        let id = props.id;
        props.handlerDelete(id);
    }

    return (
        <tr>
            <td>{pressed ? <input className={`${classInput}`} onChange={handleInputChange} name="word" value={propsWord} /> : <input readOnly className="input" value={propsWord} />}</td>
            <td>{pressed ? <input className={`${classInput}`} onChange={handleInputChange} name="transcription" value={propsTranscription} /> : <input readOnly className="input" value={propsTranscription} />}</td>
            <td>{pressed ? <input className={`${classInput}`} onChange={handleInputChange} name="translate" value={propsTranslate} /> : <input readOnly className="input" value={propsTranslate} />}</td>
            <td className="buttons">
                <button title={pressed ? "cancel edit" : "edit"} onClick={handleChange} className="edit"><img src={edit} alt="btn edit" /></button>
                <button title="save" onClick={putForm} className={`${classButton}`}><img src={save} alt="btn save" /></button>
                <button title="delete" className="del" onClick={handleDelte}><img src={del} alt="btn delete" /></button>
            </td>
        </tr>
    );
}

export default TableWords;