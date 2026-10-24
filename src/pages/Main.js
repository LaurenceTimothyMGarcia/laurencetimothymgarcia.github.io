import React from 'react';
import { Box } from '@chakra-ui/react'
import AboutMeDesktop from './Main/AboutMeDesktop';
import PortfolioDesktop from './Main/PortfolioDesktop';
import WorkExpDesktop from './Main/WorkExpDesktop';
import Socials from './Socials';
import ExtracurricularsDesktop from './Main/ExtracurricularsDesktop';
import AboutMeMobile from './Main/AboutMeMobile';
import WorkExpMobile from './Main/WorkExpMobile';
import PortfolioMobile from './Main/PortfolioMobile';
import ExtracurricularsMobile from './Main/ExtracurricularsMobile';
import ScreenRatio from '../components/ScreenRatio';
import SWEPorfolio from './SWEPorfolio';

function Main() {

  if(ScreenRatio) {
    // Mobile Version
    return(
      <Box>
        <Socials mobile={true}/>
        <AboutMeMobile />
        <WorkExpMobile />
        {/* <PortfolioMobile /> */}
        <SWEPorfolio />
        <ExtracurricularsMobile />
      </Box>
    )
  }
  

  // Desktop Version
  return(
    <Box>
      <Socials/>
      <AboutMeDesktop/>
      <WorkExpDesktop/>
      {/* <PortfolioDesktop/> */}
      <SWEPorfolio />
      <ExtracurricularsDesktop/>
    </Box>
  )
}

export default Main;