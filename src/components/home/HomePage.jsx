
import '../../styles/HomePageStyle.css'

import { Link } from 'react-router-dom'
import SideImage from './SideImage'
import SwiperCard from './SwiperCard'
import GameList from '../GameList'
import MainContent from '../MainContent'

export const HomePage = () => {
  return (
    <>
      <div className='main-container'>

        <div className='second-container'>


          <div className='first-sectiont'>
            <div className='left-content'>
            <h1 className='first-title'>
              Search, Enjoy, Take A Tour Of <br /> Our Games Site.
            </h1>
            <Link to={'./mainContent'}>
              <button className='button'>Get Started</button></Link>
            </div>
            <div className='right-content'>
              <SideImage></SideImage>
            </div>

          </div>

         <div className='swiper-container'>
             <SwiperCard></SwiperCard>  
            </div>
            
        </div>

      </div>

    <MainContent></MainContent>
    </>


  )
}
