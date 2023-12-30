import React from 'react';
import { Center, Grid, GridItem, Heading } from '@chakra-ui/react'

function PortfolioDesktop() {
  return (
    <Grid
      h={'85vh'}

      templateAreas={`"secTitle secTitle secTitle"
                      "swe canvas gamedev"`}
      gridTemplateRows={'1fr 4fr'}
      gridTemplateColumns={'1fr 2fr 1fr'}

      gap={"0.5rem"}
    >
      <GridItem
        area={'secTitle'}
        // bg={'green'}
      >
        <Center><Heading>Project Porfolios</Heading></Center>
      </GridItem>

      <GridItem
        area={'swe'}
        bg={'green'}
      >
        SWE Projects
      </GridItem>

      <GridItem
        area={'canvas'}
        bg={'green'}
      >
        Canvas
      </GridItem>

      <GridItem
        area={'gamedev'}
        bg={'green'}
      >
        Game Dev Projects
      </GridItem>
    </Grid>
  )
}

export default PortfolioDesktop;