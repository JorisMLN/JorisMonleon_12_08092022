import './score.scss';
import { ResponsiveContainer, RadialBarChart, RadialBar, Tooltip, Legend } from 'recharts';
import { scoreData } from '../../mock/dataMocked';

const DailyScore = () => {
  const data = scoreData;

  return (
    <div className="dailyScore">
      <ResponsiveContainer className="dailyScore__container">
        <RadialBarChart 
          className="dailyScore__container--radar"
          width='100%' 
          height='100%'
          innerRadius="80%" 
          outerRadius="90%" 
          data={data} 
          startAngle={0} 
          endAngle={360}
        >
          <RadialBar className="line" maxAngle={135} label={{ fill: '#666', position: 'insideStart'}} dataKey='uv' />
          {/* <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" /> */}
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DailyScore;