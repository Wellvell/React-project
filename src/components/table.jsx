import TableWords from './tableWords';
import './assets/styles/table.scss';
import { useContext, useState } from 'react';
import DataContext from './context';
import AddWordForm from './addWordForm'
import './assets/styles/form.scss'
import meme from './assets/img/cover4.jpg'
import Problem from './error';
import Loading from './loading'

function Table() {

    const { data, handlerAddWord, handlerDelete, handlerInputSave, errorStatus, getError, loading } = useContext(DataContext);
    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed)
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    else if (getError) {
        return (
            <Problem img={meme} header={errorStatus} p={getError} />
        )
    }
    else {


        return (
            <div>
                <button className='add-btn' onClick={handleChange}>Add word form</button>
                <div className={!pressed ? "hide-form" : "form"}>
                    {
                        <AddWordForm
                            data={data}
                            handlerAddWord={handlerAddWord}>
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
                                        handlerDelete={handlerDelete}
                                        handlerInputSave={handlerInputSave}>
                                    </TableWords>
                                )
                            }
                        </tbody>
                    </table >
                </div>
            </div>
        );
    }
}

export default Table;