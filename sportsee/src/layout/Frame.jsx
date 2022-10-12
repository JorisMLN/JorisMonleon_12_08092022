import './layout.scss';
import HorizontalNav from './HorizontalNav';
import VerticalNav from './VerticalNav';
import MainContainer from './MainContainer';

const Frame = () => {

  // First frame display by the router //
  return (
    <div className="frame">
      <HorizontalNav />
      <div className='frame__main'>
        <VerticalNav />
        <MainContainer />
      </div>
    </div>
  )
}

export default Frame;