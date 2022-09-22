import './key.scss';
import { colorKeys } from '../../mock/dataMocked';
import { VscFlame } from 'react-icons/vsc';
import { FaGuitar } from 'react-icons/fa';
import { AiFillApple } from 'react-icons/ai';
import { FaHamburger } from 'react-icons/fa';


const Key = ({keyProp, index}) => {
  const color = colorKeys;
  const logo = [
    <VscFlame size={22} color="#FF0000"/>, 
    <FaGuitar size={22} color="#4AB8FF"/>, 
    <AiFillApple size={22} color="#FDCC0C"/>, 
    <FaHamburger size={22} color="#FD5181"/>
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