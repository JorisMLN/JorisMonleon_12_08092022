import './layout.scss';
import logo from '../assets/logoVector.png';
// import logoCircle from '../assets/circleLogoVector.png';
import { horizontalData } from '../mock/dataMocked';

const HorizontalNav = () => {

  return (
    <div className="horizontalNav">
      <div className="logo">
        <div className="logo__circle">
          <img className="logoBody" alt='logo sportsee' src={logo}></img>
          <div className="logoHead"></div>
        </div>
        SportSee 
      </div>
      {horizontalData.map(item => <div className='horizontalNav__btn'>{item}</div>)}
    </div>
  )
}

export default HorizontalNav;