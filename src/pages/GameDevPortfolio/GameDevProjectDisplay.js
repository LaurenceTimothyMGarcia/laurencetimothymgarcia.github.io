import { Box } from '@chakra-ui/react';
import React from 'react';
import GameDevProjectCard from './GameDevProjectCard';
import GameDevProjects from '../../data/GameDevProjects';

function GameDevProjectDisplay() {
  return (
    <Box>
      {GameDevProjects.map((game, index) => (
        <GameDevProjectCard 
          key={index}
          title={game.title}
          img={game.icon}
        />
      ))}
    </Box>
  )
}

export default GameDevProjectDisplay;