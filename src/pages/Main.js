import React from 'react';
import { Box } from '@chakra-ui/react'
import AboutMeDesktop from './Main/AboutMeDesktop';
import PortfolioDesktop from './Main/PortfolioDesktop';

function Main() {
  return(
    <Box>
      <AboutMeDesktop/>
      <PortfolioDesktop/>
    </Box>
  )
}

export default Main