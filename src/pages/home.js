// CSS
import style from '../assets/css/pages/home.module.css';

// ELEMENTS
import Card from '../elements/Card.js';
import Button from '../elements/Button.js';

const Home = () => {

  return <>
   <section>
    <div className="content flex-row">
      <Card className={style['card-item']}>
        <div className="flex-row">
          <h2 className="text-subtitle">My Teams</h2>
          <Button to="/new-team" type="fill">
            <span className={style['btn-icon']}>+</span>
          </Button>
          <span className="grey-a010-line"></span>
        </div>
        
      </Card>
      <Card className={style['card-item']}>
        <div className="flex-row">
          <h2 className="text-subtitle">Top 5</h2>
          <span className="grey-a010-line"></span>
        </div>
      </Card>

    </div>
     
   </section>
  </>
};

export default Home;
