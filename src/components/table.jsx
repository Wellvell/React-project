import TableWords from './tableWords';
import './assets/styles/table.scss';
import { useContext } from 'react';
import DataContext from './context';

function Table() {

    const { data, setData } = useContext(DataContext);

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
                                teg={word.tags}
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