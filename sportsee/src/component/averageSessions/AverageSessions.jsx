import './average.scss';

import { ResponsiveContainer, LineChart, CartesianGrid, XAxis,YAxis, Tooltip, Line, Legend } from 'recharts';
import { lineData } from '../../mock/dataMocked';

const AverageSessions = () => {

  const data = lineData;

  return (
    <div className="averageSessions">
      <ResponsiveContainer >
        <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
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