import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';
import GameDevProjectCard from './GameDevProjectCard';
import GameDevProjects from '../../data/GameDevProjects';
import GameDevDSScreen from './GameDevDSScreen';

function GameDevProjectDisplay() {

  const [selectedGame, setSelectedGame] = useState(null);

  const handleSelectGame = (index) => {
    setSelectedGame(GameDevProjects[index]);
  };

  return (
    <Box>
      <SimpleGrid columns={2}>
        <Flex minW={'100%'}>
          {GameDevProjects.map((game, index) => (
            <GameDevProjectCard 
              key={index}
              title={game.title}
              img={game.icon}
              onSelect={() => handleSelectGame(index)}
            />
          ))}
        </Flex>

        <GameDevDSScreen selectedGame={selectedGame}/>

        
      </SimpleGrid>
      
    </Box>
  )
}

export default GameDevProjectDisplay;