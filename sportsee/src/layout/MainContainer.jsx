import './layout.scss';
import { user } from '../mock/dataMocked';

import DailyActivity from '../component/daylyActivity/DailyActivity';
import AverageSessions from '../component/averageSessions/AverageSessions';
import RadarChart from '../component/radarChart/RadarChart';
import DailyScore from '../component/dailyScore/DailyScore';
import KeyNumbers from '../component/keyNumbers/KeyNumbers';

const MainContainer = () => {

  return (
    <div className="mainContainer">
      <div className='head'>
        <title> 
          <div className='hello'>Bonjour</div> 
          <div className='name'>{user.name}</div>
        </title>
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