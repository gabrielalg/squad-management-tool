import style from '../assets/css/elements/Card.module.css';

const Card = ( { children, isList, className } ) => { 
  if (isList) {
    return <>
      <li className={ `${style['card-style']} ${className ? className : ''}` }>
        {children}
      </li>
    </>;
  } else {
    return <>
      <div className={ `${style['card-style']} ${className ? className : ''}` }>
        {children}
      </div>
    </>;
  }
  
}

export default Card;