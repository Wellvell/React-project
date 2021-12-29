import TableWords from './tableWords';
import './assets/styles/table.scss';
import { observer, inject } from "mobx-react";
import Loading from './loading'
import AddWordForm from './addWordForm'
import './assets/styles/form.scss'
import { useState } from 'react';
import meme from './assets/img/cover4.jpg'
import Problem from './error';

const Table = inject(['wordsStore'])(observer(({ wordsStore }) => {

    const wordsApi = wordsStore.wordsApi
    const isLoading = wordsStore.isLoading
    const handlerAddWord = wordsStore.handlerAddWord
    const handlerDelete = wordsStore.handlerDelete
    const handlerInputSave = wordsStore.handlerInputSave
    const errorMessage = wordsStore.error;
    const errorStatus = wordsStore.errorStatus;


    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(!pressed)
    }

    if (isLoading) {
        return (
            <Loading />
        )
    }

    else if (errorMessage) {
        return (
            <Problem img={meme} header={errorStatus} p={errorMessage} />
        )
    }
    else {
        return (
            <div>
                <button className='add-btn' onClick={handleChange}>Add word form</button>
                <div className={!pressed ? "hide-form" : "form"}>
                    {
                        <AddWordForm
                            data={wordsApi}
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
                                wordsApi.map((word) =>
                                    <TableWords key={word.id}
                                        id={word.id}
                                        word={word.english}
                                        transcription={word.transcription}
                                        translate={word.russian}
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
}))

export default Table;