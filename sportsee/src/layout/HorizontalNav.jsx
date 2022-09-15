import './layout.scss';
import { horizontalData } from '../mock/dataMocked';

const HorizontalNav = () => {

  return (
    <div className="horizontalNav">
      <div className="logo"> SportSee </div>
      {horizontalData.map(item => <div className='horizontalNav__btn'>{item}</div>)}
    </div>
  )
}

export default HorizontalNav;