import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react'

function Main() {
  return(
    <Box>
      <AboutMeSection/>
    </Box>
  )
}

function AboutMeSection() {
  return(
    <Grid
      h={"85vh"}

      templateAreas={`"secTitle secTitle secTitle"
                      "intro canvas workExp"
                      "edu canvas skills"
                      "edu cont skills"`}
      
      gridTemplateRows={'1fr 2fr repeat(2, 1fr)'}
      gridTemplateColumns={'1fr 2fr 1fr'}
      
      
      // templateRows='1fr 2fr repeat(2, 1fr)'
      // templateColumns='1fr 2fr 1fr'
      gap={"0.5rem"}
    >
      <GridItem 
        area={'secTitle'}
        bg='tomato'>
        About Me
      </GridItem>

      <GridItem 
        area={'intro'}
        bg={'tomato'}
      >
        Introduction
      </GridItem>

      <GridItem 
        area={'canvas'}
        bg={'tomato'}
      >
        Canvas
      </GridItem>

      <GridItem 
        area={'workExp'}
        bg={'tomato'}
      >
        Work Experience
      </GridItem>

      <GridItem 
        area={'edu'}
        bg={'tomato'}
      >
        Education
      </GridItem>

      <GridItem 
        area={'cont'}
        bg={'tomato'}
      >
        Next/Prev
      </GridItem>

      <GridItem 
        area={'skills'}
        bg={'tomato'}
      >
        Skills
      </GridItem>
      
    </Grid>
  )
}

export default Main