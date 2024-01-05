import React from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';
import SWEProjectDisplay from './SWEPortfolio/SWEProjectDisplay';
import SocialIcon from '../components/SocialIcon';

function SWEPorfolio() {
  return (
    <Box>
      <Center
        p={'2vh'}
      >
        <Heading>Software Engineering Portfolio</Heading>
      </Center>

      <SocialIcon
        link={'https://github.com/LaurenceTimothyMGarcia'} 
        img={'/logos/SocialLogos/GithubLogoPurple.png'} 
      />

      <SWEProjectDisplay />
    </Box>
  )
}

export default SWEPorfolio;