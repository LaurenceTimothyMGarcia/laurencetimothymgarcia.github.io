import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';

function GameDevDSScreen( { selectedGame }) {

  if (!selectedGame) {
    return <Box>Select a project to see details.</Box>;
  }

  return (
    <Box>
      <Heading size="md">{selectedGame.title}</Heading>
      <Image src={selectedGame.icon} />
      <Box>{selectedGame.summary}</Box>
      <Box>{selectedGame.genre}</Box>
    </Box>
  )
}

export default GameDevDSScreen;