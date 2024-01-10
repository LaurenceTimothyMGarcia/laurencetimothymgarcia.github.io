import React from 'react';
import colors from '../../theme/Color';
import { Link } from "react-router-dom";
import { Box, VStack, Center, Heading } from '@chakra-ui/react';
import SWECanvas from './SWECanvas';
import GameDevCanvas from './GameDevCanvas';

// Portfolio section mobile

function PortfolioMobile() {
  return(
    <Box
      mt={'1rem'}
      mb={'2rem'}
    >
      <VStack>
        <Center><Heading mb={'1rem'} mt={'3rem'} color={colors.primary}>Project Portfolios</Heading></Center>

        <Box>
          <Center><Heading size={'md'} color={colors.secondary}><Link to='/swe-portfolio'>Software Engineering Portfolio</Link></Heading></Center>

          <Link to='/swe-portfolio'>
            <SWECanvas/>
          </Link>
        </Box>

        <Box>
          <Center><Heading size={'md'} color={colors.secondary}><Link to='/gamedev-portfolio'>Game Development Portfolio</Link></Heading></Center>

          <Link to='/gamedev-portfolio' border={'1px solid white'}>
            <GameDevCanvas />
          </Link>
        </Box>

      </VStack>
    </Box>
  )
}

export default PortfolioMobile;