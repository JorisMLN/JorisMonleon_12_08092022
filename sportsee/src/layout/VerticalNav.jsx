import './layout.scss';
import yoga from '../assets/yoga.png';
import swim from '../assets/swim.png';
import bike from '../assets/bike.png';
import heavy from '../assets/heavy.png';

// Vertical navigation bar component //
const VerticalNav = () => {

  return (
    <div className="verticalNav">
      <nav>
        <div className='navBtn'>
          <img src={yoga}></img>
        </div>
        <div className='navBtn'>
          <img src={swim}></img>
        </div>
        <div className='navBtn'>
          <img src={bike}></img>
        </div>
        <div className='navBtn'>
        <img src={heavy}></img>
        </div>
      </nav>
    </div>
  )
}

export default VerticalNav;