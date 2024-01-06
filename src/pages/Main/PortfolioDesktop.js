import React from 'react';
import { Center, Grid, GridItem, Heading } from '@chakra-ui/react'
import SWECanvas from './SWECanvas';
import GameDevCanvas from './GameDevCanvas';

function PortfolioDesktop() {
  return (
    <Grid
      h={'85vh'}

      // templateAreas={`"secTitle secTitle secTitle secTitle"
      //                 "swe canvas gamedev"`}
      // gridTemplateRows={'4fr'}
      // gridTemplateColumns={'2fr 2fr'}

      templateAreas={`"secTitle secTitle secTitle secTitle"
                      "sweTitle sweTitle gamedevTitle gamedevTitle"
                      "swe swe gamedev gamedev"
                    `}
      gridTemplateRows={'0.5fr 0.5fr 3fr '}
      gridTemplateColumns={'repeat(4, 1fr)'}

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
        // bg={'green'}
      >
        <SWECanvas/>
      </GridItem>

      <GridItem
        area={'gamedev'}
        // bg={'green'}
      >
        <GameDevCanvas/>
      </GridItem>

      <GridItem
        area={'sweTitle'}
        // bg={'green'}
      >
        <Center><Heading>Software Development Projects</Heading></Center>
      </GridItem>

      <GridItem
        area={'gamedevTitle'}
        // bg={'green'}
      >
        <Center><Heading>Game Development Projects</Heading></Center>
      </GridItem>
    </Grid>
  )
}

export default PortfolioDesktop;