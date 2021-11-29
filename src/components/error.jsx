import './assets/styles/error.scss';
import meme from './assets/img/grumpy-cat.png';
function Error(){
    
    return(
        <div className="error-container">
            <h1>Ошибка 404</h1>
            <p>Страница не найдена</p>
            <img src={meme}></img>
        </div>
    );
}

export default Error;