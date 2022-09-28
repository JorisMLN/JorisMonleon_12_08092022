import './activity.scss';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';


const DailyActivity = ({user}) => {
  const [sessionData, setSessionData] = useState([])

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
        const response = await fetch(`http://localhost:3000/user/${user}/activity`, requestOptions);
        const jsonRes = await response.json();
        setSessionData(jsonRes.data.sessions);
    
      } catch {
        console.error();
        return [];
      }
    }
    getUser();
  }, [user])

  return (
    <div className="dailyActivity">
      <ResponsiveContainer >
        <BarChart width={730} height={250} data={sessionData}>
          <CartesianGrid strokeDasharray="0 2 0" vertical={false}/>
          <XAxis dataKey="name" />
          <YAxis orientation="right" axisLine={false} tickLine={false}/>
          <Tooltip />
          <Legend verticalAlign="top" iconType='circle'/>
          <Bar dataKey="kilogram" fill="#282D30" barSize={5} />
          <Bar dataKey="calories" fill="#E60000" barSize={5} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DailyActivity;