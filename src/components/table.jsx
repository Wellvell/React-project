import TableWords from './tableWords';
import './assets/styles/table.scss';
import { useContext } from 'react';
import DataContext from './context';

function Table() {

    const { data, setData } = useContext(DataContext);

    const deleteWords = (id) => {
        const filteredArray = data.filter((word) => word.id !== id);
        setData(filteredArray);
    };

    const updateWords = (id) => {
        const filteredArray = data;
        console.log(id);
        console.log(data);
        setData(filteredArray);
    };

    const addWords = (id, word) => {
        const filteredArray = data.filter((word) => word.id !== id);
        filteredArray.push(word)
        setData(filteredArray);
    };

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
                                index={data[index + 1]}
                                deleteData={deleteWords}
                                updateData={updateWords}
                                addData={addWords}>
                            </TableWords>
                        )
                    }
                </tbody>
            </table >
        </div>
    );
}

export default Table;