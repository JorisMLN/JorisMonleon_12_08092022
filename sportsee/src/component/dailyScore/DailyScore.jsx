import { useState } from 'react';
import { useEffect } from 'react';
import './score.scss';
import { ResponsiveContainer, PieChart, Pie, Label, Legend } from 'recharts';
// import { scoreData } from '../../mock/dataMocked';

const DailyScore = ({user, data}) => {
  const [scoreData, setScoreData] = useState([]);
  console.log(user);
  console.log(data);

  useEffect(() => {
    const isFormatingData = () => {
      const finalDataSet = [
        {
          "name": "Score",
          "value": data * 100
        },
        {
          "name": "Group B",
          "value": 100 - (data * 100),
          "fill": "#ffffff"
        },
      ]

      setScoreData(finalDataSet);
    }
    isFormatingData();
  }, [user, data])
  

  return (
    <div className="dailyScore">
      {
        scoreData.length !== 0 ?
        <ResponsiveContainer className="dailyScore__container">
          <PieChart width={730} height={250}>
            <Pie startAngle={90} endAngle={450} data={scoreData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={80} outerRadius={90} fill="#FF0000" label />
            <Legend iconSize={0} color="#ffffff" verticalAlign="top" iconType='circle'/>
          </PieChart>
        </ResponsiveContainer>
        :
        null
      }
    </div>
  )
}

export default DailyScore;