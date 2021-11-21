import TableWords from './tableWords';
import './assets/styles/table.scss';
import { words } from './data';

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