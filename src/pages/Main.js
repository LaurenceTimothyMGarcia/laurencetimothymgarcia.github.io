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
      templateRows='1fr repeat(2, 2fr)'
      templateColumns='repeat(3, 1fr)'
      gap={"0.5rem"}
    >
      <GridItem colSpan={3} bg='tomato'>
        About Me
      </GridItem>

      <GridItem bg={'tomato'}>
        Introduction
      </GridItem>
      <GridItem bg={'tomato'}>
        Canvas
      </GridItem>
      <GridItem bg={'tomato'}>
        Work Experience
      </GridItem>

      <GridItem bg={'tomato'}>
        Education
      </GridItem>
      <GridItem bg={'tomato'}>
        Next/Prev
      </GridItem>
      <GridItem bg={'tomato'}>
        Skills
      </GridItem>
    </Grid>
  )
}

export default Main