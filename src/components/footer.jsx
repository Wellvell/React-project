import teleg from './assets/img/telegram.png';
import './assets/styles/footer.scss';

function Footer() {
    return (
        <div className="footer">
            <p className="footer__h">Contact us:</p>
            <div className="footer__contact">
                <img src={teleg} />
                <p>@wellvvell</p>
            </div>
        </div>
    );
}

export default Footer;