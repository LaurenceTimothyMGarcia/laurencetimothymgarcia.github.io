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
        <Center><Heading color={colors.secondary}>Introduction</Heading></Center>
        {/* <Text>{Intro}</Text> */}
        <Text>Hi there! I am Laurence Garcia, a newly graduated Computer Science major from Cal Poly Pomona</Text>
        <UnorderedList>

          <ListItem>
            I am on my journey to refine my skill set in the fields of Software Engineering, Game Development, and Technical Art.
          </ListItem>

          <ListItem>
            I recently interned at Nickelodeon Animation Studios, where I developed 
            production-enhancing tools that help assist the various teams. 
          </ListItem>

          <ListItem>
            I was the President of the CPP Game Development Club where I brought together 
            a community of students who are passionate about game development, hosting 
            guest speakers and club projects.
          </ListItem>
        </UnorderedList>
      </GridItem>

      <GridItem 
        area={'canvas'}
        // bg={colors.bgSecondary}

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