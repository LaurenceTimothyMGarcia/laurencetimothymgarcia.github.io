import { Box, Wrap, SimpleGrid, VStack, Modal, useDisclosure, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import React, { useState } from 'react';
import GameDevProjectCard from './GameDevProjectCard';
import GameDevProjects from '../../data/GameDevProjects';
import GameDevDSScreen from './GameDevDSScreen';
import colors from '../../theme/Color';
import ScreenRatio from '../../components/ScreenRatio';

function GameDevProjectDisplay() {

  let display = Desktop();

  if (ScreenRatio) {
    display = Mobile();
  }

  return(display)
  
}

function Desktop() {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleSelectGame = (index) => {
    setSelectedGame(GameDevProjects[index]);
  };

  return (
    <Box>
      <SimpleGrid columns={2} alignItems={'center'}>
        <Wrap minW={'100%'}>
          {GameDevProjects.map((game, index) => (
            <GameDevProjectCard 
              key={index}
              title={game.title}
              img={game.icon}
              onSelect={() => handleSelectGame(index)}
            />
          ))}
        </Wrap>

        <GameDevDSScreen selectedGame={selectedGame}/>

        
      </SimpleGrid>
      
    </Box>
  )
}

function Mobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedGame, setSelectedGame] = useState(null);

  const handleSelectGame = (index) => {
    setSelectedGame(GameDevProjects[index]);
    onOpen();
  };

  return(
    <Box>
      <Wrap minW={'100%'} justify={'center'}>
        {GameDevProjects.map((game, index) => (
          <GameDevProjectCard 
            key={index}
            title={game.title}
            img={game.icon}
            onSelect={() => {handleSelectGame(index)}}
          />
        ))}
      </Wrap>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color={colors.text}/>
          <ModalBody bg={colors.bgSecondary}>
            <GameDevDSScreen selectedGame={selectedGame} mobile={true}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default GameDevProjectDisplay;