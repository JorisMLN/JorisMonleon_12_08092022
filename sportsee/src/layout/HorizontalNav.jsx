import './layout.scss';
// import logo from '../assets/logoVector.png';
import logoGroupe from '../assets/logoGroup.png';
import { horizontalData } from '../mock/dataMocked';

const HorizontalNav = () => {

  return (
    <div className="horizontalNav">
      <div className="logo">
        <div className="logo__circle">
          <img className="logoBody" alt='logo sportsee' src={logoGroupe}></img>
        </div>
        SportSee 
      </div>
      {horizontalData.map((item, index) => <div className='horizontalNav__btn' key={index}>{item}</div>)}
    </div>
  )
}

export default HorizontalNav;