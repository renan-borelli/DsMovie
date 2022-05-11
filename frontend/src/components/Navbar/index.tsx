import { ReactComponent as GithubIcon } from '../../assets/img/Vector.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DSMovie</h1>
                    <a href="https://github.com/renan-borelli" target="_blank" rel="nonreferrer">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon />
                            <p className='dsmovie-contact-link'>/renan-borelli</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar