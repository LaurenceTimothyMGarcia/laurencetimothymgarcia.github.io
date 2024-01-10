import React from 'react';
import { Center, Grid, GridItem, Heading, background } from '@chakra-ui/react'
import SWECanvas from './SWECanvas';
import GameDevCanvas from './GameDevCanvas';
import { Link } from "react-router-dom";
import colors from '../../theme/Color';

function PortfolioDesktop() {

  const hoverColor = colors.text;

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

      // gap={"0.5rem"}
    >
      <GridItem
        area={'secTitle'}
        // bg={'green'}
      >
        <Center><Heading mb={'1rem'} mt={'3rem'} color={colors.primary}>Project Portfolios</Heading></Center>
      </GridItem>

      <GridItem
        area={'swe'}
        border={'1px solid white'}
        // bg={'green'}
        _hover={{
          backgroundColor: hoverColor
        }}
      >
        <Link to='/swe-portfolio'>
          <SWECanvas/>
        </Link>
        
      </GridItem>

      <GridItem
        area={'gamedev'}
        // bg={'green'}
        border={'1px solid white'}
        
        _hover={{
          backgroundColor: hoverColor
        }}
      >
        <Link to='/gamedev-portfolio'>
          <GameDevCanvas/>
        </Link>
        
      </GridItem>

      <GridItem
        area={'sweTitle'}
        // bg={'green'}
        _hover={{
          backgroundColor: hoverColor
        }}
      >
        <Center><Heading size={'lg'} color={colors.secondary}><Link to='/swe-portfolio'>Software Engineering Portfolio</Link></Heading></Center>
      </GridItem>

      <GridItem
        area={'gamedevTitle'}
        // bg={'green'}
        _hover={{
          backgroundColor: hoverColor
        }}
      >
        <Center><Heading size={'lg'} color={colors.secondary}><Link to='/gamedev-portfolio'>Game Development Portfolio</Link></Heading></Center>
      </GridItem>
    </Grid>
  )
}

export default PortfolioDesktop;