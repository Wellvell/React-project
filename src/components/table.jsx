import TableWords from './tableWords';
import './assets/styles/table.scss';
import { useState } from 'react';

function Table(props) {

    const [data, setData] = useState(props.data)

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
                        data.map((word) =>
                            <TableWords key={word.id}
                                word={word.english}
                                transcription={word.transcription}
                                translate={word.russian}
                                buttons={word.buttons}></TableWords>
                        )
                    }
                </tbody>
            </table >
        </div>
    );
}

export default Table;