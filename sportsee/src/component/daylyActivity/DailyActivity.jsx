import './activity.scss';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';
import { getActivity } from '../../api/service';


const DailyActivity = ({user}) => {
  const [sessionData, setSessionData] = useState([]);

  const fetchData = async () => {
    const data = await getActivity();
    console.log(data)

    data.map((item, index) =>{
      item.day = index+1
      return 0;
    })

    console.log(data)
    setSessionData(data);
  }

  useEffect(() => {
    fetchData();
  }, [user])

  return (
    <div className="dailyActivity">
      <div className='customLegend'> Activité quotidienne </div>
      <ResponsiveContainer >
        <BarChart width={730} height={250} data={sessionData} barGap='8'>
          <CartesianGrid strokeDasharray="0 2 0" vertical={false}/>
          <XAxis dataKey="day" tickLine={false} />
          <YAxis orientation="right" axisLine={false} tickLine={false}/>
          <Tooltip payload={[{name: sessionData.name, value: sessionData.kilogram, unit: 'kg'}]}/>
          <Legend align='right' top='40px' verticalAlign="top" iconType='circle' width={500} payload={[{value: 'Poids (kg)', color: '#282D30'}, {value: 'Calories brulées (kcal)', color: '#E60000'}, {value: 'Score', color: '#ffffff'}]}/>
          <Bar radius={[10, 10, 0, 0]} dataKey="kilogram" fill="#282D30" barSize={7} />
          <Bar radius={[10, 10, 0, 0]} dataKey="calories" fill="#E60000" barSize={7} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DailyActivity;