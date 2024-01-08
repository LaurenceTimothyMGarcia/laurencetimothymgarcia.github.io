import React from 'react';
import { Box } from '@chakra-ui/react'
import AboutMeDesktop from './Main/AboutMeDesktop';
import PortfolioDesktop from './Main/PortfolioDesktop';
import WorkExpDesktop from './Main/WorkExpDesktop';
import Socials from './Socials';
import Extracurriculars from './Extracurriculars';
import AboutMeMobile from './Main/AboutMeMobile';
import WorkExpMobile from './Main/WorkExpMobile';
import PortfolioMobile from './Main/PortfolioMobile';

function Main() {

  // Mobile Version
  return(
    <Box>
      <AboutMeMobile />
      <WorkExpMobile />
      <PortfolioMobile />
    </Box>
  )

  // Desktop Version
  // return(
  //   <Box>
  //     <AboutMeDesktop/>
  //     <WorkExpDesktop/>
  //     <PortfolioDesktop/>

  //     {/* <Extracurriculars/> */}
  //     <Socials/>
  //   </Box>
  // )
}

export default Main;