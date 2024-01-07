import React from 'react';
import { Box } from '@chakra-ui/react'
import AboutMeDesktop from './Main/AboutMeDesktop';
import PortfolioDesktop from './Main/PortfolioDesktop';
import WorkExpDesktop from './Main/WorkExpDesktop';
import Socials from './Socials';
import Extracurriculars from './Extracurriculars';

function Main() {
  return(
    <Box>
      <AboutMeDesktop/>
      <WorkExpDesktop/>
      <PortfolioDesktop/>

      {/* <Extracurriculars/> */}
      <Socials/>
    </Box>
  )
}

export default Main;