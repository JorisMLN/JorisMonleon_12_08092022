import './score.scss';

import { ResponsiveContainer, RadialBarChart, RadialBar, Tooltip, Legend } from 'recharts';
import { scoreData } from '../../mock/dataMocked';

const DailyScore = () => {

  const data = scoreData;

  return (
    <div className="dailyScore">
      <ResponsiveContainer >
        <RadialBarChart 
          width={730} 
          height={250} 
          innerRadius="10%" 
          outerRadius="90%" 
          data={data} 
          startAngle={0} 
          endAngle={360}
        >
          <RadialBar minAngle={0} maxAngle={100} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
          <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
          {/* <Tooltip /> */}
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DailyScore;