import './layout.scss';
import { user } from '../mock/dataMocked';

import DailyActivity from '../component/daylyActivity/DailyActivity';
import AverageSessions from '../component/averageSessions/AverageSessions';
import RadarChartFrame from '../component/radarChart/RadarChartFrame';
import DailyScore from '../component/dailyScore/DailyScore';
import KeyBloc from '../component/keyNumbers/KeyBloc';

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
          <RadarChartFrame />
          <DailyScore />
        </div>
        <div className='right'>
          <KeyBloc />
        </div>
      </section>
    </div>
  )
}

export default MainContainer;