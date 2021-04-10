import style from '../assets/css/components/Header.module.css';
import { Link } from 'react-router-dom';
import venturusLogo from '../assets/img/venturus-icon.svg';
import userProfile from '../assets/img/user-profile.png';

const Header = () => { 
 
  return (
    <header id={style.header} className="flex-column justify-align-center">
      <div className="content flex-row">
        <div className="flex-row justify-align-center">
          <Link to="/" className="flex-row">
            <img src={venturusLogo} alt="Logo Venturus" className={style['brand-logo']}/>
          </Link>
          <h1 className="text-subtitle-small">Squad Management Tool</h1>
        </div>
        <Link to="/" className="flex-row justify-align-center">
          <p className="text-body">Gabriela Gonçalves</p>
          <img src={userProfile} alt="User Profile" className={style['brand-logo']}/>
        </Link>
      </div>
    </header>
  );
}

export default Header;