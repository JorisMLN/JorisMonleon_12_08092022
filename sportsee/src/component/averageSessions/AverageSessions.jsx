import './average.scss';
import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line, Legend } from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAverage } from '../../api/service';


const AverageSessions = ({user}) => {
  const [averageData, setAverageData] = useState([]);

  const fetchData = async () => {
    const data = await getAverage();
    console.log(data);
    setAverageData(data);
  }

  useEffect(() => {
    fetchData();
  }, [user])

  return (
    <div className="averageSessions">
      <ResponsiveContainer width="100%">
        <LineChart width="100%" height={250} data={averageData}>
          <XAxis axisLine={false} tickLine={false} dataKey="day" stroke="#FFFFFF"/>
          <Tooltip />
          <Legend verticalAlign="top" align='left' payload={[{value: 'Durée moyenne des sessions', color: '#FFFFFF'}]} iconSize={0}/>
          <Line type="basis" dot={false} dataKey="sessionLength" stroke="#FFFFFF" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageSessions;