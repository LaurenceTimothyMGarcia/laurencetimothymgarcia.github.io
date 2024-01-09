import React from 'react';
import { Box, Center, Heading, Link } from '@chakra-ui/react';
import SWEProjectDisplay from './SWEPortfolio/SWEProjectDisplay';
import SocialIcon from '../components/SocialIcon';
import colors from '../theme/Color';

function SWEPorfolio() {

  let display = DesktopVer();
  // display = MobileVer();

  return (
    display
  )
}

function DesktopVer() {
  return (
    <Box>
      <Center
        p={'2vh'}
      >
        <Heading
          color={colors.primary}
          textAlign={'center'}
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

function MobileVer() {
  return (
    <Box>
      <Center
        p={'2vh'}
      >
        <Heading
          color={colors.primary}
          size={'md'}
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