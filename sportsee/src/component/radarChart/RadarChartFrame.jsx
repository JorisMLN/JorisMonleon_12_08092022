import './radar.scss';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';

const RadarChartFrame = ({user}) => {
  const [finalData, setFinalData] = useState([]);

  useEffect(() => {

    const isBuildingDataModel = (valueDataObject, kind) => {
      const finalDataSet = [];
      valueDataObject.map((e, index) => {
        let newDataObject = {
          value: e.value,
          kind: kind[index+1]
        }
        finalDataSet.push(newDataObject)
      })

      setFinalData(finalDataSet);
    }

    const getUser = async () => {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      };
    
      try {
        const response = await fetch(`http://localhost:3000/user/${user}/performance`, requestOptions);
        const jsonRes = await response.json();

        isBuildingDataModel(jsonRes.data.data, jsonRes.data.kind);
    
      } catch {
        console.error();
        return [];
      }
    }
    getUser();
  }, [user])


  

  return (
    <div className="radarChart">
      {
        finalData.length != 0 ?
          <ResponsiveContainer className="radarChart__container">
            <RadarChart className="radarChart__container--radar" fill="#FFFFFF" outerRadius={90} width={730} height={250} data={finalData} margin={{right: 10, left: 30}}>
              <PolarGrid />
              <PolarAngleAxis className="name" tickLine={false} dataKey="kind" />
              <Radar name="Mike" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
          :
        null
      }
    </div>
  )
}

export default RadarChartFrame;