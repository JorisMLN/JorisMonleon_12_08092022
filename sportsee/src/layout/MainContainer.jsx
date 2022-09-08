import './layout.scss';

import DailyActivity from '../component/daylyActivity/DailyActivity';
import AverageSessions from '../component/averageSessions/AverageSessions';
import RadarChart from '../component/radarChart/RadarChart';
import DailyScore from '../component/dailyScore/DailyScore';
import KeyNumbers from '../component/keyNumbers/KeyNumbers';

const MainContainer = () => {
  const name = 'Thomas';

  return (
    <div className="mainContainer">
      <div className='head'>
        <h1> Bonjour {name}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier !</p>
      </div>
      <section>
        <div className='left'>
          <DailyActivity />
          <AverageSessions />
          <RadarChart />
          <DailyScore />
        </div>
        <div className='right'>
          <KeyNumbers />
        </div>
      </section>
    </div>
  )
}

export default MainContainer;