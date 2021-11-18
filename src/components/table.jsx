import TableWords from './tableWords';
import './assets/styles/table.scss';

const words = [
    {
        word: "hedgehog",
        transcription: "[ ˈhedʒhɒɡв ]",
        translate: "еж",
    },
    {
        word: "unicorn",
        transcription: "[ˈyo͞onəˌkôrn]",
        translate: "единорог"
    },
    {
        word: "cat",
        transcription: "[ kot ]",
        translate: "кот",
    },
    {
        word: "honey",
        transcription: "[ ˈhʌnɪ ]",
        translate: "мёд"
    },
    {
        word: "hello",
        transcription: "[ hello ]",
        translate: "привет"
    },
    {
        word: "butterfly",
        transcription: "[ ˈbʌtəflaɪ ]",
        translate: "бабочка"
    }
]

function Table() {
    return (
        <div className="table">
            <table>
                <tbody>
                    <tr>
                        <th>Word</th>
                        <th>Transcription</th>
                        <th>Translate</th>
                        <th className="buttons-col"></th>
                    </tr>
                    {
                        words.map((word) =>
                            <TableWords word={word.word}
                                transcription={word.transcription}
                                translate={word.translate}
                                buttons={word.buttons}></TableWords>
                        )
                    }
                </tbody>
            </table >
        </div>
    );
}

export default Table;