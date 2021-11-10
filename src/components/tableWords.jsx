import edit from './assets/img/magic-wand.png';
import save from './assets/img/magic-book.png';
import del from './assets/img/fire.png';

function TableWords(props) {
    if (props.buttons) {
        return (
            <tr>
                <td><input placeholder={props.word} /></td>
                <td><input placeholder={props.transcription} /></td>
                <td><input placeholder={props.translate} /></td>
                <td className="buttons">
                    <button className="edit"><img src={edit} /></button>
                    <button className="save"><img src={save} /></button>
                    <button className="del"><img src={del} /></button>
                </td>
            </tr>
        );
    }
    else {
        return (
            <tr>
                <td>{props.word}</td>
                <td>{props.transcription}</td>
                <td>{props.translate}</td>
                <td className="buttons">
                    <button className="edit"><img src={edit} /></button>
                    <button className="del"><img src={del} /></button>
                </td>
            </tr>
        );
    }

}

export default TableWords;