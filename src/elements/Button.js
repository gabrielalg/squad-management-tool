import style from '../assets/css/elements/Button.module.css';
import { Link } from 'react-router-dom';

const Button = ({ children, to, type, className }) => {
  if (type === 'fill') {
    return (
      <Link to={to} className={className + ' ' + style['fill-btn']}>
        {children}
        <div></div>
      </Link>
    );
  } 
};

export default Button;
