import TableWords from './tableWords';
import './assets/styles/table.scss';
import { useContext, useState } from 'react';
import DataContext from './context';
import AddWordForm from './addWordForm'
import './assets/styles/form.scss'

function Table() {

    const { data, setData } = useContext(DataContext);
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed)
    }

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
        filteredArray.unshift(word)
        setData(filteredArray);
    };

    return (
        <div>
            <button className='add-btn' onClick={handleChange}>Add word form</button>
            <div className={!pressed ? "hide-form" : "form"}>
                {
                    <AddWordForm
                        data={data}
                        addData={addWords}>
                    </AddWordForm >
                }
            </div>
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
                                    id={word.id}
                                    word={word.english}
                                    transcription={word.transcription}
                                    translate={word.russian}
                                    teg={word.tags}
                                    buttons={word.buttons}
                                    deleteData={deleteWords}
                                    updateData={updateWords}
                                    addData={addWords}>
                                </TableWords>
                            )
                        }
                    </tbody>
                </table >
            </div>
        </div>
    );
}

export default Table;