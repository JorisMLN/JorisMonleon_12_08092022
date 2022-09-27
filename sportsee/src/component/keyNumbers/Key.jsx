import './key.scss';
import { colorKeys } from '../../mock/dataMocked';
import cheeseBurger from './../../assets/cheeseburger.svg';
import energy from './../../assets/energy.svg';
import chicken from './../../assets/chicken.svg';
import apple from './../../assets/apple.svg';


const Key = ({keyProp, index}) => {
  const color = colorKeys;
  const logo = [
    <img src={energy}></img>, 
    <img src={chicken}></img>, 
    <img src={apple}></img>, 
    <img src={cheeseBurger}></img>
  ]

  return (
    <div className='key'>
      <div className={`key__logo ${color[index]}`}></div>
      <div className='icon'>{logo[index]}</div>
      <div className='key__data'>
        <div>{keyProp.name}</div>
        <div>{keyProp.value}</div>
      </div>
    </div>
  )
}

export default Key;