import './activity.scss';

import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts';
import { dailyData } from '../../mock/dataMocked';

const DailyActivity = () => {

  const data = dailyData;

  return (
    <div className="dailyActivity">
      <ResponsiveContainer >
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="0 2 0" vertical={false}/>
          <XAxis dataKey="name" />
          <YAxis orientation="right" axisLine={false} tickLine={false}/>
          <Tooltip />
          <Legend verticalAlign="top" iconType='circle'/>
          <Bar dataKey="pv" fill="#282D30" barSize={5} />
          <Bar dataKey="uv" fill="#E60000" barSize={5} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DailyActivity;