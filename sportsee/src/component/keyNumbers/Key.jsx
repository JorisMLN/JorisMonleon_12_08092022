import './key.scss';

const Key = ({keyProp}) => {

  return (
    <div className='key'>
      <div className='key__logo'>{keyProp.name}</div>
      <div className='key__data'>{keyProp.value}</div>
    </div>
  )
}

export default Key;