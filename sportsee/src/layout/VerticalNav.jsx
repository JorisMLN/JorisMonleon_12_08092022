import './layout.scss';

import { GiMeditation } from 'react-icons/gi';
import { BiSwim } from 'react-icons/bi';
import { TbBike } from 'react-icons/tb';
import { GiWeightLiftingUp } from 'react-icons/gi' 

const VerticalNav = () => {

  return (
    <div className="verticalNav">
      <nav>
        <div className='navBtn'>
          <GiMeditation  size={40} color="red"/>
        </div>
        <div className='navBtn'>
          <BiSwim size={40} color="red"/>
        </div>
        <div className='navBtn'>
          <TbBike size={40} color="red"/>
        </div>
        <div className='navBtn'>
          <GiWeightLiftingUp size={40} color="red"/>
        </div>
      </nav>
    </div>
  )
}

export default VerticalNav;