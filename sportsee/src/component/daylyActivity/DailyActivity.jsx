import './activity.scss';

import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts';
import { dailyData } from '../../mock/dataMocked';

const DailyActivity = () => {

  const data = dailyData;

  return (
    <div className="dailyActivity">
      <ResponsiveContainer >
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 0" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="pv" fill="#8884d8" barSize={5} />
          <Bar dataKey="uv" fill="#82ca9d" barSize={5} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DailyActivity;