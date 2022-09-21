import './average.scss';

import { ResponsiveContainer, LineChart, CartesianGrid, XAxis,YAxis, Tooltip, Line, Legend } from 'recharts';
import { lineData } from '../../mock/dataMocked';

const AverageSessions = () => {

  const data = lineData;

  return (
    <div className="averageSessions">
      <ResponsiveContainer width="100%">
        <LineChart width="100%" height={250} data={data}>
          {/* <CartesianGrid color="#FF0000" strokeDasharray="3 3" /> */}
          <XAxis axisLine={false} tickLine={false} dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageSessions;