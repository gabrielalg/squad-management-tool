// CSS
import style from '../assets/css/pages/home.module.css';

// ELEMENTS
import Card from '../elements/Card.js';
import Button from '../elements/Button.js';

// COMPONENTS
import DataTable from '../components/DataTable.js';

// IMAGES
import Girl1 from '../assets/img/illustrations/girl1.svg';
import Girl2 from '../assets/img/illustrations/girl2.svg';

const Home = () => {

  return <>
   <section>
    <div className={`content flex-row ${style['control-layout']}`}>
      <div>
        <Card className={style['card-item']}>
          <div className={`flex-row ${style['card-item__title']}`}>
            <h2 className="text-subtitle">My Teams</h2>
            <Button to="/new-team" type="fill">
              <span className={style['btn-icon']}>+</span>
            </Button>
            <span className="grey-a010-line"></span>
          </div>
          <DataTable/>
        </Card>
      </div>
      <div>
        <Card className={style['card-item']}>
          <div className={`flex-row ${style['card-item__title']}`}>
            <h2 className="text-subtitle">Top 5</h2>
            <span className="grey-a010-line"></span>
          </div>
          <div className={`flex-row ${style['margin-control']}`}>
            <div className={style['average-data']}>
              <h3 className="text-body">Highest Avg Age</h3>
              <ul className={`flex-column ${style['average-data__list-average']}`}>
                <li>
                  Name
                  <span>22.3</span>
                </li>
                <li>
                  Name
                  <span>22.3</span>
                </li>
                <li>
                  Name
                  <span>22.3</span>
                </li>
                <li>
                  Name
                  <span>22.3</span>
                </li>
                <li>
                  Name
                  <span>22.3</span>
                </li>
              </ul>
            </div>
            <div className={style['average-data']}>
              <h3 className="text-body">Lowest Avg Age</h3>
              <ul className={`flex-column ${style['average-data__list-average']}`}>
              <li>
                  Name
                  <span>22.3</span>
                </li>
                <li>
                  Name
                  <span>22.3</span>
                </li>
                <li>
                  Name
                  <span>22.3</span>
                </li>
                <li>
                  Name
                  <span>22.3</span>
                </li>
                <li>
                  Name
                  <span>22.3</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
        <Card className={style['soccer-field']}>
          <div>
            <h3 className="text-subtitle-small">Most Picked Player</h3>
            <img src={Girl1} alt="Avatar Girl1"/>
            <h4 className="text-subtitle-small">75%</h4>
          </div>
          <span className={style.circle}></span>
          <div>
            <h3 className="text-subtitle-small">Less Picked Player</h3>
            <img src={Girl2} alt="Avatar Girl2"/>
            <h4 className="text-subtitle-small">25%</h4>
          </div>
        </Card>
      </div>

    </div>
     
   </section>
  </>
};

export default Home;
