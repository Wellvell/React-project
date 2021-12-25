import TableWords from './tableWords';
import './assets/styles/table.scss';
import { useEffect, useState } from 'react';

function Table(props) {

    const [data, setData] = useState(props.data)

    useEffect(() => {
        setData(data);
    }, [data])

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
                        data.map((word, index) =>
                            <TableWords key={word.id}
                                id={word.id}
                                word={word.english}
                                transcription={word.transcription}
                                translate={word.russian}
                                buttons={word.buttons}
                                index={data[index + 1]}>
                            </TableWords>
                        )
                    }
                </tbody>
            </table >
        </div>
    );
}

export default Table;