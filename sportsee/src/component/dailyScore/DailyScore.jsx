import './score.scss';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import { scoreData } from '../../mock/dataMocked';

const DailyScore = () => {
  const data = scoreData;

  return (
    <div className="dailyScore">
      <ResponsiveContainer className="dailyScore__container">
        <PieChart width={730} height={250}>
          <Pie startAngle={90} endAngle={450} data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={80} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DailyScore;