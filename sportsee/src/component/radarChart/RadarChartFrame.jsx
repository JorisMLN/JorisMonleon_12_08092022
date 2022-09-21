import './radar.scss';

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { radarData } from '../../mock/dataMocked';

const RadarChartFrame = () => {

  const data = radarData;

  return (
    <div className="radarChart">
      <ResponsiveContainer className="radarChart__container">
        <RadarChart className="radarChart__container--radar" fill="#FFFFFF" outerRadius={90} width={730} height={250} data={data} margin={{right: 10, left: 30}}>
          <PolarGrid />
          <PolarAngleAxis className="name" tickLine={false} dataKey="subject" />
          <Radar name="Mike" dataKey="A" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadarChartFrame;