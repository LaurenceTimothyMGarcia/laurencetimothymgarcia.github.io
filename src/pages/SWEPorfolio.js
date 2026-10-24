import React from 'react';
import { Box, Center, Heading, Link } from '@chakra-ui/react';
import SWEProjectDisplay from './SWEPortfolio/SWEProjectDisplay';
import SocialIcon from '../components/SocialIcon';
import colors from '../theme/Color';
import ScreenRatio from '../components/ScreenRatio';

function SWEPorfolio() {
  return (
    <Box>
      <Center p={'2vh'}>
        <Heading
          color={colors.primary}
          size={{ base: 'md', md: 'lg' }}
          textAlign={'center'}
        >
          Independent Endeavors
        </Heading>
      </Center>

      <SWEProjectDisplay />
    </Box>
  );
}

export default SWEPorfolio;