import './layout.scss';
import DailyActivity from '../component/daylyActivity/DailyActivity';
import AverageSessions from '../component/averageSessions/AverageSessions';
import RadarChartFrame from '../component/radarChart/RadarChartFrame';
import DailyScore from '../component/dailyScore/DailyScore';
import KeyBloc from '../component/keyNumbers/KeyBloc';
import { useState } from 'react';
import { useEffect } from 'react';
import { userId } from '../mock/dataMocked';
import { getUser } from '../api/service';


const MainContainer = () => {
  const [userData, setUserData] = useState();
  const fetchData = async () => {
    const data = await getUser();
    console.log(data);
    setUserData(data);
  }

  useEffect(() => {
    fetchData();
  },[userId])


  return (
    <div className="mainContainer">
      <div className='head'>
        <title> 
          <div className='hello'>Bonjour</div> 
          {
            userData !== undefined ?
            <div className='name'>{userData.userInfos.firstName}</div> 
            :
            null
          }
        </title>
        <p>Félicitation ! Vous avez explosé vos objectifs hier !</p>
      </div>
      <section>
        <div className='left'>
          <DailyActivity user={userId}/>
          <AverageSessions user={userId}/>
          <RadarChartFrame user={userId}/>
          {
            userData !== undefined ?
            <DailyScore user={userId} data={!userData.todayScore ? userData.score : userData.todayScore}/>
            :
            null
          }
          
        </div>
        <div className='right'>
          {
            userData !== undefined ?
            <KeyBloc data={userData.keyData}/>
            :
            null
          }
        </div>
      </section>
    </div>
  )
}

export default MainContainer;