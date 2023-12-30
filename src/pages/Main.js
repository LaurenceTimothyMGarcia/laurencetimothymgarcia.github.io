import React from 'react';
import { Box } from '@chakra-ui/react'
import AboutMeDesktop from './Main/AboutMeDesktop';
import PortfolioDesktop from './Main/PortfolioDesktop';
import WorkExpDesktop from './Main/WorkExpDesktop';

function Main() {
  return(
    <Box>
      <AboutMeDesktop/>
      <WorkExpDesktop/>
      <PortfolioDesktop/>
    </Box>
  )
}

export default Main