import React from 'react';
import { Box, VStack, Center, Heading } from '@chakra-ui/react';
import AboutMeCanvas from './AboutMeCanvas';
import SkillDisplay from '../../components/SkillDisplay';
import SkillLanguages from '../../data/SkillLanguages';
import SkillTools from '../../data/SkillTools';
import IntroSection from './IntroSection';
import Education from './Education';
import colors from '../../theme/Color';

// About Me Mobile Page

function AboutMeMobile() {
  return(
    <Box 
      mt={'1rem'}
      mb={'2rem'}
    >
      <VStack >
        {/* 3D Models */}
        <AboutMeCanvas />

        {/* Intro Segment */}
        <IntroSection />

        {/* Education Segment */}
        <Education />

        {/* Shows off skills */}
        <Box>
          <Center><Heading size={'lg'} color={colors.secondary}>Skills</Heading></Center>
          <SkillDisplay sectionTitle={'Programming Languages'} skillSet={SkillLanguages}/>
          <SkillDisplay sectionTitle={'Tools'} skillSet={SkillTools}/>
        </Box>
        
      </VStack>
    </Box>
  )
}

export default AboutMeMobile;