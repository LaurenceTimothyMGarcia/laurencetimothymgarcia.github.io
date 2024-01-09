import React from 'react';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import GameDevProjectDisplay from './GameDevPortfolio/GameDevProjectDisplay';
import SocialIcon from '../components/SocialIcon';
import colors from '../theme/Color';

function GameDevPortfolio() {
  return (
    <Box>
      <Center
        p={'2vh'}
      >
        <Heading color={colors.primary} textAlign={'center'}>Game Development Portfolio</Heading>
      </Center>

      <GameDevProjectDisplay />
    </Box>
  )
}

export default GameDevPortfolio;