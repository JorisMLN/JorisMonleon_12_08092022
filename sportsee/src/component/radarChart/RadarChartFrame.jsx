import './radar.scss';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';
import { getPerformance } from '../../api/service';


const RadarChartFrame = ({user}) => {
  const [finalData, setFinalData] = useState([]);

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

  const fetchData = async () => {
    const data = await getPerformance();
    console.log(data);
    isBuildingDataModel(data.value, data.kind);
  }

  useEffect(() => {
    fetchData();
  }, [user])


  return (
    <div className="radarChart">
      {
        finalData.length != 0 ?
          <ResponsiveContainer className="radarChart__container">
            <RadarChart className="radarChart__container--radar" fill="#FFFFFF" innerRadius={14} outerRadius={90} 
              width={730} height={250} data={finalData} margin={{right: 10, left: 10, top: 10, bottom: 10}}>
              <PolarGrid />
              <PolarAngleAxis fontSize={12} tickLine={false} className="name" dataKey="kind" />
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