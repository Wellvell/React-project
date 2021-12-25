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
        let flag = checkForm(propsWordVal, propsTranscriptionVal, propsTranslateVal)
        if (flag === 1) {
            setPropsWord(propsWordVal);
            setPropsTranscription(propsTranscriptionVal);
            setPropsTranslate(propsTranslateVal);
            setPressed(false);
            updateWord()

            console.log(`word: ${propsWordVal}, transcription: ${propsTranscriptionVal}, translate: ${propsTranslateVal}`);
        }
    }

    const updateWord = () => {
        let id = props.id;
        let english = propsWordVal;
        let transcription = propsTranscriptionVal;
        let russian = propsTranslateVal;
        let tags = props.teg
        if (tags.length === 0) {
            tags = prompt("Введите тег для слова");
            let tagTest = /^[А-Яа-яЁё\s]+$/;
            if (tagTest.test(tags)) {
                const word = { english, transcription, russian, tags }
                const options = {
                    method: 'POST',
                    body: JSON.stringify(word)
                };
                fetch(`/api/words/${id}/update`, options).then(response => response.json())
                    .then(data => console.log(data));
                alert("Слово изменено!")
            }
            else {
                alert("Убедитесь, что вы вводите символы на кириллице.")
            }
        }
        else {
            const word = { english, transcription, russian, tags }
            const options = {
                method: 'POST',
                body: JSON.stringify(word)
            };
            fetch(`/api/words/${id}/update`, options).then(response => response.json())
                .then(data => console.log(data));
            alert("Слово изменено!")
        }



    }

    const handleDelte = () => {
        let id = props.id;
        const options = {
            method: 'POST',
            headers: {
                'Contept-Type': 'application/json'
            },
        };
        fetch(`/api/words/${id}/delete`, options).then(response => response.json())
            .then(data => console.log(data));
        alert("Слово удалено!")
    }

    const addWord = () => {
        let flag = checkForm(propsWordVal, propsTranscriptionVal, propsTranslateVal)
        if (flag) {
            let id = props.id + 1;
            let english = propsWordVal;
            let transcription = propsTranscriptionVal;
            let russian = propsTranslateVal;
            if (english === propsWord && transcription === propsTranscription && russian === propsTranslate) {
                alert("Такое слово уже существует!")
            }
            else {
                let tags = prompt("Введите тег для слова");
                let tagTest = /^[А-Яа-яЁё\s]+$/;
                if (tagTest.test(tags)) {
                    const word = { id, english, transcription, russian, tags }
                    console.log(word);
                    const options = {
                        method: 'POST',
                        headers: {
                            'Contept-Type': 'application/json'
                        },
                        body: JSON.stringify(word)
                    };
                    fetch(`/api/words/add`, options).then(response => response.json())
                        .then(data => console.log(data));
                    alert("Слово добавлено!")
                }
                else {
                    alert("Убедитесь, что вы вводите символы на кириллице.")
                }

            }
        }

    }

    if (!props.index) {
        return (
            <tr>
                <td>{pressed ? <input className={`${classInput}`} onChange={handleInputChange} name="word" value={propsWordVal} /> : <input readOnly className="input" value={propsWord} />}</td>
                <td>{pressed ? <input className={`${classInput}`} onChange={handleInputChange} name="transcription" value={propsTranscriptionVal} /> : <input readOnly className="input" value={propsTranscription} />}</td>
                <td>{pressed ? <input className={`${classInput}`} onChange={handleInputChange} name="translate" value={propsTranslateVal} /> : <input readOnly className="input" value={propsTranslate} />}</td>
                <td className="buttons">
                    <button title={pressed ? "cancel edit" : "edit"} onClick={handleChange} className="edit"><img src={edit} alt="btn edit" /></button>
                    <button title="save" onClick={putForm} className={`${classButton}`}><img src={save} alt="btn save" /></button>
                    <button onClick={addWord} className={`${classButton}`}> Add new word </button>
                    <button title="delete" className="del" onClick={handleDelte} ><img src={del} alt="btn delete" /></button>
                </td>

            </tr>
        );
    }
    else {
        return (
            <tr>
                <td>{pressed ? <input className={`${classInput}`} onChange={handleInputChange} name="word" value={propsWordVal} /> : <input readOnly className="input" value={propsWord} />}</td>
                <td>{pressed ? <input className={`${classInput}`} onChange={handleInputChange} name="transcription" value={propsTranscriptionVal} /> : <input readOnly className="input" value={propsTranscription} />}</td>
                <td>{pressed ? <input className={`${classInput}`} onChange={handleInputChange} name="translate" value={propsTranslateVal} /> : <input readOnly className="input" value={propsTranslate} />}</td>
                <td className="buttons">
                    <button title={pressed ? "cancel edit" : "edit"} onClick={handleChange} className="edit"><img src={edit} alt="btn edit" /></button>
                    <button title="save" onClick={putForm} className={`${classButton}`}><img src={save} alt="btn save" /></button>
                    <button title="delete" className="del" onClick={handleDelte}><img src={del} alt="btn delete" /></button>
                </td>
            </tr>
        );
    }
}

export default TableWords;