import React from 'react';
import { Grid, GridItem, Heading, Center, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import AboutMeCanvas from './AboutMeCanvas';
import SkillDisplay from '../../components/SkillDisplay';
import SkillLanguages from '../../data/SkillLanguages';
import SkillTools from '../../data/SkillTools';
import Intro from '../../data/Introduction';

import colors from '../../theme/Color';

function AboutMeDesktop() {
  return(
    <Grid
      h={"85vh"}

      templateAreas={`"secTitle secTitle secTitle"
                      "intro canvas skills"
                      "edu canvas skills"`}
      
      gridTemplateRows={'0.25fr 2fr 1.75fr'}
      gridTemplateColumns={'1fr 2fr 1fr'}
      
      gap={"0.5rem"}
    >
      <GridItem 
        area={'secTitle'}
        // bg='tomato'
      >
        <Center><Heading color={colors.primary}>About Me</Heading></Center>
      </GridItem>

      <GridItem 
        area={'intro'}
        // bg={'tomato'}
        overflowY={'scroll'}
      >
        <Center><Heading color={colors.secondary}>Introduction</Heading></Center>
        <Text>{Intro}</Text>
      </GridItem>

      <GridItem 
        area={'canvas'}
        bg={colors.bgSecondary}

        // boxShadow={'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;'}
      >
        <AboutMeCanvas/>
      </GridItem>

      <GridItem 
        area={'edu'}
        // bg={'tomato'}
      >
        <Center><Heading color={colors.secondary}>Education</Heading></Center>
        <Center><Heading size={'md'}>Computer Science B.S</Heading></Center>
        <Center><Heading size={'md'}>Cal Poly Pomona</Heading></Center>

        <Center>
          <UnorderedList>
            <ListItem>GPA: 3.82</ListItem>
            <ListItem>Summa Cum Laude</ListItem>
            <ListItem>Dean's & President's List: All Semesters</ListItem>
            <ListItem>CPP Game Development Club</ListItem>
            <UnorderedList>
              <ListItem>Secretary (2021-2022)</ListItem>
              <ListItem>President (2022-2023)</ListItem>
            </UnorderedList>
          </UnorderedList>
        </Center>
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