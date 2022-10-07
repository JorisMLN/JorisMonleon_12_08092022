import { useState } from 'react';
import { useEffect } from 'react';
import './score.scss';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';


const DailyScore = ({user, data}) => {
  const [scoreData, setScoreData] = useState([]);
  const [endAngle, setendAngle] = useState([]);

  useEffect(() => {
    const isFormatingData = () => {
      const finalDataSet = [
        {
          "name": "Score",
          "value": data * 100 
        },
      ]

      const endAngleSet = 90 + (data * 100 * 3.6); //90=startAngle 3.6=degree in percentage
      // console.log(endAngleSet)

      setendAngle(endAngleSet)
      setScoreData(finalDataSet);
    }
    isFormatingData();
  }, [user, data])
  

  return (
    <div className="dailyScore">
      {
        scoreData.length !== 0 ?
        <>
          <ResponsiveContainer className="dailyScore__container">
            <PieChart width={730} height={250}>
              <Pie cornerRadius={10} startAngle={90} endAngle={endAngle} data={scoreData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={80} outerRadius={90} fill="#FF0000">
              </Pie>
              <Legend iconSize={0} verticalAlign="top" align='left' payload={[{value: 'Score', color: '#000000'}]} />
            </PieChart>
          </ResponsiveContainer>
        <div className='dailyScore__percent'>
          <div className='value'>{data * 100} %</div>
          <div>de votre objectif</div>
        </div>
        </>
        :
        null
      }
    </div>
  )
}

export default DailyScore;