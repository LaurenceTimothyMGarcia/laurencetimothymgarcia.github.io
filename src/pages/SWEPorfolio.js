import React from 'react';
import { Box, Center, Heading, Link } from '@chakra-ui/react';
import SWEProjectDisplay from './SWEPortfolio/SWEProjectDisplay';
import SocialIcon from '../components/SocialIcon';
import colors from '../theme/Color';

function SWEPorfolio() {
  return (
    <Box>
      <Center
        p={'2vh'}
      >
        <Heading
          color={colors.primary}
        >
          Software Engineering Portfolio
        </Heading>
      </Center>

      <Center mb={'1rem'}>
        <Box display={'flex'} justifyContent="center" alignItems="center">
          <SocialIcon
            link={'https://github.com/LaurenceTimothyMGarcia'} 
            img={'/logos/SocialLogos/GithubLogoPurple.png'} 
          />
        </Box>
      </Center>
      

      <SWEProjectDisplay />
    </Box>
  )
}

export default SWEPorfolio;