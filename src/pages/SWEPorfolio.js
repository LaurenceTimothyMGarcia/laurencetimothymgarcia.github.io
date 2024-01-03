import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import SWEProjectDisplay from './SWEPortfolio/SWEProjectDisplay';

function SWEPorfolio() {
  return (
    <Box>
      <Heading>SWE Portfolio</Heading>
      <SWEProjectDisplay />
    </Box>
  )
}

export default SWEPorfolio;