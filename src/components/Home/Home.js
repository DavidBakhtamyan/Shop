import HomeHeader from '../HomeHeader/HomeHeader';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Home.css'
import { useState } from 'react';
import Fashion from '../Fashion/Fashion';
import SpecialProducts from '../SpecialProducts/SpecialProducts';

const Home = () => {
  const indicators = (index) => (<div className='indicator'></div>) 
  const properties = {
    prevArrow: <button className='SliderCntrlBtns '><svg viewBox="-100.9 99.1 61.9 105.9" className="arrow"><path d="M-98.2 158.8l43.5 43.5c1.7 1.7 4 2.7 6.5 2.7s4.8-1 6.5-2.7c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5l-37.2-37.2 37.2-37.2c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.6-6.5c-1.8-1.9-4.2-2.8-6.6-2.8-2.3 0-4.6.9-6.5 2.6-11.5 11.4-41.2 41-43.3 43l-.2.2c-3.6 3.6-3.6 10.3 0 13.9z"></path></svg></button>,
    nextArrow: <button className='SliderCntrlBtns '><svg viewBox="-100.9 99.1 61.9 105.9" className="arrow"><path d="M-41.7 145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61 152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6 6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6 11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4 0-13.9z"></path></svg></button>
}
  const [visible, setVisible] = useState([true, false, false,false])
    return (
        <div className='Home'>
          <Slide
            {...properties}
            indicators={indicators}
            duration={4500}
            onChange={(from, to) => {
              setVisible([
                ...visible.map((el, idx) => idx ===to ? true : false)
              ])
            }}
          >
            <HomeHeader visible={visible} idx={0} />
            <HomeHeader visible={visible} idx={1} />
            <HomeHeader visible={visible} idx={2} />
            <HomeHeader visible={visible} idx={3} />

          </Slide>
          <Fashion />
          <SpecialProducts />
        </div>
    );
}

export default Home;
