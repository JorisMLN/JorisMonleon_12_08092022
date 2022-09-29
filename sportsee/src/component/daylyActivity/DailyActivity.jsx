import './activity.scss';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';
import { getActivity } from '../../api/service';


const DailyActivity = ({user}) => {
  const [sessionData, setSessionData] = useState([]);

  const fetchData = async () => {
    const data = await getActivity();
    data.map((item, index) =>{
      item.day = index+1
      console.log(item)
    })
    setSessionData(data);
  }

  useEffect(() => {
    fetchData();
  }, [user])

  return (
    <div className="dailyActivity">
      <ResponsiveContainer >
        <BarChart width={730} height={250} data={sessionData} barGap='8'>
          <CartesianGrid strokeDasharray="0 2 0" vertical={false}/>
          <XAxis dataKey="day" tickLine={false} />
          <YAxis orientation="right" axisLine={false} tickLine={false}/>
          <Tooltip />
          <Legend verticalAlign="top" iconType='circle'/>
          <Bar dataKey="kilogram" fill="#282D30" barSize={7} />
          <Bar dataKey="calories" fill="#E60000" barSize={7} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DailyActivity;