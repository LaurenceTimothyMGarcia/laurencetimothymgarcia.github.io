import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import GameDevProjectDisplay from './GameDevPortfolio/GameDevProjectDisplay';

function GameDevPortfolio() {
  return (
    <Box>
      <Heading>GameDev Portfolio</Heading>
      <GameDevProjectDisplay />
    </Box>
  )
}

export default GameDevPortfolio;