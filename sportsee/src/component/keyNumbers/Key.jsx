import './key.scss';
import cheeseBurger from './../../assets/cheeseburger.svg';
import energy from './../../assets/energy.svg';
import chicken from './../../assets/chicken.svg';
import apple from './../../assets/apple.svg';


// Component for each Keys Numbers //
const Key = ({keyProp, index}) => {
  const logo = [
    <img src={energy}></img>, 
    <img src={chicken}></img>, 
    <img src={apple}></img>, 
    <img src={cheeseBurger}></img>
  ]

  return (
    <div className='key'>
      <div className={`key__logo ${keyProp.color}`}></div>
      <div className='icon'>{logo[index]}</div>
      <div className='key__data'>
        <div className='key__data--value'>{keyProp.value}</div>
        <div>{keyProp.name}</div>
      </div>
    </div>
  )
}

export default Key;