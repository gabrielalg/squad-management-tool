import style from '../assets/css/components/Footer.module.css';
import favGabi from '../assets/img/icons/fav-gabi.svg';

const Footer = () => { 

  return (
    <footer>
      <div className="content flex-row justify-align-center">
        <div id={style.copyright}>
          <small>
            &copy; 2020 - All Rights Reserved <span> - </span>
            <a href="http://www.gabidigital.work/" target="blank">
              Developed by <img src={favGabi} alt="Icon Gabi Digital" />
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;