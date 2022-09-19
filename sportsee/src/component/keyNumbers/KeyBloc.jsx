import './key.scss';
import { keyNumbers } from '../../mock/dataMocked';
import Key from './Key';

const KeyBloc = () => {

  return (
    <div className="keyBloc">
      {keyNumbers.map((key, index) => <Key className="key" keyProp={key} key={index} />)}
    </div>
  )
}

export default KeyBloc;