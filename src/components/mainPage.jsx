import './assets/styles/mainpage.scss';
import cat from './assets/img/cat.png';
function MainPage(){
    
    return(
        <div className="main-container">
            <h1>Let's learn English!</h1>
            <img src={cat} alt={"cat"}></img>
            <p>Нажмите на <b>"All words"</b>, чтобы увидеть все слова</p>
            <p>Нажмите на <b>"My cards"</b>, чтобы играть и учиться!</p>
        </div>
    );
}

export default MainPage;