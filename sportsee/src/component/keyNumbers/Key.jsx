import './key.scss';
import { VscFlame } from 'react-icons/vsc';
import { FaGuitar } from 'react-icons/fa';
import { AiFillApple } from 'react-icons/ai';
import { FaHamburger } from 'react-icons/fa';

const Key = ({keyProp, index}) => {

  console.log(index)

  const logo = [<VscFlame size={20} color="#FF0000"/>, <FaGuitar size={20} color="#4AB8FF"/>, <AiFillApple size={20} color="#FDCC0C"/>, <FaHamburger size={20} color="#FD5181"/>]

  return (
    <div className='key'>
      <div className='key__logo'>{logo[index]}</div>
      <div className='key__data'>
        <div>{keyProp.name}</div>
        <div>{keyProp.value}</div>
      </div>
    </div>
  )
}

export default Key;