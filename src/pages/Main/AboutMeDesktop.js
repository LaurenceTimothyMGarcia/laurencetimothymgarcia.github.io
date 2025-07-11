import React from 'react';
import { Grid, GridItem, Heading, Center, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import AboutMeCanvas from './AboutMeCanvas';
import SkillDisplay from '../../components/SkillDisplay';
import SkillLanguages from '../../data/SkillLanguages';
import SkillTools from '../../data/SkillTools';
import Intro from '../../data/Introduction';
import colors from '../../theme/Color';
import IntroSection from './IntroSection';
import Education from './Education';

function AboutMeDesktop() {
  return(
    <Grid
      h={"100%"}

      templateAreas={`"secTitle secTitle secTitle"
                      "intro canvas skills"
                      "edu canvas skills"`}
      
      gridTemplateRows={'0.25fr 2fr 1.75fr'}
      gridTemplateColumns={'1fr 2fr 1fr'}
      
      gap={"0.5rem"}
    >
      <GridItem 
        area={'secTitle'}
        pt={'1rem'}
        pb={'1rem'}
      >
        <Center><Heading color={colors.primary}>About Me</Heading></Center>
      </GridItem>

      <GridItem 
        area={'intro'}
        // bg={'tomato'}
        overflowY={'auto'}
      >
        <IntroSection />
      </GridItem>

      <GridItem 
        area={'canvas'}
        // bg={colors.bgSecondary}

        border={'2px solid'}
        borderColor={colors.contrast}

        // boxShadow={'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;'}
      >
        <AboutMeCanvas/>
      </GridItem>

      <GridItem 
        area={'edu'}
        // bg={'tomato'}
      >
        <Education />
      </GridItem>

      <GridItem 
        area={'skills'}
        // bg={'tomato'}
      >
        <Center><Heading size={'lg'} color={colors.secondary}>Skills</Heading></Center>
        <SkillDisplay sectionTitle={'Programming Languages'} skillSet={SkillLanguages}/>
        <SkillDisplay sectionTitle={'Tools'} skillSet={SkillTools}/>
      </GridItem>

    </Grid>
  )
}

export default AboutMeDesktop;