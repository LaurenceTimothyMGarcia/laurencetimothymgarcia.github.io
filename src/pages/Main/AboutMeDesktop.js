import React from 'react';
import { Grid, GridItem, Heading, Center } from '@chakra-ui/react'
import AboutMeCanvas from './AboutMeCanvas';

function AboutMeDesktop() {
  return(
    <Grid
      h={"85vh"}

      templateAreas={`"secTitle secTitle secTitle"
                      "intro canvas workExp"
                      "edu canvas skills"
                      "edu cont skills"`}
      
      gridTemplateRows={'0.25fr 2.25fr repeat(2, 1.25fr)'}
      gridTemplateColumns={'1fr 2fr 1fr'}
      
      gap={"0.5rem"}
    >
      <GridItem 
        area={'secTitle'}
        // bg='tomato'
      >
        <Center><Heading>About Me</Heading></Center>
      </GridItem>

      <GridItem 
        area={'intro'}
        // bg={'tomato'}
      >
        <Center><Heading>Introduction</Heading></Center>
      </GridItem>

      <GridItem 
        area={'canvas'}
        // bg={'tomato'}
      >
        <AboutMeCanvas/>
      </GridItem>

      <GridItem 
        area={'workExp'}
        // bg={'tomato'}
      >
        <Center><Heading>Work Experience</Heading></Center>
      </GridItem>

      <GridItem 
        area={'edu'}
        // bg={'tomato'}
      >
        <Center><Heading>Education</Heading></Center>
      </GridItem>

      <GridItem 
        area={'cont'}
        // bg={'tomato'}
      >
        Next/Prev
      </GridItem>

      <GridItem 
          area={'skills'}
          // bg={'tomato'}
      >
        <Center><Heading>Skills</Heading></Center>
      </GridItem>

    </Grid>
  )
}

export default AboutMeDesktop;