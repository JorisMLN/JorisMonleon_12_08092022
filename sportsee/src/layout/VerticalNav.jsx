import './layout.scss';

import { GiMeditation } from 'react-icons/gi';
import { BiSwim } from 'react-icons/bi';
import { TbBike } from 'react-icons/tb';
import { GiWeightLiftingUp } from 'react-icons/gi';

import yoga from '../assets/yoga.png';
import swim from '../assets/swim.png';
import bike from '../assets/bike.png';
import heavy from '../assets/heavy.png';

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