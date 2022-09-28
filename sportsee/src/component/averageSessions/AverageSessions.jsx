import './average.scss';
import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line, Legend } from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';


const AverageSessions = ({user}) => {
  const [averageData, setAverageData] = useState([])

  useEffect(() => {
    const getUser = async () => {
      const requestOptions = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      };
    
      try {
        const response = await fetch(`http://localhost:3000/user/${user}/average-sessions`, requestOptions);
        const jsonRes = await response.json();
        setAverageData(jsonRes.data.sessions);
    
      } catch {
        console.error();
        return [];
      }
    }
    getUser();
  }, [user])

  return (
    <div className="averageSessions">
      <ResponsiveContainer width="100%">
        <LineChart width="100%" height={250} data={averageData}>
          <XAxis axisLine={false} tickLine={false} dataKey="day" stroke="#FFFFFF"/>
          <Tooltip />
          <Legend verticalAlign="top"/>
          <Line type="monotone" dot={false} dataKey="sessionLength" stroke="#FFFFFF" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageSessions;