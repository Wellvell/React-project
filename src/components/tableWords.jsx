import edit from './assets/img/magic-wand.png';
import save from './assets/img/magic-book.png';
import del from './assets/img/fire.png';
import { useState } from 'react';

function TableWords(props) {

    const [pressed, setPressed] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    }

    return (
        <tr>
            <td>{pressed? <input placeholder={pressed?  props.word: props.word} />: <input readOnly className="input" value={props.word} />}</td>
            <td>{pressed? <input placeholder={props.transcription} />: <input readOnly className="input" value={props.transcription} />}</td>
            <td>{pressed? <input placeholder={props.translate} />: <input readOnly className="input" value={props.translate} />}</td>
            <td className="buttons">
                <button title={pressed? "cancel edit": "edit"} onClick={handleChange} className="edit"><img src={edit} /></button>
                <button title="save" className={pressed? "save": "save-hide"}><img src={save} /></button>
                <button title="delete" className="del"><img src={del} /></button>
            </td>
        </tr>
    );
}

export default TableWords;