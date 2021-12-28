import { useState, useEffect } from 'react';

function AddWordForm(props) {

    const [word, setWord] = useState("Word");
    const [transcript, setTranscription] = useState("Transcription");
    const [translate, setTranslate] = useState("Translate");

    const [validation, setValidation] = useState(true);

    const [classInput, setClassInput] = useState("");

    useEffect(() => {
        if (!validation) {
            setClassInput("input-block");
        }
        else {
            setClassInput("");
        }

    }, [validation])

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
            setWord(value)
        else if (name === "transcription")
            setTranscription(value)
        else
            setTranslate(value)

    }

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

    const checkWords = (len) => {
        let flag = false;
        let i = 0;
        while (i < len && !flag) {
            if (props.data[i].english === word)
                flag = true;
            i++;
        }

        if (!flag) {
            i = 0;
            while (i < len && !flag) {
                if (props.data[i].transcription === transcript)
                    flag = true;
                i++;
            }

            if (!flag) {
                i = 0;
                while (i < len && !flag) {
                    if (props.data[i].russian === translate)
                        flag = true;
                    i++;
                }
                return flag;

            }
            else {
                return flag
            }

        }
        else {
            return flag
        }
    }

    const addWord = () => {
        let flag = checkForm(word, transcript, translate)
        if (flag) {
            let len = Object.keys(props.data).length;
            let id = props.data[len - 1].id + 1;
            let english = word;
            let transcription = transcript;
            let russian = translate;
            let check = checkWords(len - 1);
            if (check) {
                alert("Такое слово уже существует!")
            }
            else {
                let tags = prompt("Введите тег для слова");
                let tagTest = /^[А-Яа-яЁё\s]+$/;
                if (tagTest.test(tags)) {
                    const word = { id, english, transcription, russian, tags }
                    const options = {
                        method: 'POST',
                        headers: {
                            'Contept-Type': 'application/json'
                        },
                        body: JSON.stringify(word)
                    };
                    fetch(`/api/words/add`, options).then(response => response.json())
                        .then(data => {
                            console.log(data)
                            props.addData(id, data)
                        });
                    alert("Слово добавлено!")
                }
                else {
                    alert("Убедитесь, что вы вводите символы на кириллице.")
                }

            }
        }

    }

    return (
        <div className='form'>
            <input type="text" placeholder={word} className={`${classInput}`} onChange={handleInputChange} name="word" />
            <input type="text" placeholder={transcript} className={`${classInput}`} onChange={handleInputChange} name="transcription" />
            <input type="text" placeholder={translate} className={`${classInput}`} onChange={handleInputChange} name="translate" />
            <button onClick={addWord}> Add </button>
        </div>
    )
}


export default AddWordForm