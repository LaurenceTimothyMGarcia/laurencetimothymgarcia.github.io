import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import AboutMeCanvas from './AboutMeCanvas';
import SkillDisplay from '../../components/SkillDisplay';
import SkillLanguages from '../../data/SkillLanguages';
import SkillTools from '../../data/SkillTools';
import IntroSection from './IntroSection';
import Education from './Education';

// About Me Mobile Page

function AboutMeMobile() {
  return(
    <Box>
      <VStack >
        <AboutMeCanvas />
        <IntroSection />

        <Education />
      </VStack>
    </Box>
  )
}

export default AboutMeMobile;