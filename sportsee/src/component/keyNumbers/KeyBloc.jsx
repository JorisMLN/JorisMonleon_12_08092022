import './key.scss';
import Key from './Key';
import { useState } from 'react';
import { colorKeys } from '../../mock/dataMocked';
import { useEffect } from 'react';

const KeyBloc = ({data}) => {
  const [keyData, setKeyData] = useState([]);
  const color = colorKeys;

  useEffect(() => {
    const isFormatingData = () => {
      let keyArray = [];
  
      keyArray.push({name: 'Calories', value: `${data.calorieCount}g`, color: color[0]});
      keyArray.push({name: 'Proteines', value: `${data.proteinCount}g`, color: color[1]});
      keyArray.push({name: 'Glucides', value: `${data.carbohydrateCount}g`, color: color[2]});
      keyArray.push({name: 'Lipides', value: `${data.lipidCount}g`, color: color[3]});
      
  
      setKeyData(keyArray);
    }
  
    isFormatingData();
  }, [])
 
  

  return (
    <div className="keyBloc">
      {
        keyData.length !== 0 ?
        keyData.map((key, index) => <Key className="key" index={index} keyProp={key} key={index} />)
        :
        null
      }
    </div>
  )
}

export default KeyBloc;